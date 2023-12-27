import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import {useToast} from 'react-native-toast-notifications';
import {setAlcoholDataList} from '../../../reducers/alcoholDataSlice';
import Style from './styles';

const moment = require('moment');

const AddAlcoholData = () => {
  const dispatch = useDispatch();
  const navigation: any = useNavigation();
  const styles = Style();
  const toast = useToast();
  const alcoholDataList = useSelector(
    state => state.alcoholData.alcoholDataList,
  );
  const [numberOfDrinks, setNumberOfDrinks] = useState('0');
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(new Date());

  const openDatePicker = () => {
    setOpen(true);
  };

  const addData = () => {
    const logDate = moment(date).format();
    const drinksNumber = Number(numberOfDrinks);
    if (drinksNumber > 0) {
      const newData = {
        id: moment().format(),
        date: logDate,
        numberOfDrinks: drinksNumber,
      };
      const existingIndex = alcoholDataList.findIndex(item =>
        moment(item.date).isSame(logDate, 'day'),
      );
      if (existingIndex !== -1) {
        const updatedDataList = [...alcoholDataList];
        updatedDataList[existingIndex] = newData;
        dispatch(setAlcoholDataList(updatedDataList));
      } else {
        const updatedDataList = [newData, ...alcoholDataList];
        const sortedDataList = updatedDataList.sort((a, b) =>
          moment(b.date).diff(moment(a.date)),
        );
        dispatch(setAlcoholDataList(sortedDataList));
      }
      navigation.pop();
    } else {
      toast.show('Please add drinks count', {
        type: 'danger',
        placement: 'bottom',
        duration: 4000,
        animationType: 'slide-in',
      });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Log Alcohol Data</Text>
      <ScrollView style={styles.scrollView}>
        <View style={styles.row}>
          <Text style={styles.label}>Date</Text>
          <Text onPress={openDatePicker} style={styles.textInput}>
            {moment(date).format('LL')}
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Drinks count</Text>
          <TextInput
            value={numberOfDrinks}
            keyboardType="numeric"
            maxLength={2}
            autoFocus
            style={styles.textInput}
            onChangeText={value => setNumberOfDrinks(value)}
          />
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={addData} style={styles.addDataButton}>
          <Text style={styles.addDataButtonLabel}>Add Data</Text>
        </TouchableOpacity>
      </View>
      <DatePicker
        modal
        mode="date"
        open={open}
        minimumDate={new Date('2023-12-01')}
        maximumDate={new Date()}
        date={date}
        onConfirm={selectedDate => {
          setOpen(false);
          setDate(selectedDate);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </View>
  );
};

export default AddAlcoholData;
