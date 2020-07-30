import React from 'react'
import { View, Text, Image } from 'react-native'

import flags from '../../../constants/flags'
import { getCurrencySymbol, getCurrencyName, getExchange } from '../../../utils/currencyFunctions'

const CurrencyCard = ({ name, flag, appTheme, fromCurrency, amount }) => {
  const styles = getStyle(appTheme)
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
    <View style={styles.card}>
      <View style={styles.leftContainer}>
        <Image
          source={url}
          style={{ width: 50, height: 50, marginRight: 10 }}
        />
        <Text style={styles.text}>{name}</Text>
      </View>
      <View style={styles.rightContainer}>
        {
          amount !== '' ?
            <>
              <Text style={styles.text}>{getCurrencySymbol(flag)} {getExchange(fromCurrency, flag, amount)}</Text>
              <Text style={styles.text}>{getCurrencyName(flag)}</Text>
            </>
          :
            null
        }
      </View>
    </View>
  )
}

const getStyle = theme => ({
  card: {
    backgroundColor: theme.container,
    padding: 25,
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    color: theme.textPrimary,
  },
  leftContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-end',
  }
})

export default CurrencyCard