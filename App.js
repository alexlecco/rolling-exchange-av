import React, { useState, Fragment } from 'react'
import { StyleSheet, View, Text, StatusBar } from 'react-native'
import { Provider as PaperProvider } from 'react-native-paper'
import TopContainer from './src/components/TopContainer'
import CurrenciesContainer from './src/components/content/CurrenciesContainer'
import BottomContainer from './src/components/BottomContainer'
import FavoritesSearchbar from './src/components/favorites/FavoritesSearchbar'
import FavoritesContainer from './src/components/favorites/FavoritesContainer'

//import { darkTheme as theme }  from './src/constants/colors'
import { darkTheme as theme }  from './src/constants/colors'

export default function App() {
  const [ favoritesVisible, setFavoritesVisible ] = useState(false)

  return (
    <PaperProvider>
      {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
      {Platform.OS === 'android' && <View style={styles.statusBarUnderlay} />}

      {
        favoritesVisible ?
        (
          <Fragment>
            <FavoritesSearchbar changeScreen={setFavoritesVisible} />
            <FavoritesContainer />
          </Fragment>
        )
        :
        (
          <Fragment>
            <TopContainer />
            <CurrenciesContainer changeScreen={setFavoritesVisible} />
            <BottomContainer />
          </Fragment>
        )
      }

    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  statusBarUnderlay: {
    height: 40,
    backgroundColor: theme.secondary,
  }
});