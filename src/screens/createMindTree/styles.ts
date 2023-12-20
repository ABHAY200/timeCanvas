import {StyleSheet, useColorScheme} from 'react-native';

import colors from '../../constants/colors';

function Style() {
  const isDarkMode = useColorScheme() === 'dark';
  const styles = StyleSheet.create({
    container: {
      fontWeight: '700',
      flex: 1,
      backgroundColor: isDarkMode ? colors.DARK_1 : colors.LIGHT_1,
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 20,
    },
    inputContainer: {
      width: '100%',
    },
    title: {
      fontSize: 20,
      fontFamily: 'Poppins-Regular',
      color: isDarkMode ? colors.LIGHT_1 : colors.DARK_1,
    },
    textInput: {
      fontSize: 15,
      fontFamily: 'Poppins-Regular',
      color: isDarkMode ? colors.LIGHT_1 : colors.DARK_1,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: isDarkMode ? colors.LIGHT_1 : colors.DARK_1,
      width: '100%',
      paddingHorizontal: 10,
    },
    textArea: {
      width: '100%',
      paddingHorizontal: 10,
      fontSize: 15,
      fontFamily: 'Poppins-Regular',
      color: isDarkMode ? colors.LIGHT_1 : colors.DARK_1,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: isDarkMode ? colors.LIGHT_1 : colors.DARK_1,
      minHeight: 100,
      maxHeight: 200,
    },
    inputLabel: {
      fontSize: 15,
      fontFamily: 'Poppins-Regular',
      color: isDarkMode ? colors.LIGHT_1 : colors.DARK_1,
      width: '100%',
      textAlign: 'left',
      paddingTop: 20,
      marginBottom: 4,
    },
    button: {
      backgroundColor: isDarkMode ? colors.LIGHT_1 : colors.DARK_1,
      width: '100%',
      height: 50,
      borderRadius: 6,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonText: {
      fontSize: 18,
      fontWeight: '600',
      fontFamily: 'Poppins-Regular',
      color: isDarkMode ? colors.DARK_1 : colors.LIGHT_1,
    },
  });

  return styles;
}

export default Style;
