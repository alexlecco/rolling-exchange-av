import React, { useState, Fragment } from 'react';
import { StyleSheet, View, StatusBar, Platform, Dimensions } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper'
import CurrenciesTop from './src/screens/currencies/CurrenciesTop'
import CurrenciesContainer from './src/screens/currencies/content/CurrenciesContainer'
import CurrenciesBottom from './src/screens/currencies/CurrenciesBottom'
import FavoritesTop from './src/screens/favorites/FavoritesTop'
import FavoritesContainer from './src/screens/favorites/content/FavoritesContainer'
import { currencies, initialRates } from './src/constants/currencies'

import { darkTheme } from './src/constants/colors'
import { lightTheme } from './src/constants/colors'
import { darkTheme as defaultTheme } from './src/constants/colors'

const windowHeigh = Dimensions.get('screen').height

export default function App() {
  const [ lastInfo, setLastInfo ] = useState(initialRates)
  const [ mainVisible, setMainVisible ] = useState(true)
  const [ fromCurrency, setFromCurrency ] = useState('usd')
  const [ amount, setAmount ] = useState('')
  const [ favoriteCurrencies, setFavoriteCurrencies ] = useState([])
  const [ allCurrencies, setAllCurrencies ] =
    useState(currencies.map(curr => ({ ...curr, isFavorite: false })))
  const [ appTheme, setAppTheme ] = useState(defaultTheme)
  const updateTheme = () => {
    appTheme.name === 'darkTheme' ? setAppTheme(lightTheme) : setAppTheme(darkTheme)
  }
  const styles = getStyle(appTheme)
  const updateRates = () => {
    fetch(`https://api.exchangerate.host/latest?base=${fromCurrency}`, {
      method: 'GET'
    })
    .then(response => response.json())
    .then(responseJson => {
      setLastInfo(responseJson)
    })
    .catch((error) => {
      console.error("error:", error);
    });
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
              />
              <CurrenciesContainer
                appTheme={appTheme}
                fromCurrency={fromCurrency}
                amount={amount}
                changeScreen={setMainVisible}
                allCurrencies={allCurrencies}
              />
              <CurrenciesBottom
                appTheme={appTheme}
                updateRates={updateRates}
                updateTheme={updateTheme}
                lastInfo={lastInfo}
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