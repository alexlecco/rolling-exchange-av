import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import colors from '../constants/colors'

const TopContainer= () => (
  <View style={styles.bottomContainer}>
    <Text>Convert</Text>
  </View>
)

const styles = StyleSheet.create({
  bottomContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

    width: '100%',
    backgroundColor: colors.background2,
  }
});

export default TopContainer