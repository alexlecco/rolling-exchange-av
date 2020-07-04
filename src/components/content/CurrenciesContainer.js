import React from 'react'
import { StyleSheet, View } from 'react-native'
import CurrencyCard from './CurrencyCard';

// lightTheme or darkTheme
import { darkTheme as theme } from '../../constants/colors'

const CurrenciesContainer = () => (
  <View style={styles.currenciesContainer}>
    <CurrencyCard name="USD" />
    <CurrencyCard name="EUR" />
    <CurrencyCard name="JPY" />
  </View>
)

const styles = StyleSheet.create({
  currenciesContainer: {
    flex: 8,
    backgroundColor: theme.primary,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  }
})

export default CurrenciesContainer