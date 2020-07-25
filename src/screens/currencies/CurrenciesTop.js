import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { TextInput, Button } from 'react-native-paper'

const CurrenciesTop = ({ appTheme, fromCurrency, setFromCurrency, amount, setAmount }) => {
  const [ showSelection, setShowSelection ] = useState(false)
  const flagRequire = {
    ars: require('../../assets/flags/ars.png'),
    usd: require('../../assets/flags/usd.png'),
    eur: require('../../assets/flags/eur.png'),
    jpy: require('../../assets/flags/jpy.png'),
  }
  const onHandleFromCurrency = () => {
    setShowSelection(!showSelection)
  }
  const onHandleSelectCurrency = currency => {
    setFromCurrency(currency)
    setShowSelection(!showSelection)
  }

  return(
    <>
      <View style={getStyle(appTheme, 'topContainer')}>
        <View style={getStyle(appTheme, 'fromCurrency')}>
          <TouchableOpacity onPress={() => onHandleFromCurrency()}>
            <Image
              source={flagRequire[fromCurrency]}
              style={{ width: 50, height: 50 }}
            />
            <Text style={getStyle(appTheme, 'fromCurrencyName')}>{fromCurrency.toUpperCase()}</Text>
          </TouchableOpacity>
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
              <TouchableOpacity onPress={() => onHandleSelectCurrency('usd')}>
                <Image
                  source={flagRequire['usd']}
                  style={{ width: 50, height: 50 }}
                />
                <Text style={getStyle(appTheme, 'fromCurrencyName')}>{'usd'.toUpperCase()}</Text>
              </TouchableOpacity>
            </View>
            <View style={getStyle(appTheme, 'selectionCurrenciesButton')}>
              <TouchableOpacity onPress={() => onHandleSelectCurrency('ars')}>
                <Image
                  source={flagRequire['ars']}
                  style={{ width: 50, height: 50 }}
                />
                <Text style={getStyle(appTheme, 'fromCurrencyName')}>{'ars'.toUpperCase()}</Text>
              </TouchableOpacity>
            </View>
            <View style={getStyle(appTheme, 'selectionCurrenciesButton')}>
              <TouchableOpacity onPress={() => onHandleSelectCurrency('eur')}>
                <Image
                  source={flagRequire['eur']}
                  style={{ width: 50, height: 50 }}
                />
                <Text style={getStyle(appTheme, 'fromCurrencyName')}>{'eur'.toUpperCase()}</Text>
              </TouchableOpacity>
            </View>
            <View style={getStyle(appTheme, 'selectionCurrenciesButton')}>
              <TouchableOpacity onPress={() => onHandleSelectCurrency('jpy')}>
                <Image
                  source={flagRequire['jpy']}
                  style={{ width: 50, height: 50 }}
                />
                <Text style={getStyle(appTheme, 'fromCurrencyName')}>{'jpy'.toUpperCase()}</Text>
              </TouchableOpacity>
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
  }
}

export default CurrenciesTop