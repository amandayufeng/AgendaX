import React from 'react'
import {View, Text,Linking } from 'react-native'

//<a href="https://www.flaticon.com/free-icons/setting" title="setting icons">Setting icons created by Phoenix Group - Flaticon</a>

const About = ()=>{
    return(
        <View style={{ flex: 1, flexDirection: 'row'}}>
            <View style={{flex: 1, borderWidth: 2}}>
                <Text style={{ marginTop:25,fontSize:40 ,fontWeight: '400', textAlign: 'center'}}>AGENDAX</Text>
                <Text style={{fontSize:20 ,fontWeight: '400', textAlign: 'center'}}>Written by Amanda X</Text>
                

                <Text 
                style={{marginTop:5, fontSize:20 ,fontWeight: '400', textAlign: 'center'}}
                onPress={() => Linking.openURL('https://www.flaticon.com/')}
                >Icon Credits to Flaticon: </Text>
                <Text
                style={{marginTop:2, fontSize:15 ,fontWeight: '400',marginLeft:5}}
                onPress={() => Linking.openURL('https://www.flaticon.com/free-icons/calendar')}
                > - Calendar icons created by Freepik - Flaticon</Text>
                <Text
                style={{marginTop:2, fontSize:15 ,fontWeight: '400',marginLeft:5}}
                onPress={() => Linking.openURL('https://www.flaticon.com/free-icons/rank')}
                > - Rank icons created by Graphics Plazza - Flaticon</Text>
                <Text
                style={{marginTop:2, fontSize:15 ,fontWeight: '400',marginLeft:5}}
                onPress={() => Linking.openURL('https://www.flaticon.com/free-icons/setting')}
                > - Setting icons created by Phoenix Group - Flaticon</Text>
                <Text
                style={{marginTop:2, fontSize:15 ,fontWeight: '400',marginLeft:5}}
                onPress={() => Linking.openURL('https://www.flaticon.com/free-icon/to-do-list_1950715?term=list&page=1&position=3&origin=search&related_id=1950715')}
                > - To Do icons created by Freepik - Flaticon</Text>
            </View>
         
        </View>
    )
}

export default About;