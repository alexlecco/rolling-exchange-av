import React from 'react'
import { StyleSheet, View } from 'react-native'
import FavoriteCard from './FavoriteCard';

// lightTheme or darkTheme
import { darkTheme as theme } from '../../constants/colors'

const FavoritesContainer = () => (
  <View style={styles.favoritesContainer}>
    <FavoriteCard name="ARS" flag={"ars"} />
    <FavoriteCard name="EUR" flag={"eur"} />
    <FavoriteCard name="JPY" flag={"jpy"} />
  </View>
)

const styles = StyleSheet.create({
  favoritesContainer: {
    flex: 8,
    backgroundColor: theme.primary,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  }
})

export default FavoritesContainer