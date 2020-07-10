import React from 'react'
import { View } from 'react-native'
import FavoriteCard from './FavoriteCard'

const FavoritesContainer = ({ appTheme, updateFavoriteCurrencies, allCurrencies, updateCurrency }) => (
  <View style={getStyle(appTheme, 'favoritesContainer')}>
    {
      allCurrencies.map(currency => (
        <FavoriteCard
          key={currency.name}
          appTheme={appTheme}
          name={currency.name}
          flag={currency.flag}
          isFavorite={currency.isFavorite}
          updateCurrency={updateCurrency}
          updateFavoriteCurrencies={updateFavoriteCurrencies}
        />
      ))
    }
  </View>
)

const getStyle = (theme, component) => {
  switch(component) {
    case 'favoritesContainer':
      return({
        flex: 8,
        backgroundColor: theme.primary,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
      })
  }
}

export default FavoritesContainer