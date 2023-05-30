import React from 'react'
import {View} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Tab from './navigation/Tabs';
import ButtonNav from './navigation/ButtonNav';


const App = () => {
  //const Tab = createBottomTabNavigator();
    return(
        <NavigationContainer>
          <ButtonNav/>
        </NavigationContainer>
          
        
    )
}

export default App;