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
    },
    titleContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 20,
      width: '100%',
    },
    title: {
      fontSize: 20,
      fontFamily: 'Poppins-Regular',
      color: isDarkMode ? colors.LIGHT_1 : colors.DARK_1,
    },
    scrollView: {
      flex: 1,
      width: '100%',
      paddingHorizontal: 10,
    },
    node: {
      borderWidth: 1,
      borderRadius: 8,
      borderColor: isDarkMode ? colors.LIGHT_1 : colors.DARK_1,
      padding: 10,
      margin: 5,
      maxHeight: 200,
    },
    nodeTitleContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 4,
      paddingVertical: 2,
    },
    nodeTitle: {
      fontSize: 16,
      fontWeight: '600',
      fontFamily: 'Poppins-Regular',
      color: isDarkMode ? colors.LIGHT_1 : colors.DARK_1,
    },
    nodeIconContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: 50,
      alignItems: 'center',
    },
    subtree: {
      marginLeft: 10,
    },
    description: {
      fontSize: 14,
      fontWeight: '600',
      fontFamily: 'Poppins-Regular',
      paddingHorizontal: 6,
    },
    subNode: {
      borderWidth: 1,
      borderColor: 'red',
      marginRight: 30,
      margin: 10,
      padding: 10,
    },
  });

  return styles;
}

export default Style;
