import React from 'react'
import { View, Text } from 'react-native'
import { Button } from 'react-native-paper'

const BottomContainer = ({ appTheme, updateTheme }) => {
  const styles = getStyles(appTheme)

  return (
        <View style={styles.bottomContainer}>
          <Button color={appTheme.link} icon="update" style={styles.button} />
          <View>
            <Text style={styles.updateText}>Ultima actualización</Text>
            <Text style={styles.updateText}>4 de Julio de 2020</Text>
          </View>
          <Button
            color={appTheme.link}
            icon="theme-light-dark"
            style={styles.button}
            onPress={updateTheme}
          />
        </View>
    );
}

const getStyles = theme => (
  StyleSheet.create({
    bottomContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-around',
      flexDirection: 'row',
      width: '100%',
      backgroundColor: theme.primary,
    },
    updateText: {
      color: theme.textPrimary,
    },
    button: {
      paddingLeft: 15,
    },
  })
)

export default BottomContainer