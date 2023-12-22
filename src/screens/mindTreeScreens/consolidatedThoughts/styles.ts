import {StyleSheet, useColorScheme} from 'react-native';

import colors from '../../../constants/colors';

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
    title: {
      fontSize: 20,
      fontFamily: 'Poppins-Regular',
      color: isDarkMode ? colors.LIGHT_1 : colors.DARK_1,
      marginBottom: 20,
    },
    itemContainer: {
      flex: 1,
      flexDirection: 'row',
      width: '100%',
    },
    itemText: {
      fontSize: 16,
      fontFamily: 'Poppins-Regular',
      color: isDarkMode ? colors.LIGHT_1 : colors.DARK_1,
      paddingLeft: 10,
      marginTop: -5,
      marginBottom: 10,
      paddingRight: 40,
    },
    scrollView: {
      width: '100%',
    },
  });

  return styles;
}

export default Style;
