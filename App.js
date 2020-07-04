import React from 'react';
import { StyleSheet, View, StatusBar, Platform } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper'
import CurrenciesContainer from './src/components/content/CurrenciesContainer'

import { lightTheme as theme } from './src/constants/colors'

export default function App() {
  return (
    <PaperProvider>
      {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
      {Platform.OS === 'android' && <View style={styles.statusBarUnderlay} />}

      <CurrenciesContainer />
      
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  statusBarUnderlay: {
    height: 28,
    backgroundColor: theme.secondary,
  },
});
