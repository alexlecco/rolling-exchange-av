import React from 'react'
import { View, Text, Image } from 'react-native'
import { Button } from 'react-native-paper'

import flags from '../../constants/flags'

const FavoriteCard = ({ name, flag, appTheme }) => {
  let url = ''
  switch(flag) {
    case 'ars':
      url = flags.ars
      break
    case 'eur':
      url = flags.eur
      break
    case 'jpy':
      url = flags.jpy
      break
    case 'usd':
      url = flags.usd
      break
  }

  return(
    <View style={getStyle(appTheme, 'card')}>
      <View style={getStyle(appTheme, 'leftContainer')}>
        <Image
          source={url}
          style={{ width: 50, height: 50, marginRight: 10 }}
        />
        <Text style={getStyle(appTheme, 'text')}>{name}</Text>
      </View>
      <View style={getStyle(appTheme, 'rightContainer')}>
      <Button onPress={() => {}} color={appTheme.link} icon="star-outline" />
      </View>
    </View>
  )
}

const getStyle = (theme, component) => {
  switch(component) {
    case 'card':
      return({
        backgroundColor: theme.container,
        width: '90%',
        padding: 25,
        margin: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
      })
    case 'text':
      return({
        color: theme.textPrimary,
      })
    case 'leftContainer': 
      return({
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
      })
    case 'rightContainer': 
      return({
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
      })
  }
}

export default FavoriteCard 