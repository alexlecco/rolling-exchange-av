import React from 'react'
import { View, Text, Image } from 'react-native'
import { Button } from 'react-native-paper'

import flags from '../../../constants/flags'

const FavoriteCard = ({
  appTheme,
  name,
  flag,
  isFavorite,
  addFavoriteCurrency,
  updateCurrency,
}) => {
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

  const onTouchStar = () => {
    addFavoriteCurrency({name: name, flag: flag})
    updateCurrency(name, isFavorite)
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
        <Button
          onPress={onTouchStar}
          icon={isFavorite ? 'star' : 'star-outline'}
          color={appTheme.link}
        />
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
      })
    case 'rightContainer':
      return({
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-end',
      })
  }
}

export default FavoriteCard 