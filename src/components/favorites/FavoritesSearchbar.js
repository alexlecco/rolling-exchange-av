import React, { useState } from 'react'
import { StyleSheet, View, Text, Image, Dimensions } from 'react-native'
import { TextInput, Button } from 'react-native-paper';

//import { darkTheme as theme } from '../constants/colors'
import { darkTheme as theme } from '../../constants/colors'

const FavoritesSearchbar= ({ changeScreen }) => {
  const [input, setInput] = useState('');

  return(
    <View style={styles.topContainer}>
      <Button
        onPress={() => changeScreen(false)}
        color={theme.link}
        icon="keyboard-backspace"
        style={styles.button}
      />
      <TextInput
        style={styles.input}
        label="¿Que moneda estás buscando?"
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
    width: '75%',
    paddingBottom: 10,
    height: 60
  }
});

export default FavoritesSearchbar