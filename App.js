import React, { useState, useEffect, Fragment } from 'react';
import moment from 'moment'
import { StyleSheet, View, StatusBar, Platform, Dimensions } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';
import { Provider as PaperProvider } from 'react-native-paper'
import CurrenciesTop from './src/screens/currencies/CurrenciesTop'
import CurrenciesContainer from './src/screens/currencies/content/CurrenciesContainer'
import CurrenciesBottom from './src/screens/currencies/CurrenciesBottom'
import FavoritesTop from './src/screens/favorites/FavoritesTop'
import FavoritesContainer from './src/screens/favorites/content/FavoritesContainer'
import { currencies, initialRates } from './src/constants/currencies'

import { darkTheme } from './src/constants/colors'
import { lightTheme } from './src/constants/colors'

const windowHeigh = Dimensions.get('screen').height

const THEME = '@theme'

export default function App() {
  const defaultTheme = darkTheme
  const getTheme = async () => {
    const theme = await AsyncStorage.getItem(THEME)
    return theme !== null ? JSON.parse(theme) : darkTheme
  }

  const [ lastRates, setLastRates ] = useState(initialRates)
  const [ mainVisible, setMainVisible ] = useState(true)
  const [ fromCurrency, setFromCurrency ] = useState('usd')
  const [ amount, setAmount ] = useState('')
  const [ favoriteCurrencies, setFavoriteCurrencies ] = useState([])
  const [ allCurrencies, setAllCurrencies ] =
    useState(currencies.map(curr => ({ ...curr, isFavorite: false })))
  const [ appTheme, setAppTheme ] = useState(defaultTheme)
  
  useEffect(() => {
    getTheme().then(setAppTheme).catch(setAppTheme(darkTheme));
  }, []);

  const updateTheme = async () => {
    try {
      if(appTheme.name === 'darkTheme') {
        setAppTheme(lightTheme)
        const theme = JSON.stringify(lightTheme)
        await AsyncStorage.setItem(THEME, theme)
      } else {
        setAppTheme(darkTheme)
        const theme = JSON.stringify(darkTheme)
        await AsyncStorage.setItem(THEME, theme)
      }
    } catch (e) {
      console.log(e)
    }
  }

  const styles = getStyle(appTheme)
  const updateRates = () => {
    fetch(`https://api.exchangerate.host/latest?base=${fromCurrency}`)
    .then(res => res.json())
    .then(responseJson => {
      setLastRates({...responseJson, hour: moment().format('H:mm')})
    })
    .catch(e => {
      console.log('error: ', e)
    })
  }

  const addFavoriteCurrency = newCurrency => {
    setFavoriteCurrencies( prevState => [...prevState, newCurrency] )
  }

  const updateCurrency = ( name, isFavorite ) => {
    let temp_allCurrencies = allCurrencies
    const objIndex = allCurrencies.findIndex((obj => obj.name === name))
    temp_allCurrencies[objIndex].isFavorite = !isFavorite
    setAllCurrencies(temp_allCurrencies)
  }

  return (
    <PaperProvider>
      <View style={{ minHeight: windowHeigh }}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        {Platform.OS === 'android' && <View style={styles.statusBarUnderlay} />}

        {
          mainVisible ?
          (
            <Fragment>
              <CurrenciesTop
                appTheme={appTheme}
                fromCurrency={fromCurrency}
                setFromCurrency={setFromCurrency}
                amount={amount}
                setAmount={setAmount}
                updateRates={updateRates}
              />
              <CurrenciesContainer
                appTheme={appTheme}
                fromCurrency={fromCurrency}
                amount={amount}
                changeScreen={setMainVisible}
                allCurrencies={allCurrencies}
                lastRates={lastRates}
              />
              <CurrenciesBottom
                appTheme={appTheme}
                updateTheme={updateTheme}
                updateRates={updateRates}
                lastRates={lastRates}
              />
            </Fragment>
          )
          :
          (
            <Fragment>
              <FavoritesTop appTheme={appTheme} changeScreen={setMainVisible} />
              <FavoritesContainer
                appTheme={appTheme}
                allCurrencies={allCurrencies}
                addFavoriteCurrency={addFavoriteCurrency}
                updateCurrency={updateCurrency}
              />
            </Fragment>
          )
        }
      </View>
    </PaperProvider>
  );
}

const getStyle = theme => (
  StyleSheet.create({
    statusBarUnderlay: {
      height: 28,
      backgroundColor: theme.secondary,
    }
  })
)