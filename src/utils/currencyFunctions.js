export const getCurrencySymbol = (currency) => {
  switch(currency) {
    case 'ars':
      return '$'
    case 'eur':
      return '€'
    case 'jpy':
      return '¥'
  }
}

export const getCurrencyName = (currency) => {
  switch(currency) {
    case 'ars':
      return 'pesos argentinos'
    case 'eur':
      return 'euros'
    case 'jpy':
      return 'yenes'
  }
}

export const getExchange = (currency, amount) => {
  let exchange
  switch(currency) {
    case 'ars':
      exchange = amount * 70.87
      return exchange.toFixed(2)
    case 'eur':
      exchange = amount * 0.89
      return exchange.toFixed(2)
    case 'jpy':
      exchange = amount * 107.04
      return exchange.toFixed(2)
  }
}