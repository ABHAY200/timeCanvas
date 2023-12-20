import React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {setMindTree} from '../../reducers/mindTreeSlice';
import AddButton from '../../assets/icons/addButton.svg';
import Remove from '../../assets/icons/remove.svg';
import Style from './styles';

const MindTree = () => {
  const styles = Style();
  const navigation: any = useNavigation();
  const dispatch = useDispatch();
  const mindTree = useSelector(state => state.mindTree.mindTreeList);

  const navigateToDetails = mindData => {
    navigation.push('MindTreeDetails', {mindData});
  };

  const createNew = () => {
    navigation.push('CreateMindTree', {id: null});
  };

  const onDeleteItem = (nodeId: string) => {
    const updatedMindTree = mindTree?.filter(item => item.id !== nodeId);
    dispatch(setMindTree([...updatedMindTree]));
  };

  const treeItem = node => (
    <TouchableOpacity
      onPress={() => navigateToDetails(node)}
      key={node.id}
      style={styles.node}>
      <View style={styles.nodeTitleContainer}>
        <Text style={styles.nodeTitle}>{node.title}</Text>
        <TouchableOpacity onPress={() => onDeleteItem(node.id)}>
          <Remove width={16} height={16} />
        </TouchableOpacity>
      </View>
      {node?.description && (
        <Text style={styles.description}>{node.description}</Text>
      )}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Mind tree</Text>
        <TouchableOpacity onPress={createNew}>
          <AddButton width={18} height={18} />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.scrollView}>
        {mindTree?.map(item => treeItem(item))}
      </ScrollView>
    </View>
  );
};

export default MindTree;
