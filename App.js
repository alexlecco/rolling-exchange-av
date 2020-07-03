import React from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import { Provider as PaperProvider } from 'react-native-paper'
import TopContainer from './src/components/TopContainer'
import CurrenciesContainer from './src/components/Content/CurrenciesContainer'
import BottomContainer from './src/components/BottomContainer'

//import { darkTheme as theme }  from './src/constants/colors'
import { lightTheme as theme }  from './src/constants/colors'

export default function App() {
  return (
    <PaperProvider>
      {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
      {Platform.OS === 'android' && <View style={styles.statusBarUnderlay} />}

      <TopContainer />
      <CurrenciesContainer />
      <BottomContainer />

    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  statusBarUnderlay: {
    height: 40,
    backgroundColor: theme.secondary,
  }
});