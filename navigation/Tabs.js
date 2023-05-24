//import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../pages/Home';
//import Events from '../pages/Events';
import ButtonNav from './ButtonNav';
import Schedule from '../pages/Schedule';
import Setting from '../pages/Setting';
import Calendar from '../pages/Calendar'

const Tab = () => {
    const Tab = createBottomTabNavigator();
      return(

            <Tab.Navigator 
                  screenOptions = {{
                        headerShown: false,
                        tabBarShowLabel: false,
                        tabBarStyle:{
                              position:'absolute',
                              bottom:25,
                              left:20,
                              right:20,
                              elevation:10,
                              backgroundColor: '#ffffff',
                              borderRadius: 15,
                              height:100,
                              ...style.shadow
                        }

                  }}
            >
            <Tab.Screen name="Home" component={Home} options={{ 
                  tabBarIcon:({focused}) => {
                        return <View>
                              <Image
                                    resizeMode = 'contain'
                                    style = {{
                                          width:40,
                                          height:40,
                                    tintColor:  focused ? '#e32f45' : '#748c94'

                                    }}
                                    source = {require('../assets/images/home.png')}

                              />
                              <Text
                              style={{color:focused?'#e32f45' : '#748c94', fontSize:15}}
                              >Home</Text>
                        </View>
                        
                  }
                  }} />
            {/* <Tab.Screen name="Events" component={ButtonNav} options={{ 
                  tabBarIcon:({focused}) => {
                        return <View>
                              <Image
                                    resizeMode = 'contain'
                                    style = {{
                                          marginLeft:3,
                                          width:40,
                                          height:40,
                                    tintColor:  focused ? '#e32f45' : '#748c94'

                                    }}
                                    //attribution for like flaticon required... idk gotta draw our own ig
                                    source = {require('../assets/images/events.png')}

                              />
                              <Text
                              style={{color:focused?'#e32f45' : '#748c94', fontSize:15}}
                              >Events</Text>
                        </View>
                        
                  }
                  }} /> */}
            <Tab.Screen name="Calendar" component={Calendar} options={{ 
                  tabBarIcon:({focused}) => {
                        return <View>
                              <Image
                                    resizeMode = 'contain'
                                    style = {{
                                          marginLeft:3,
                                          width:40,
                                          height:40,
                                    tintColor:  focused ? '#e32f45' : '#748c94'

                                    }}
                                    //attribution for like flaticon required... graphics pizza
                                    source = {require('../assets/images/ranking.png')}

                              />
                              <Text
                              style={{color:focused?'#e32f45' : '#748c94', fontSize:15}}
                              >Data</Text>
                        </View>
                        
                  }
                  }} />
            <Tab.Screen name="Settings" component={Setting} options={{ 
                  tabBarIcon:({focused}) => {
                        return <View>
                              <Image
                                    resizeMode = 'contain'
                                    style = {{
                                          marginLeft:3,
                                          width:40,
                                          height:40,
                                    tintColor:  focused ? '#e32f45' : '#748c94'

                                    }}
                                    //attribution for like flaticon required... graphics pizza
                                    source = {require('../assets/images/setting.png')}
                                    key={this.state.source.uri}

                              />
                              <Text
                              style={{color:focused?'#e32f45' : '#748c94', fontSize:15}}
                              >Setting</Text>
                        </View>
                        
                  }
                  }} />

            
            </Tab.Navigator>
            
          
      )
}

const style = StyleSheet.create({
      shadow:{
            shadowColor: '#7F5DF0',
            shadowOffset:{
                  width:0,
                  height:10
            },
            shadowOpacity: 0.25,
            shadowRadius:3.5,
            elevation:5

      },

})

export default Tab;

