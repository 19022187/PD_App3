import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import AddMoney from './screens/AddMoney';
import ViewTrans from './screens/ViewTrans';
import ViewTran from './screens/ViewTran';

const Stack = createStackNavigator();

const SpenseApp: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home Screen" component={HomeScreen} />
        <Stack.Screen name="Add transactions" component={AddMoney} />
        <Stack.Screen name="View transactions" component={ViewTrans} />
        <Stack.Screen name="View transaction" component={ViewTran} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default SpenseApp;
