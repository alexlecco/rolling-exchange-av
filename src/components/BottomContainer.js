import React from 'react'
import { View, Text } from 'react-native'
import { Button } from 'react-native-paper'

const BottomContainer = ({ appTheme, updateTheme }) => (
  <View style={getStyle(appTheme, 'bottomContainer')}>
    <Button style={getStyle(appTheme, 'button')} color={appTheme.link} icon="update" />
    <View>
      <Text style={getStyle(appTheme, 'updateText')}>Ultima actualización</Text>
      <Text style={getStyle(appTheme, 'updateText')}>4 de Julio de 2020</Text>
    </View>
    <Button onPress={() => updateTheme()} color={appTheme.link} style={getStyle(appTheme, 'button')} icon="theme-light-dark" />
  </View>
)

const getStyle = (theme, component) => {
  switch(component) {
    case 'bottomContainer':
      return({
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        width: '100%',
        backgroundColor: theme.primary,
      })
    case 'updateText':
      return({
        color: theme.textPrimary,
      })
    case 'button':
      return({
        paddingLeft: 15,
      })
  }
}

export default BottomContainer