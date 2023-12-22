import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import AddButton from '../../../assets/icons/addButton.svg';
import Style from './styles';

const MindTreeDetails = ({route}) => {
  const styles = Style();
  const navigation: any = useNavigation();
  const mindData = route.params?.mindData || {};

  const navigateToDetails = data => {
    navigation.push('MindTreeDetails', {mindData: data});
  };

  const treeItem = node => (
    <TouchableOpacity
      onPress={() => navigateToDetails(node)}
      key={node.id}
      style={styles.node}>
      <View style={styles.nodeTitleContainer}>
        <Text style={styles.nodeTitle}>{node.title}</Text>
      </View>
      {node?.description && (
        <Text numberOfLines={2} style={styles.description}>
          {node.description}
        </Text>
      )}
    </TouchableOpacity>
  );

  const createChild = parentNode => {
    navigation.push('CreateMindTree', {parentNode});
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{mindData?.title}</Text>
        {mindData?.description?.length > 0 && (
          <ScrollView>
            <Text style={styles.mainDescription}>{mindData?.description}</Text>
          </ScrollView>
        )}
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => createChild(mindData)}>
          <AddButton width={18} height={18} />
          <Text style={styles.buttonText}>Add Thread</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.scrollView}>
        {mindData?.subtree?.map(item => treeItem(item))}
      </ScrollView>
    </View>
  );
};

export default MindTreeDetails;
