import React from 'react'
import { View, Text, Image } from 'react-native'

import flags from '../../constants/flags'

const CurrencyCard = ({ name, flag, appTheme, amount }) => {
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
      <View style={getStyle(appTheme, 'flagContainer')}>
        <Image
          source={url}
          style={{ width: 50, height: 50, marginRight: 10 }}
        />
        <Text style={getStyle(appTheme, 'text')}>{name}</Text>
      </View>
      <Text style={getStyle(appTheme, 'text')}>{amount}</Text>
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
        justifyContent: 'space-between',
        alignItems: 'center',
      })
    case 'text':
      return({
        color: theme.textPrimary,
      })
    case 'flagContainer': 
      return({
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
      })
  }
}

export default CurrencyCard