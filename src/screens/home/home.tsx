import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import Style from './styles';

const Home = () => {
  const styles = Style();
  const navigation: any = useNavigation();

  const navigateToAlcoholTracker = () => {
    navigation.push('AlcoholDataListing');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={navigateToAlcoholTracker}
        style={styles.addButton}>
        <Text style={styles.addButtonText}>Alcohol Logger</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
