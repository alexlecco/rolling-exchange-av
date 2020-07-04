import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

// lightTheme or darkTheme
import { darkTheme as theme } from '../../constants/colors'

const CurrencyCard = ({ name }) => (
  <View style={styles.card}>
    <Text style={styles.text}>{name}</Text>
  </View>
)

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.container,
    width: '90%',
    justifyContent: 'center',
    padding: 25,
    margin: 10
  },
  text: {
    color: theme.textPrimary,
  },
})

export default CurrencyCard