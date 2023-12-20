import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {useToast} from 'react-native-toast-notifications';
import {setMindTree} from '../../reducers/mindTreeSlice';
import Style from './styles';

const CreateMindTree = ({route}) => {
  const styles = Style();
  const toast = useToast();
  const mindTreeList = useSelector(state => state.mindTree.mindTreeList);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const parentNode = route.params?.parentNode;
  const navigation: any = useNavigation();
  const dispatch = useDispatch();

  const onChangeTitle = data => {
    setTitle(data);
  };

  const onChangeDescription = data => {
    setDescription(data);
  };

  const insertItem = (tree, parentId, newItem) => {
    const insertRecursive = nodes =>
      nodes.map(node => {
        if (node.id === parentId) {
          return {
            ...node,
            subtree: node.subtree ? [...node.subtree, newItem] : [newItem],
          };
        }
        if (node.subtree) {
          return {
            ...node,
            subtree: insertRecursive(node.subtree),
          };
        }
        return node;
      });

    return insertRecursive(tree);
  };

  const createNode = () => {
    if (title?.length > 0 && description?.length > 0) {
      if (parentNode?.id) {
        const newNode = {
          id: `${parentNode.id}_${(parentNode.subtree?.length || 0) + 1}`,
          title,
          description,
          subtree: [],
        };
        let updatedMindTreeList = [...mindTreeList];
        updatedMindTreeList = insertItem(
          updatedMindTreeList,
          parentNode.id,
          newNode,
        );
        dispatch(setMindTree([...updatedMindTreeList]));
        navigation.pop();
      } else {
        const newNode = {
          id: ((mindTreeList?.length || 0) + 1).toString(),
          title,
          description,
          subtree: [],
        };
        dispatch(setMindTree([...mindTreeList, newNode]));
        navigation.pop();
      }
    } else {
      toast.show('Please add some thoughts before submit', {
        type: 'danger',
        placement: 'bottom',
        duration: 4000,
        animationType: 'slide-in',
      });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.title}>Log Your Thought</Text>
        <Text style={styles.inputLabel}>Title</Text>
        <TextInput
          numberOfLines={1}
          style={styles.textInput}
          value={title}
          onChangeText={onChangeTitle}
        />
        <Text style={styles.inputLabel}>Thought</Text>
        <TextInput
          style={styles.textArea}
          textAlignVertical="top"
          value={description}
          multiline
          onChangeText={onChangeDescription}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={createNode}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreateMindTree;
