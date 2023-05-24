import React from 'react'
import {View,Text,Image} from 'react-native'

const Home = () => {
    return(
        <View style={{backgroundColor: 'pink'}}>
            <Text>HIIIIII</Text>
            <Image
                style = {{width:50,height:50}}
                source = {require('../assets/images/home.png')}
            />
        </View>
    )
}

export default Home;