import React, { useState } from 'react'
import { View, Text, Image } from 'react-native'
import { TextInput, Button } from 'react-native-paper'

const CurrenciesTop = ({ appTheme, fromCurrency, amount, setAmount }) => {
  const [ showSelection, setShowSelection ] = useState(true)
  const flagRequire = {
    ars: require('../../assets/flags/ars.png'),
    usd: require('../../assets/flags/usd.png'),
    eur: require('../../assets/flags/eur.png'),
    jpy: require('../../assets/flags/jpy.png'),
  }
  const onPressFromCurrency = () => {
    setShowSelection(!showSelection)
  }

  return(
    <>
      <View style={getStyle(appTheme, 'topContainer')}>
        <View style={getStyle(appTheme, 'fromCurrency')}>
          <Button style={getStyle(appTheme, 'fromCurrencyButton')} onPress={() => onPressFromCurrency()}>
            <Image
              source={flagRequire[fromCurrency]}
              style={{ width: 20, height: 20 }}
            />
            <Text style={getStyle(appTheme, 'fromCurrencyName')}>{fromCurrency.toUpperCase()}</Text>
          </Button>
        </View>

        <TextInput
          style={getStyle(appTheme, 'input')}
          keyboardType='numeric'
          label="¿Cuanto queres convertir?"
          value={amount}
          onChangeText={input => setAmount(input)}
        />
        {
          amount !== '' ?
            <Button onPress={() => setAmount('')} icon='close' color={appTheme.link} />
          :
            <View style={{ width: 65 }} />
        }
      </View>
      {
        showSelection &&
        <View style={getStyle(appTheme, 'selection')}>
          <Text style={getStyle(appTheme, 'selectionText')}>Selecciona una moneda</Text>
          <View style={getStyle(appTheme, 'selectionCurrencies')}>
            <View style={getStyle(appTheme, 'selectionCurrenciesButton')}>
              <Image
                source={flagRequire['usd']}
                style={{ width: 50, height: 50 }}
              />
              <Text style={getStyle(appTheme, 'fromCurrencyName')}>{'usd'.toUpperCase()}</Text>
            </View>
            <View style={getStyle(appTheme, 'selectionCurrenciesButton')}>
              <Image
                source={flagRequire['ars']}
                style={{ width: 50, height: 50 }}
              />
              <Text style={getStyle(appTheme, 'fromCurrencyName')}>{'ars'.toUpperCase()}</Text>
            </View>
            <View style={getStyle(appTheme, 'selectionCurrenciesButton')}>
              <Image
                source={flagRequire['eur']}
                style={{ width: 50, height: 50 }}
              />
              <Text style={getStyle(appTheme, 'fromCurrencyName')}>{'eur'.toUpperCase()}</Text>
            </View>
            <View style={getStyle(appTheme, 'selectionCurrenciesButton')}>
              <Image
                source={flagRequire['jpy']}
                style={{ width: 50, height: 50 }}
              />
              <Text style={getStyle(appTheme, 'fromCurrencyName')}>{'jpy'.toUpperCase()}</Text>
            </View>
          </View>
        </View>
      }
    </>
  )
}

const getStyle = (theme, component) => {
  switch(component) {
    case 'topContainer':
      return({
        flex: 1.6,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        width: '100%',
        backgroundColor: theme.secondary,
      })
    case 'input':
      return({
        width: '60%',
        paddingBottom: 10,
        height: 60
      })
    case 'fromCurrency':
      return({
        width: '35%',
        paddingBottom: 10,
        height: 60,
        marginRight: 1,
        alignItems: 'center',
      })
    case 'fromCurrencyName':
      return({
        color: theme.link,
        textAlign: 'center',
        marginTop: 5,
      })
    case 'selection':
      return({
        width: '100%',
        backgroundColor: theme.secondary,
      })
    case 'selectionText':
      return({
        color: theme.textSecondary,
        textAlign: 'center',
        marginTop: 5,
        marginBottom: 5,
      })
    case 'selectionCurrencies':
      return({
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        width: '25%',
        width: '100%',
        paddingBottom: 10,
      })
    case 'selectionCurrenciesButton':
      return({
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        width: '25%',
        paddingTop: 10,
      })
    case 'fromCurrencyButton':
      return({
        flex: 1.6,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        width: '100%',
        height: 50,
        marginLeft: 30,
      })
  }
}

export default CurrenciesTop