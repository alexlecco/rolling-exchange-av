import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

//import { darkTheme as theme } from '../../constants/colors'
import { lightTheme as theme } from '../../constants/colors'

const Currency = ({ currency }) => (
  <View style={styles.card}>
    <Text style={styles.text}>{currency}</Text>
  </View>
)

const styles = StyleSheet.create({
  text: {
    color: theme.textPrimary
  },
  card: {
    backgroundColor: theme.container,
    width: '90%',
    padding: 25,
    margin: 10,
    justifyContent: 'center'
  }
});

export default Currency