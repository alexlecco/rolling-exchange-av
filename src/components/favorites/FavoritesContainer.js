import React from 'react'
import { View } from 'react-native'
import FavoriteCard from './FavoriteCard'
import currencies from '../../constants/currencies'

const FavoritesContainer = ({ appTheme }) => (
  <View style={getStyle(appTheme, 'favoritesContainer')}>
    {
      currencies.map(currency => (
        <FavoriteCard
          key={currency.name}
          appTheme={appTheme}
          name={currency.name}
          flag={currency.flag}
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