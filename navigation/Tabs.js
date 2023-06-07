//import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Home from '../pages/Home';
//import Events from '../pages/Events';

import Schedule from '../pages/Schedule';
import Setting from '../pages/Setting';
import Calendar from '../pages/Events'
import ButtonNav from './ButtonNav';
import List from '../pages/List';
import Events from '../pages/Events';
import About from '../pages/About';

const Tab = () => {
    const Tab = createBottomTabNavigator();

    const CustomBarButton=({children, onPress} ) => {
      <TouchableOpacity
            style={{
                  bottom:30,
                  justifyContent:'center',
                  alignItems:'center',
                  ...style.shadow
            }}
            onPress={onPress}
      >
            <View
                  style={{
                        width:70,
                        height:70,
                        borderRadius: 35,
                        backgroundColor:'#e32f45'
                  }}
            >
                  {children}
            </View>
      </TouchableOpacity>

    }

      return(

            <Tab.Navigator 
                  screenOptions = {{
                        headerShown: false,
                        tabBarShowLabel: false,
                        tabBarStyle:{
                              position:'absolute',
                              //bottom:25,
                              //left:20,
                              //right:20,
                              elevation:10,
                              backgroundColor: '#ffffff',
                              //borderRadius: 15,
                              height:75,
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
                                          width:30,
                                          height:30,
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
            <Tab.Screen name="Events" component={Events} options={{ 
                  tabBarIcon:({focused}) => {
                        return <View>
                              <Image
                                    resizeMode = 'contain'
                                    style = {{
                                          marginLeft:13,
                                          width:30,
                                          height:30,
                                    tintColor:  focused ? '#e32f45' : '#748c94'

                                    }}
                                    //attribution for like flaticon required... graphics pizza
                                    source = {require('../assets/images/events.png')}

                              />
                              <Text
                              style={{color:focused?'#e32f45' : '#748c94', fontSize:15}}
                              >Calendar</Text>
                        </View>
                        
                  }
                  }} />

                  {/* <Tab.Screen name="Modal" component={About} 
                  options={{ 
                  tabBarIcon:({focused}) => (
                        
                              <Image
                                    resizeMode = 'contain'
                                    style = {{
                                          width:30,
                                          height:30,
                                    tintColor:  focused ? '#e32f45' : '#748c94'

                                    }}
                                    //attribution for like flaticon required... graphics pizza
                                    source = {require('../assets/images/events.png')}

                              />
                              
                  
                        
                  ),
                  tabBarButton: (props) => (
                        <CustomBarButton
                        {...props}
                        />
                  )

                  }} /> */}
                  
            <Tab.Screen name="Modal" component={List} options={{ 
                  tabBarIcon:({focused}) => {
                        return <View>
                              <Image
                                    resizeMode = 'contain'
                                    style = {{
                                          marginLeft:-1,
                                          width:30,
                                          height:30,
                                    tintColor:  focused ? '#e32f45' : '#748c94'

                                    }}
                                    //attribution for like flaticon required... graphics pizza
                                    source = {require('../assets/images/to-do-list.png')}
                                    //key={this.state.source.uri}

                              />
                              
                        </View>
                        
                  },
                  /* tabBarButton: (props) => (
                        <CustomBarButton
                              onPress={console.log}

                        />
                  ) */
                  tabBarButton: (props) => (
                        <TouchableOpacity
                        style={{
                              top:-30,
                              justifyContent:'center',
                              alignItems:'center',
                        }}
                        //onPress={console.log("hi")}
                       /*  {...props}
                        onPress={()=>{console.log("hi")}} */
                  >
                        <View
                              style={{
                                    width:75,
                                    height:75,
                                    borderRadius: 40,
                                    backgroundColor:'#e32f45'
                              }}
                        >
                             <Text>HI</Text>
                        </View>
                  </TouchableOpacity>
                  )
                        


                  }} />

            <Tab.Screen name="List" component={List} options={{ 
                  tabBarIcon:({focused}) => {
                        return <View>
                              <Image
                                    resizeMode = 'contain'
                                    style = {{
                                          marginLeft:-1,
                                          width:30,
                                          height:30,
                                    tintColor:  focused ? '#e32f45' : '#748c94'

                                    }}
                                    //attribution for like flaticon required... graphics pizza
                                    source = {require('../assets/images/to-do-list.png')}
                                    //key={this.state.source.uri}

                              />
                              <Text
                              style={{color:focused?'#e32f45' : '#748c94', fontSize:15}}
                              >Lists</Text>
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
                                          width:30,
                                          height:30,
                                    tintColor:  focused ? '#e32f45' : '#748c94'

                                    }}
                                    //attribution for like flaticon required... graphics pizza
                                    source = {require('../assets/images/setting.png')}
                                    //key={this.state.source.uri}

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
            shadowColor: 'gray',//#7F5DF0
            shadowOffset:{
                  width:0,
                  height:10
            },
            shadowOpacity: 0.25,
            shadowRadius:3.5,
            elevation:5

      },
      icon:{
            width: 40,
            height: 40,
      }

})

export default Tab;

