import React from 'react'
import moment from 'moment'
import 'moment/locale/es'
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native'
import { Button } from 'react-native-paper'

const CurrenciesBottom = ({ appTheme, updateTheme, updateRates, lastRates, isLoading, isFromCache, cacheAge, updateError }) => {
  const styles = getStyle(appTheme)

  const handleUpdatePress = () => {
    if (isLoading) return;
    updateRates(isFromCache); // Forzar refresh si viene de cache
  };

  const formatCacheAge = (age) => {
    if (!age || age === 0) return 'Ahora mismo';
    const minutes = Math.floor(age / (1000 * 60));
    if (minutes < 1) return 'Ahora mismo';
    if (minutes < 60) return `Hace ${minutes} min`;
    const hours = Math.floor(minutes / 60);
    return `Hace ${hours} h`;
  };

  return(
    <View style={styles.bottomContainer}>
      <View style={styles.updateButtonContainer}>
        <Button
          color={appTheme.link}
          icon={isLoading ? "" : "update"}
          style={styles.button}
          onPress={handleUpdatePress}
          disabled={isLoading}
        >
          {isLoading ? (
            <ActivityIndicator size="small" color={appTheme.link} />
          ) : (
            <Text style={styles.buttonText}>Actualizar</Text>
          )}
        </Button>
        <Button
          color={appTheme.link}
          icon="theme-light-dark"
          style={styles.button}
          onPress={updateTheme}
        >
          <Text style={styles.buttonText}>Tema</Text>
        </Button>
      </View>
      
      <View style={styles.updateInfoContainer}>
        <Text style={styles.updateText}>Última actualización</Text>
        <Text style={styles.updateTimeText}>
          {moment(lastRates.date).locale('es').format('LL')} - {lastRates.hour}
        </Text>
        
        {isFromCache && (
          <View style={styles.cacheIndicator}>
            <Text style={styles.cacheText}>
              Cache: {formatCacheAge(cacheAge)}
            </Text>
          </View>
        )}
        
        {updateError && (
          <View style={styles.errorContainer}>
            <Text style={styles.errorText}>{updateError}</Text>
          </View>
        )}
      </View>
    </View>
  )
}

const getStyle = theme => (
  StyleSheet.create({
    bottomContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'column',
      width: '100%',
      backgroundColor: theme.primary,
      paddingHorizontal: 20,
      paddingVertical: 10,
    },
    updateButtonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '100%',
      marginBottom: 10,
    },
    updateInfoContainer: {
      alignItems: 'center',
      width: '100%',
    },
    updateText: {
      color: theme.textPrimary,
      textAlign: 'center',
      fontSize: 12,
      fontWeight: 'bold',
    },
    updateTimeText: {
      color: theme.textPrimary,
      textAlign: 'center',
      fontSize: 11,
      marginBottom: 5,
    },
    cacheIndicator: {
      backgroundColor: theme.secondary,
      paddingHorizontal: 8,
      paddingVertical: 4,
      borderRadius: 12,
      marginTop: 5,
    },
    cacheText: {
      color: theme.textSecondary,
      fontSize: 10,
      textAlign: 'center',
    },
    errorContainer: {
      backgroundColor: '#ff4444',
      paddingHorizontal: 8,
      paddingVertical: 4,
      borderRadius: 12,
      marginTop: 5,
    },
    errorText: {
      color: '#ffffff',
      fontSize: 10,
      textAlign: 'center',
    },
    button: {
      minWidth: 80,
    },
    buttonText: {
      fontSize: 10,
      color: theme.link,
    }
  })
) 

export default CurrenciesBottom