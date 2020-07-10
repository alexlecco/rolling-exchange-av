import React from 'react'
import { View } from 'react-native'
import FavoriteCard from './FavoriteCard';

const FavoritesContainer = ({ appTheme }) => (
  <View style={getStyle(appTheme, 'favoritesContainer')}>
    <FavoriteCard appTheme={appTheme} name="EUR" flag={"eur"} />
    <FavoriteCard appTheme={appTheme} name="ARS" flag={"ars"} />
    <FavoriteCard appTheme={appTheme} name="JPY" flag={"jpy"} />
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