import React from 'react'
import {View,Text,Image} from 'react-native'
import { STYLES } from '../styles/styles';
import Database from '../tempPages/DatabaseSetup';

const Home = () => {
    return(
        <View style={{backgroundColor: 'pink'}}>
            <Text style = {[STYLES.title, {marginLeft: 10, marginBottom: 5}]}>Home</Text>
            <Database></Database>
            {/* <Image
                style = {{width:50,height:50}}
                source = {require('../assets/images/home.png')}
            /> */}
            
        </View>
    )
}

export default Home;