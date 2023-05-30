import React from 'react'
import {View,Text,Image, TouchableOpacity, Button } from 'react-native'
import CardButton from '../components/CardButton';
import { STYLES } from '../styles/styles';

import { useNavigation } from '@react-navigation/native';


const Setting = () => {
    const navigation = useNavigation();
    const toAbout = () =>{
        navigation.getParent().navigate('About');
        console.log("Ihr")
    }
    return(
        <View style={[{backgroundColor: 'pink'},STYLES.centerContainer]}>
            <Text>SETTTTTTTTINNNNNNGGGGGGGGGGGGGGGGGGG</Text>


            <TouchableOpacity 
                style = {[STYLES.button,{marginTop:13}]}
                onPress = {toAbout}
            >

            <Image
            resizeMode = 'contain'
            style = {{
                //margin cuz bad photo
                marginLeft:7,
                width:40,
                height:40,
            }}
            source = {require('../assets/images/attendance.png')}
            />
                                    
            </TouchableOpacity>
            
        </View>
    )
}

export default Setting;