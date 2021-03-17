import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const ViewTran = ({route, navigation}) => {
  return (
    <View>
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
});

export default ViewTran;
