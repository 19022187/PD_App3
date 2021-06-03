import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Button,
  TouchableHighlight,
} from 'react-native';

const EXP_TYPE = [
  {
    type: 'Savings',
    category: ['Select Category', 'Savings'],
    data: [
      {type: 'Savings', category: 'Savings', amt: 20.0},
      {type: 'Savings', category: 'Savings', amt: 30.0},
    ],
    total: 50.0,
  },
  {
    type: 'Expenses',
    category: ['Select Category', 'Entertainment', 'Shop', 'Food'],
    data: [
      {type: 'Expenses', category: 'Shop', amt: 50.0},
      {type: 'Expenses', category: 'Food', amt: 15.0},
    ],
    total: 65.0,
  },
];

const HomeScreen = ({navigation}) => {
  const renderItem = ({item}) => {
    return (
      /* TODO: FlatList component */
      <View>
        <TouchableHighlight
          onPress={() =>
            navigation.navigate('View transactions', {
              type: item.type,
              data: item.data,
              data_type: item.data.type,
              data_cat: item.data.category,
              data_amt: item.data.amt,
            })
          }>
          <View style={styles.info}>
            <View>
              <Text style={styles.type}>{item.type}</Text>
              <Text>Total: ${item.total}</Text>
            </View>
            <Button
              color={'#bb86fc'}
              title="Add"
              onPress={() =>
                navigation.navigate('Add transactions', {
                  type: item.type,
                  category: item.category,
                  data: item.data,
                  total: item.total,
                })
              }
            />
          </View>
        </TouchableHighlight>
        <View style={styles.border} />
      </View>
    );
  };
  return (
    <View>
      <Text style={styles.title}>Home Screen</Text>
      <View style={styles.border} />
      <FlatList data={EXP_TYPE} renderItem={renderItem} />
      <View style={styles.padding} />
      <Text style={styles.saves}>
        Saved: ${EXP_TYPE[0].total - EXP_TYPE[1].total}
      </Text>
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
  saves: {
    fontWeight: 'bold',
    fontSize: 16,
    padding: 10,
    marginLeft: 5,
    marginRight: 295,
    borderRadius: 5,
    backgroundColor: '#bb86fc',
  },
  padding: {
    padding: 10,
  },
});

export default HomeScreen;
