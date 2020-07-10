import React from 'react'
import { View, Text } from 'react-native'
import { Button } from 'react-native-paper'
import CurrencyCard from './CurrencyCard';

const CurrenciesContainer = ({ changeScreen, appTheme, amount, allCurrencies }) => {  
  return(
  <>
    <View style={getStyle(appTheme, 'currenciesContainer')}>
      <Button onPress={() => changeScreen(false)} style={getStyle(appTheme,'button')}>
        <Text style={getStyle(appTheme, 'buttonText')}>Agregar nueva moneda</Text>
      </Button>
      {
        allCurrencies.filter(currency => currency.isFavorite).map(currency => (
          <CurrencyCard
            key={currency.name}
            appTheme={appTheme}
            name={currency.name}
            flag={currency.flag}
            amount={amount}
          />
        ))
      }
    </View>
  </>
)}

const getStyle = (theme, component) => {
  switch(component) {
    case 'currenciesContainer':
      return({
        flex: 8,
        backgroundColor: theme.primary,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
      })
  case 'button':
    return({
      backgroundColor: theme.primary,
    })
  case 'buttonText':
    return({
      color: theme.link,

    })
  }
}

export default CurrenciesContainer