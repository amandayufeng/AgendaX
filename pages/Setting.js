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
        <View style={[STYLES.container]}>
            <Text style = {[STYLES.title]}>SETTINGS</Text>


            <TouchableOpacity 
                style = {[STYLES.button,{marginTop:13}]}
                onPress = {toAbout}
            >
                <View style = {{flexDirection: 'row'}}>
                
                <Image
                    resizeMode = 'contain'
                    style = {[STYLES.settingIcon]}
                    source = {require('../assets/images/attendance.png')}
                />

                <Text
                style = {[STYLES.heading]}
                >About</Text>
                </View>
                
                                    
            </TouchableOpacity>
            
        </View>
    )
}

export default Setting;