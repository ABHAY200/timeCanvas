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
    absoluteContainer: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      width: '100%',
      height: '100%',
      padding: 10,
    },
    node: {
      borderWidth: 1,
      borderRadius: 8,
      borderColor: isDarkMode ? colors.LIGHT_1 : colors.DARK_1,
      padding: 10,
      maxHeight: 200,
      width: '100%',
      marginBottom: 10,
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
    subtree: {
      marginLeft: 10,
    },
    title: {
      fontSize: 20,
      fontFamily: 'Poppins-Regular',
      color: isDarkMode ? colors.LIGHT_1 : colors.DARK_1,
      width: '100%',
      textAlign: 'left',
    },
    mainDescription: {
      fontSize: 15,
      fontWeight: '500',
      fontFamily: 'Poppins-Regular',
      color: isDarkMode ? colors.LIGHT_1 : colors.DARK_1,
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
    titleContainer: {
      flexDirection: 'column',
      maxHeight: 400,
      width: '100%',
      paddingHorizontal: 16,
      paddingTop: 20,
    },
    scrollView: {
      flex: 1,
      width: '100%',
      paddingHorizontal: 10,
    },
    buttonContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 20,
      marginTop: 4,
    },
    buttonText: {
      fontSize: 16,
      fontFamily: 'Poppins-Regular',
      color: isDarkMode ? colors.LIGHT_1 : colors.DARK_1,
      paddingLeft: 10,
      paddingTop: 4,
    },
  });

  return styles;
}

export default Style;
