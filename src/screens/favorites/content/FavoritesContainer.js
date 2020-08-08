import React from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import FavoriteCard from './FavoriteCard';

const FavoritesContainer = ({
  appTheme,
  allCurrencies,
  addFavoriteCurrency,
  updateCurrency
}) => {
  const styles = getStyle(appTheme)
  
  return(
    <View style={styles.favoritesContainer}>
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
      justifyContent: 'center',
      width: '100%'
    }
  })
)

export default FavoritesContainer