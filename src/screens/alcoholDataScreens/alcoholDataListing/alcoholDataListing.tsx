import React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import moment from 'moment';

import Style from './styles';

const AlcoholDataListing = () => {
  const styles = Style();
  const navigation: any = useNavigation();
  const alcoholDataList = useSelector(
    state => state.alcoholData.alcoholDataList,
  );

  const createAlcoholData = () => {
    navigation.push('AddAlcoholData');
  };

  const viewAlcoholGraph = () => {
    navigation.push('AlcoholGraph');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Alcohol Logger</Text>
      <ScrollView style={styles.scrollView}>
        {alcoholDataList?.map(item => (
          <View
            key={item.id}
            style={[
              styles.cardContainer,
              item.numberOfDrinks > 3 && styles.warning,
              item.numberOfDrinks > 7 && styles.danger,
            ]}>
            <Text style={styles.cardLabel}>
              {moment(item.date).format('LL')}
            </Text>
            <Text style={styles.cardValue}>{item.numberOfDrinks}</Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={viewAlcoholGraph}
          style={styles.viewGraphButton}>
          <Text style={styles.viewGraphButtonLabel}>View Graph</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={createAlcoholData}
          style={styles.addDataButton}>
          <Text style={styles.addDataButtonLabel}>Add Data</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AlcoholDataListing;
