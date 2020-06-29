import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import colors from '../constants/colors'

const BottomContainer= () => (
  <View style={styles.bottomContainer}>
    <Text>Ultima actualización</Text>
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

export default BottomContainer