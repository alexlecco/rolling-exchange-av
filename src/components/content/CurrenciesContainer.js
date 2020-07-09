import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Button } from 'react-native-paper'
import CurrencyCard from './CurrencyCard';

// lightTheme or darkTheme
import { darkTheme as theme } from '../../constants/colors'

const CurrenciesContainer = ({ changeScreen }) => (
  <>
    <View style={styles.currenciesContainer}>
      <Button onPress={() => changeScreen(false)} style={styles.button}>
        <Text style={styles.buttonText}>Agregar nueva moneda</Text>
      </Button>
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
    backgroundColor: theme.primary,
  },
  buttonText: {
    color: theme.link,
  }
})

export default CurrenciesContainer