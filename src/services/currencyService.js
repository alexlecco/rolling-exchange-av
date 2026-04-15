import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';

const CACHE_KEY = '@currency_rates_cache';
const CACHE_DURATION = 1 * 60 * 1000; // 1 minuto (temporal para forzar actualización)
const MAIN_CURRENCIES = ['USD', 'EUR', 'JPY', 'ARS'];

// Helper functions outside the object to avoid circular references
const getCachedRates = async (baseCurrency) => {
  try {
    const cacheData = await AsyncStorage.getItem(CACHE_KEY);
    if (!cacheData) return null;
    
    const cache = JSON.parse(cacheData);
    return cache[baseCurrency] || null;
  } catch (error) {
    console.log('Error getting cached rates:', error);
    return null;
  }
};

const setCachedRates = async (baseCurrency, rates) => {
  try {
    const cacheData = await AsyncStorage.getItem(CACHE_KEY);
    let cache = cacheData ? JSON.parse(cacheData) : {};
    
    cache[baseCurrency] = {
      ...rates,
      timestamp: Date.now(),
      base: baseCurrency
    };
    
    cache.lastGlobalUpdate = Date.now();
    
    await AsyncStorage.setItem(CACHE_KEY, JSON.stringify(cache));
    return true;
  } catch (error) {
    console.log('Error setting cached rates:', error);
    return false;
  }
};

const needsUpdate = async (baseCurrency) => {
  try {
    const cache = await getCachedRates(baseCurrency);
    if (!cache) return true;
    
    const now = Date.now();
    const cacheAge = now - cache.timestamp;
    return cacheAge > CACHE_DURATION;
  } catch (error) {
    console.log('Error checking cache update:', error);
    return true;
  }
};

export const currencyService = {
  // Verificar si el cache necesita actualización
  needsUpdate,

  // Obtener tasas cacheadas
  getCachedRates,

  // Guardar tasas en cache
  setCachedRates,

  // Obtener tasas (desde cache o API)
  getRates: async (baseCurrency = 'USD') => {
    try {
      // Primero verificar cache
      const needsUpdateResult = await needsUpdate(baseCurrency);
      
      if (!needsUpdateResult) {
        const cachedRates = await getCachedRates(baseCurrency);
        if (cachedRates) {
          return {
            ...cachedRates,
            fromCache: true,
            age: Date.now() - cachedRates.timestamp
          };
        }
      }

      // Si no hay cache o necesita actualización, llamar a API
      const response = await fetch(`https://open.er-api.com/v6/latest/${baseCurrency}`);
      const data = await response.json();
      
      if (data.result === 'success' && data.rates) {
        // Guardar en cache
        await setCachedRates(baseCurrency, data);
        
        return {
          ...data,
          timestamp: Date.now(),
          fromCache: false,
          age: 0
        };
      }
      
      throw new Error('Invalid API response');
    } catch (error) {
      console.log('Error getting rates:', error);
      
      // Fallback: intentar usar cache aunque esté desactualizado
      const cachedRates = await getCachedRates(baseCurrency);
      if (cachedRates) {
        return {
          ...cachedRates,
          fromCache: true,
          age: Date.now() - cachedRates.timestamp,
          error: 'API failed, using stale cache'
        };
      }
      
      throw error;
    }
  },

  // Obtener timestamp formateado de última actualización
  getLastUpdateFormatted: async (baseCurrency) => {
    try {
      const cache = await getCachedRates(baseCurrency);
      if (!cache) return 'Nunca';
      
      return moment(cache.timestamp).locale('es').format('H:mm - D [de] MMMM');
    } catch (error) {
      return 'Desconocido';
    }
  },

  // Obtener edad del cache en formato legible
  getCacheAgeFormatted: async (baseCurrency) => {
    try {
      const cache = await getCachedRates(baseCurrency);
      if (!cache) return null;
      
      const age = Date.now() - cache.timestamp;
      const minutes = Math.floor(age / (1000 * 60));
      
      if (minutes < 1) return 'Ahora mismo';
      if (minutes < 60) return `Hace ${minutes} min`;
      
      const hours = Math.floor(minutes / 60);
      if (hours < 24) return `Hace ${hours} h`;
      
      return moment(cache.timestamp).locale('es').fromNow();
    } catch (error) {
      return null;
    }
  },

  // Limpiar cache
  clearCache: async () => {
    try {
      await AsyncStorage.removeItem(CACHE_KEY);
      return true;
    } catch (error) {
      console.log('Error clearing cache:', error);
      return false;
    }
  },

  // Forzar actualización (ignorar cache)
  forceUpdate: async (baseCurrency = 'USD') => {
    try {
      const response = await fetch(`https://open.er-api.com/v6/latest/${baseCurrency}`);
      const data = await response.json();
      
      if (data.result === 'success' && data.rates) {
        await setCachedRates(baseCurrency, data);
        
        return {
          ...data,
          timestamp: Date.now(),
          fromCache: false,
          age: 0
        };
      }
      
      throw new Error('Invalid API response');
    } catch (error) {
      console.log('Error force updating rates:', error);
      throw error;
    }
  },

  // Verificar si tasas principales están actualizadas
  areMainCurrenciesUpdated: async () => {
    try {
      const results = await Promise.all(
        MAIN_CURRENCIES.map(async (currency) => {
          const needsUpdateResult = await needsUpdate(currency);
          return { currency, needsUpdate: needsUpdateResult };
        })
      );
      
      return results.filter(r => r.needsUpdate).length === 0;
    } catch (error) {
      console.log('Error checking main currencies:', error);
      return false;
    }
  }
};
