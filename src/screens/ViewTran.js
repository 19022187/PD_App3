import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const ViewTran = ({route, navigation}) => {
  return (
    <View style={styles.info}>
      <Text style={styles.text}>Amount: ${route.params.amt}</Text>
      <Text style={styles.text}>Description: {route.params.desc}</Text>
      <Text style={styles.text}>Category: {route.params.cat}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
  },
  info: {
    padding: 10,
  },
});

export default ViewTran;
