import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Button } from 'react-native-paper'
import CurrencyCard from './CurrencyCard';

// lightTheme or darkTheme
import { darkTheme as theme } from '../../constants/colors'

const CurrenciesContainer = ({ changeScreen }) => (
  <>
    <Button onPress={() => changeScreen(false)}>
      <Text style={styles.button}>Agregar nueva moneda</Text>
    </Button>
    <View style={styles.currenciesContainer}>
      <CurrencyCard name="ARS" flag={"ars"} />
      <CurrencyCard name="EUR" flag={"eur"} />
      <CurrencyCard name="JPY" flag={"jpy"} />
    </View>
  </>
)

const styles = StyleSheet.create({
  currenciesContainer: {
    flex: 8,
    backgroundColor: theme.primary,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  button: {
    color: theme.link
  }
})

export default CurrenciesContainer