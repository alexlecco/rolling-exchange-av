import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Button } from 'react-native-paper'

// lightTheme or darkTheme
import { darkTheme as theme } from '../constants/colors'

const BottomContainer = () => (
  <View style={styles.bottomContainer}>
    <Button color={theme.link} icon="update" style={styles.button} />
    <View>
      <Text style={styles.updateText}>Ultima actualización</Text>
      <Text style={styles.updateText}>4 de Julio de 2020</Text>
    </View>
    <Button color={theme.link} icon="theme-light-dark" style={styles.button} />
  </View>
)

const styles = StyleSheet.create({
  bottomContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    width: '100%',
    backgroundColor: theme.secondary,
  },
  updateText: {
    color: theme.textSecondary,
  },
  button: {
    paddingLeft: 15,
  },
})

export default BottomContainer