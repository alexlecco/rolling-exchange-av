import React from 'react'
import { StyleSheet, View } from 'react-native'
import CurrencyCard from './CurrencyCard'

const CurrenciesContainer = () => (
  <View style={styles.curranciesContainer}>
    <CurrencyCard currency="USD" />
    <CurrencyCard currency="EUR" />
    <CurrencyCard currency="YEN" />
  </View>
)

const styles = StyleSheet.create({
  curranciesContainer: {
    flex: 8,
    backgroundColor: colors.background1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
});

export default CurrenciesContainer