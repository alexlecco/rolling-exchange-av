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