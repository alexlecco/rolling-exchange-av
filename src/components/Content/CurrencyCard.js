import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

//import { darkTheme as theme } from '../../constants/colors'
import { lightTheme as theme } from '../../constants/colors'

import images from '../../constants/flags';

const Currency = ({ currency, flagURL }) => {
  let url
  switch(flagURL) {
    case 'ars':
      url = images.ars
      break
    case 'usd':
      url = images.usd
      break
    case 'eur':
      url = images.eur
      break
    case 'jpy':
      url = images.jpy
      break
  }

  return(
    <View style={styles.card}>
      <Image
        source={url}
        style={{ width: 50, height: 50, marginRight: 5 }}
      />
      <Text style={styles.text}>{currency}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    color: theme.textPrimary,
  },
  card: {
    backgroundColor: theme.container,
    width: '90%',
    padding: 25,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  }
});

export default Currency