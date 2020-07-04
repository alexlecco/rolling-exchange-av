import React, { Fragment } from 'react'
import { StyleSheet, View } from 'react-native'
import FavoriteCard from './FavoriteCard'

//import { darkTheme as theme }  from '../../constants/colors'
import { darkTheme as theme }  from '../../constants/colors'

const FavoritesContainer = () => (
  <Fragment>
    <View style={styles.favoritesContainer}>
      <FavoriteCard currency="USD" flagURL={"usd"} />
      <FavoriteCard currency="EUR" flagURL={"eur"} />
      <FavoriteCard currency="JPY" flagURL={"jpy"} />
    </View>
  </Fragment>
)

const styles = StyleSheet.create({
  favoritesContainer: {
    flex: 8,
    backgroundColor: theme.primary,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
});

export default FavoritesContainer