import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Button } from 'react-native-paper';
import colors from '../constants/colors'

const BottomContainer= () => (
  <View style={styles.bottomContainer}>
    <Button icon="update" style={styles.button} />
    <View>
      <Text>Ultima actualización</Text>
      <Text>4 de Julio de 2020</Text>
    </View>
    <Button icon="theme-light-dark" style={styles.button} />
  </View>
)

const styles = StyleSheet.create({
  bottomContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    width: '100%',
    backgroundColor: colors.background2,
  },
  button: {
    color: colors.link1,
    paddingLeft: 15,
  }
});

export default BottomContainer