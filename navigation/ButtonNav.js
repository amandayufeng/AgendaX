import React from 'react'
import {View, Text} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import Setting from '../pages/Setting';
import About from '../pages/About';
import Tab from './Tabs';

const ButtonNav = () => {
    const Stack = createStackNavigator();
    return(
    <NavigationContainer independent = {true}>
      <Stack.Navigator
      initialRouteName="Main"
      >
        <Stack.Screen 
          name="Main" 
          component={Tab} 
          options={{ headerShown: false }}
          />

        <Stack.Screen 
          name="About" 
          component={About} 
          options={{}}
           />

      </Stack.Navigator>
      </NavigationContainer>
    )

}

export default ButtonNav;