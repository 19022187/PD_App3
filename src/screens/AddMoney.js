import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  Image,
  Button,
} from 'react-native';
import Alert from 'react-native/Libraries/Alert/Alert';
import {Picker} from '@react-native-picker/picker';

const AddMoney = ({route, navigation}) => {
  const [amt, setAmt] = useState('');
  const [desc, setDesc] = useState('');
  const [category, setCat] = useState('');
  return (
    <View style={styles.view}>
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => setAmt(text)}
        placeholder={'Enter amount'}
      />
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => setDesc(text)}
        placeholder={'Enter description'}
      />
      <View style={styles.textInput}>
        <Picker
          selectedValue={category}
          data={route.params.category}
          onValueChange={(itemValue, itemIndex) => setCat(itemValue)}>
          <Picker.Item label={route.params.category[0]} value="" />
          <Picker.Item
            label={route.params.category[1]}
            value={route.params.category[1]}
          />
          <Picker.Item
            label={route.params.category[2]}
            value={route.params.category[2]}
          />
          <Picker.Item
            label={route.params.category[3]}
            value={route.params.category[3]}
          />
        </Picker>
      </View>
      <View style={styles.btn}>
        <TouchableOpacity
          style={styles.expBtn}
          onPress={
            (() => route.params.data.push(route.params.type, category, amt),
            navigation.navigate('View transaction', {
              amt: amt,
              cat: category,
              desc: desc,
            }))
          }>
          <View style={styles.touchable1}>
            <Image source={require('./expense_icon.png')} />
            <Text style={styles.btnText}> Save Expense</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tipBtn}
          onPress={() => Alert.alert('Tip: Track your Spending!')}>
          <View style={styles.touchable2}>
            <Image source={require('./info_icon.png')} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // container: {
  //   padding: 10,
  // },
  touchable1: {
    flexDirection: 'row',
    backgroundColor: '#bb86fc',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 7,
    borderRadius: 30,
  },
  touchable2: {
    flexDirection: 'row',
    padding: 5,
    backgroundColor: '#bb86fc',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  btn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginTop: 10,
  },
  expBtn: {
    width: 170,
  },
  tipBtn: {
    width: 40,
  },
  textInput: {
    height: 40,
    borderStyle: 'solid',
    borderColor: '#6200ee',
    borderWidth: 2,
    margin: 5,
    borderRadius: 10,
    justifyContent: 'center',
  },
  border: {
    padding: 1,
    borderRadius: 10,
    backgroundColor: '#bb86fc',
  },
  btnText: {
    fontWeight: 'bold',
  },
  view: {
    padding: 5,
  },
});

export default AddMoney;
