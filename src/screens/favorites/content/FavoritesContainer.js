import React, { useState, useEffect } from 'react'
import { StyleSheet, View, ScrollView, Text } from 'react-native'
import { currencyService } from '../../../services/currencyService'
import FavoriteCard from './FavoriteCard';

const FavoritesContainer = ({
  appTheme,
  allCurrencies,
  addFavoriteCurrency,
  updateCurrency
}) => {
  const styles = getStyle(appTheme)
  const [cacheInfo, setCacheInfo] = useState(null)

  useEffect(() => {
    const loadCacheInfo = async () => {
      try {
        const mainCurrenciesUpdated = await currencyService.areMainCurrenciesUpdated()
        setCacheInfo({
          mainCurrenciesUpdated,
          timestamp: Date.now()
        })
      } catch (error) {
        console.log('Error loading cache info:', error)
      }
    }

    loadCacheInfo()
  }, [allCurrencies])
  
  return(
    <View style={styles.favoritesContainer}>
      {cacheInfo && (
        <View style={styles.cacheStatusContainer}>
          <Text style={styles.cacheStatusText}>
            {cacheInfo.mainCurrenciesUpdated 
              ? 'Tasas principales actualizadas' 
              : 'Algunas tasas necesitan actualización'
            }
          </Text>
        </View>
      )}
      
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', width: '100%' }}>
        {allCurrencies.map(curr => 
          <FavoriteCard
            key={curr.name}
            appTheme={appTheme}
            name={curr.name}
            flag={curr.flag}
            isFavorite={curr.isFavorite}
            updateCurrency={updateCurrency}
            addFavoriteCurrency={addFavoriteCurrency}
          />
        )}
      </ScrollView>
    </View>
  )
}

const getStyle = theme => (
  StyleSheet.create({
    favoritesContainer: {
      flex: 8,
      backgroundColor: theme.primary,
      alignItems: 'center',
      justifyContent: 'flex-start',
      width: '100%',
      paddingTop: 20,
    },
    cacheStatusContainer: {
      backgroundColor: theme.secondary,
      paddingHorizontal: 12,
      paddingVertical: 6,
      borderRadius: 15,
      marginBottom: 20,
    },
    cacheStatusText: {
      color: theme.textSecondary,
      fontSize: 11,
      textAlign: 'center',
      fontWeight: '500',
    }
  })
)

export default FavoritesContainer