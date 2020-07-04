import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { TextInput, Button } from 'react-native-paper'

// lightTheme or darkTheme
import { darkTheme as theme } from '../../constants/colors'

const FavoritesSearchbar = ({ changeScreen }) => {
  const [ input, setInput ] = useState('')

  return(
    <View style={styles.favoritesSearchbar}>
      <Button
        onPress={() => changeScreen(true)}
        color={theme.link}
        icon="keyboard-backspace"
      />
      <TextInput
        style={styles.input}
        keyboardType='numeric'
        label="¿Que moneda estás buscando?"
        value={input}
        onChangeText={input => setInput(input)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  favoritesSearchbar: {
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
  }
})

export default FavoritesSearchbar