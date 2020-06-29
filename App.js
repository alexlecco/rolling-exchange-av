import React from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import {
  useTheme,
  Provider as PaperProvider,
  Button,
} from 'react-native-paper'
import colors from './src/constants/colors'
import TopContainer from './src/components/TopContainer'
import CurrenciesContainer from './src/components/Content/CurrenciesContainer'
import BottomContainer from './src/components/BottomContainer'

export default function App() {
  const { colors } = useTheme();

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
    height: 27,
    backgroundColor: colors.container2,
  }
});