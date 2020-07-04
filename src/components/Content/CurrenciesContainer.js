import React, { Fragment } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Button } from 'react-native-paper'
import CurrencyCard from './CurrencyCard'

//import { darkTheme as theme }  from '../../constants/colors'
import { darkTheme as theme }  from '../../constants/colors'

const CurrenciesContainer = ({ changeScreen }) => (
  <Fragment>
    <Button onPress={() => changeScreen(true)}>
      <Text style={styles.buttonText}>Agregar nueva Moneda</Text>
    </Button>
    <View style={styles.curranciesContainer}>
      <CurrencyCard currency="USD" flagURL={"usd"} />
      <CurrencyCard currency="EUR" flagURL={"eur"} />
      <CurrencyCard currency="JPY" flagURL={"jpy"} />
    </View>
  </Fragment>
)

const styles = StyleSheet.create({
  curranciesContainer: {
    flex: 8,
    backgroundColor: theme.primary,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  buttonText: {
    color: theme.link
  }
});

export default CurrenciesContainer