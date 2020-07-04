import React from 'react';
import { StyleSheet, View, StatusBar, Platform } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper'
import TopContainer from './src/components/TopContainer'
import CurrenciesContainer from './src/components/content/CurrenciesContainer'
import BottomContainer from './src/components/BottomContainer'

// lightTheme or darkTheme
import { lightTheme as theme } from './src/constants/colors'

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
    height: 28,
    backgroundColor: theme.secondary,
  },
});
