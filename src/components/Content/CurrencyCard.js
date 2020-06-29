import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const Currency = ({ currency }) => (
  <View style={styles.card}>
    <Text style={styles.text}>{currency}</Text>
  </View>
)

const styles = StyleSheet.create({
  text: {
    color: colors.text1
  },
  card: {
    backgroundColor: colors.container1,
    width: '90%',
    padding: 25,
    margin: 10,
    justifyContent: 'center'
  }
});

export default Currency