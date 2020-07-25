import React, { useState } from 'react'
import { View } from 'react-native'
import { TextInput, Button } from 'react-native-paper'

const FavoritesTop = ({ appTheme, changeScreen }) => {
  const [ input, setInput ] = useState('')

  return(
    <View style={getStyle(appTheme, 'favoritesSearchbar')}>
      <Button
        onPress={() => changeScreen(true)}
        color={appTheme.link}
        icon="keyboard-backspace"
      />
      <TextInput
        style={getStyle(appTheme, 'input')}
        label="¿Que moneda estás buscando?"
        value={input}
        onChangeText={input => setInput(input)}
      />
    </View>
  )
}

const getStyle = (theme, component) => {
  switch(component) {
    case 'favoritesSearchbar':
      return({
        flex: 1.6,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        width: '100%',
        backgroundColor: theme.secondary,
      })
    case 'input':
      return({
        width: '60%',
        paddingBottom: 10,
        height: 60
      })
  }
}

export default FavoritesTop