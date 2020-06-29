import React, { useState } from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import {
  Provider as PaperProvider,
  Button,
} from 'react-native-paper'
import colors from './src/constants/colors'

export default function App() {

  return (
    <PaperProvider>
      {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
      {Platform.OS === 'android' && <View style={styles.statusBarUnderlay} />}

      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.text}>Rolling Exchange</Text>
        </View>
        <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
          Press me
        </Button>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  statusBarUnderlay: {
    height: 28,
    backgroundColor: colors.background1,
  },
  container: {
    flex: 1,
    backgroundColor: colors.background1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: colors.text1
  },
  card: {
    backgroundColor: colors.container1,
    width: '90%',
    padding: 10,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  }
});