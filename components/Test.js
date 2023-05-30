import React from 'react'
import {View,Text,Image, TouchableOpacity, Button } from 'react-native'
import CardButton from './CardButton';
import { STYLES } from '../styles/styles';


const Test = () => {
    return(
        <View style={{backgroundColor: 'pink'}}>
            <Text>SETTTTTTTTINNNNNNGGGGGGGGGGGGGGGGGGG</Text>
            <View>
            {<CardButton
            title = "About"
            customClick = {alert('Button clicked!')}
            >
            </CardButton>
           }
            </View>
           
            
        </View>
    )
}

export default Test;