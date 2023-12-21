import React from 'react';
import {View, Text, ScrollView} from 'react-native';

import Thought from '../../assets/icons/thought.svg';
import Style from './styles';

const ConsolidatedThoughts = ({route}) => {
  const styles = Style();
  const mindList = route.params?.mindList;
  const treeTitle = route.params?.treeTitle;

  const renderListItem = item => (
    <View style={styles.itemContainer}>
      <Thought width={18} height={18} />
      <Text style={styles.itemText}>{item}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{treeTitle}</Text>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}>
        {mindList?.map(item => renderListItem(item))}
      </ScrollView>
    </View>
  );
};

export default ConsolidatedThoughts;
