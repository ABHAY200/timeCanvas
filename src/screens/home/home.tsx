import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Agenda} from 'react-native-calendars';

import Style from './styles';

const Home = () => {
  const styles = Style();

  const [items, setItems] = useState({
    '2023-11-20': [{name: 'item 1 - any js object'}],
    '2023-11-21': [{name: 'item 2 - any js object'}],
    '2023-11-23': [
      {name: 'item 3 - any js object'},
      {name: 'item 3 - any js object'},
      {name: 'item 3 - any object'},
    ],
  });

  const renderItem = item => (
    <TouchableOpacity style={styles.item}>
      <Text style={{color: 'red'}}>{item?.name}</Text>
    </TouchableOpacity>
  );

  const renderEmptyDate = () => (
    <View style={styles.emptyDate}>
      <Text>No events for this day</Text>
    </View>
  );

  const handleAddItem = day => {
    // You can customize this function to add more details to the item
    const newItem = {
      name: 'New Event',
      time: '12:00 PM',
    };

    setItems({
      ...items,
      [day.dateString]: [...(items[day.dateString] || []), newItem],
    });
  };

  return (
    <View style={styles.container}>
      <Agenda
        items={items}
        renderItem={item => renderItem(item)}
        renderEmptyDate={() => renderEmptyDate()}
        rowHasChanged={(r1, r2) => r1.name !== r2.name}
        style={{width: '100%', backgroundColor: 'transparent'}}
        theme={{calendarBackground: '#28282B'}}
      />
      <TouchableOpacity style={styles.addButton} onPress={handleAddItem}>
        <Text style={styles.addButtonText}>Add Event</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
