import React from 'react'
import {View} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Tab from './navigation/Tabs';


const App = () => {
  //const Tab = createBottomTabNavigator();
    return(
        <NavigationContainer>
          <Tab/>
        </NavigationContainer>
          
        
    )
}

export default App;