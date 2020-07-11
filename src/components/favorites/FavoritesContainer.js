import React from 'react'
import { View } from 'react-native'
import FavoriteCard from './FavoriteCard';
import currencies from '../../constants/currencies'

const FavoritesContainer = ({ appTheme }) => (
  <View style={getStyle(appTheme, 'favoritesContainer')}>
    {currencies.map(curr => 
      <FavoriteCard
        key={curr.name}
        appTheme={appTheme}
        name={curr.name}
        flag={curr.flag}
      />
    )}
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