import React from 'react'
import { View } from 'react-native'
import FavoriteCard from './FavoriteCard';

const FavoritesContainer = ({
  appTheme,
  allCurrencies,
  addFavoriteCurrency,
  updateCurrency
}) => (
  <View style={getStyle(appTheme, 'favoritesContainer')}>
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