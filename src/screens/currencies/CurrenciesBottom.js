import React from 'react'
import { View, Text } from 'react-native'
import { Button } from 'react-native-paper'

const CurrenciesTop = ({ appTheme, updateRates, updateTheme, lastInfo }) => {
  const styles = getStyle(appTheme)

  return(
    <View style={styles.bottomContainer}>
      <Button
        color={appTheme.link}
        icon="update"
        style={styles.button}
        onPress={updateRates}
      />
      <View style={{ alignItems: 'center' }}>
        <Text style={styles.updateText}>Ultima actualización</Text>
        <Text style={styles.updateText}>{lastInfo.date}</Text>
      </View>
      <Button
        color={appTheme.link}
        icon="theme-light-dark"
        style={styles.button}
        onPress={updateTheme}
      />
    </View>
  )
}

const getStyle = theme => ({
  bottomContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    width: '100%',
    backgroundColor: theme.primary,
  },
  updateText: {
    color: theme.textPrimary,
  },
  button: {
    paddingLeft: 15,
  }
})

export default CurrenciesTop