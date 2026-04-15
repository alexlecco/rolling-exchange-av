import React, { useState, useEffect, Fragment } from 'react';
import moment from 'moment'
import { StyleSheet, View, StatusBar, Platform, Dimensions } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Provider as PaperProvider } from 'react-native-paper'
import { currencyService } from './src/services/currencyService'
import CurrenciesTop from './src/screens/currencies/CurrenciesTop'
import CurrenciesContainer from './src/screens/currencies/content/CurrenciesContainer'
import CurrenciesBottom from './src/screens/currencies/CurrenciesBottom'
import FavoritesTop from './src/screens/favorites/FavoritesTop'
import FavoritesContainer from './src/screens/favorites/content/FavoritesContainer'
import { currencies, initialRates } from './src/constants/currencies'

import { darkTheme } from './src/constants/colors'
import { lightTheme } from './src/constants/colors'

const windowHeigh = Dimensions.get('screen').height

const THEME = '@theme'
const FAV_CURRENCIES = '@favCurrencies'

export default function App() {
  const defaultTheme = darkTheme
  const defaultCurrencies = currencies.map(curr => ({ ...curr, isFavorite: false }))
  
  const getTheme = async () => {
    const theme = await AsyncStorage.getItem(THEME)
    return theme !== null ? JSON.parse(theme) : defaultTheme
  }
  const getDeviceCurrencies = async () => {
    const currencies = await AsyncStorage.getItem(FAV_CURRENCIES)
    return currencies !== null ? JSON.parse(currencies) : defaultCurrencies
  }

  const [ lastRates, setLastRates ] = useState(initialRates)
  const [ mainVisible, setMainVisible ] = useState(true)
  const [ fromCurrency, setFromCurrency ] = useState('usd')
  const [ amount, setAmount ] = useState('')
  const [ favoriteCurrencies, setFavoriteCurrencies ] = useState([])
  const [ allCurrencies, setAllCurrencies ] = useState(defaultCurrencies)
  const [ deviceCurrencies, setDeviceCurrencies ] = useState([])
  const [ filteredCurrencies, setFilteredCurrencies ] = useState([])
  const [ appTheme, setAppTheme ] = useState(defaultTheme)
  const [ isLoading, setIsLoading ] = useState(false)
  const [ isFromCache, setIsFromCache ] = useState(false)
  const [ lastUpdateTime, setLastUpdateTime ] = useState(null)
  const [ cacheAge, setCacheAge ] = useState(null)
  const [ updateError, setUpdateError ] = useState(null)

  useEffect(() => {
    getTheme().then(setAppTheme).catch(setAppTheme(defaultTheme))
    getDeviceCurrencies().then(setDeviceCurrencies).catch(setDeviceCurrencies(defaultCurrencies))
    
    // Cargar tasas iniciales
    updateRates()
  }, [])

  const clearAppData = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys()
      await AsyncStorage.multiRemove(keys)
    } catch(e) {
      console.log(e)
    }
  }

  const searchCurrency = term => {
    let currentCurrencies = deviceCurrencies
    let resultCurrencies = []

    if(term !== '' && term.length > 2) {
      resultCurrencies = currentCurrencies.filter(
        currency => {
          const formattedCurrency = currency.nickname.toLowerCase()
          const formattedTerm = term.toLowerCase()
          return formattedCurrency.includes(formattedTerm)
        }
      )
    } else {
      resultCurrencies = deviceCurrencies
    }

    updateList(resultCurrencies, term)
  }

  const updateList = (newList, term) => {
    term !== '' ?
      setFilteredCurrencies(newList)
    :
      setFilteredCurrencies(deviceCurrencies)
  }

  const updateTheme = async () => {
    try {
      if(appTheme.name === 'darkTheme') {
        setAppTheme(lightTheme)
        const theme = JSON.stringify(lightTheme)
        await AsyncStorage.setItem(THEME, theme)
      } else {
        setAppTheme(darkTheme)
        const theme = JSON.stringify(darkTheme)
        await AsyncStorage.setItem(THEME, theme)
      }
    } catch(e) {
      console.log(e)
    }
  }

  const styles = getStyle(appTheme)
  const updateRates = async (forceRefresh = false) => {
    setIsLoading(true)
    setUpdateError(null)
    
    try {
      let ratesData;
      
      if (forceRefresh) {
        // Forzar actualización desde API
        ratesData = await currencyService.forceUpdate(fromCurrency.toUpperCase());
      } else {
        // Usar cache si está disponible y actualizado
        ratesData = await currencyService.getRates(fromCurrency.toUpperCase());
      }
      
      // Actualizar estados
      setLastRates({
        ...ratesData,
        hour: moment(ratesData.timestamp).format('H:mm'),
        date: moment(ratesData.timestamp).format('YYYY-MM-DD')
      });
      
      setIsFromCache(ratesData.fromCache);
      setLastUpdateTime(ratesData.timestamp);
      setCacheAge(ratesData.age);
      
      if (ratesData.error) {
        setUpdateError(ratesData.error);
      }
      
    } catch (error) {
      console.log('Error updating rates:', error);
      setUpdateError('Error al actualizar tasas');
    } finally {
      setIsLoading(false);
    }
  }

  const addFavoriteCurrency = newCurrency => {
    setFavoriteCurrencies( prevState => [...prevState, newCurrency] )
  }

  const updateCurrency = async ( name, isFavorite ) => {
    let temp_allCurrencies = deviceCurrencies
    const objIndex = allCurrencies.findIndex((obj => obj.name === name))
    temp_allCurrencies[objIndex].isFavorite = !isFavorite
    setAllCurrencies(temp_allCurrencies)
    AsyncStorage.setItem(FAV_CURRENCIES, JSON.stringify(temp_allCurrencies))
  }

  return (
    <PaperProvider>
      <View style={{ minHeight: windowHeigh }}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        {Platform.OS === 'android' && <View style={styles.statusBarUnderlay} />}

        {
          mainVisible ?
          (
            <Fragment>
              <CurrenciesTop
                appTheme={appTheme}
                fromCurrency={fromCurrency}
                setFromCurrency={setFromCurrency}
                amount={amount}
                setAmount={setAmount}
                updateRates={updateRates}
              />
              <CurrenciesContainer
                appTheme={appTheme}
                fromCurrency={fromCurrency}
                amount={amount}
                changeScreen={setMainVisible}
                allCurrencies={deviceCurrencies}
                lastRates={lastRates}
              />
              <CurrenciesBottom
                appTheme={appTheme}
                updateTheme={updateTheme}
                updateRates={updateRates}
                lastRates={lastRates}
                isLoading={isLoading}
                isFromCache={isFromCache}
                cacheAge={cacheAge}
                updateError={updateError}
                clearAppData={clearAppData}
              />
            </Fragment>
          )
          :
          (
            <Fragment>
              <FavoritesTop
                appTheme={appTheme}
                changeScreen={setMainVisible}
                searchCurrency={searchCurrency}
              />
              <FavoritesContainer
                appTheme={appTheme}
                allCurrencies={filteredCurrencies}
                addFavoriteCurrency={addFavoriteCurrency}
                updateCurrency={updateCurrency}
              />
            </Fragment>
          )
        }
      </View>
    </PaperProvider>
  );
}

const getStyle = theme => (
  StyleSheet.create({
    statusBarUnderlay: {
      height: 28,
      backgroundColor: theme.secondary,
    }
  })
)