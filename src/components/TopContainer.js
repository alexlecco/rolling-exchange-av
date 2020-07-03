import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { TextInput, Button } from 'react-native-paper';

//import { darkTheme as theme } from '../constants/colors'
import { lightTheme as theme } from '../constants/colors'

const TopContainer= () => {
  const [input, setInput] = useState('');

  return(
    <View style={styles.bottomContainer}>
      <Button>Moneda</Button>
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
  bottomContainer: {
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
});

export default TopContainer