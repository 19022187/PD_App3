import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Button,
  TouchableHighlight,
} from 'react-native';

const ViewTrans = ({route, navigation}) => {
  const renderItem = ({item}) => {
    return (
      <View>
        <View style={styles.info}>
          <View>
            <Text style={styles.type}>{item.type}</Text>
            <Text>{item.category}</Text>
            <Text>Amount: ${item.amt}</Text>
          </View>
        </View>
        <View style={styles.border} />
      </View>
    );
  };
  return (
    <View>
      <Text style={styles.title}>{route.params.type}</Text>
      <View style={styles.border} />
      <FlatList data={route.params.data} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  /* TODO: Insert style objects here */
  info: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  border: {
    padding: 1,
    backgroundColor: '#6200ee',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 17,
    padding: 10,
    backgroundColor: '#bb86fc',
  },
  type: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default ViewTrans;
