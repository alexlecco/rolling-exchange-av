import React, { useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { TextInput } from 'react-native-paper'

// lightTheme or darkTheme
import { darkTheme as theme } from '../constants/colors'

const TopContainer = () => {
  const [ input, setInput ] = useState('')

  return(
    <View style={styles.topContainer}>
      <View>
        <Text>Moneda</Text>
      </View>
      <TextInput
        style={styles.input}
        keyboardType='numeric'
        label="¿Cuanto queres convertir?"
        value={input}
        onChangeText={input => setInput(input)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  topContainer: {
    flex: 1.6,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: '100%',
    backgroundColor: theme.secondary,
  },
  input: {
    width: '60%',
    paddingBottom: 10,
    height: 60
  },
})

export default TopContainer