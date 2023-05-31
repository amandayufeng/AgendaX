import React from 'react'
import {View,Text,Image} from 'react-native'

const Home = () => {
    const run_db_command = (sql) => {
        ExecuteCommand(sql);
        let p = progress + singlecmd;
        setProgress(p);
    }

    const initalize_database = () => {
        let sSQL = "";
        

    }
    return(
        <View style={{backgroundColor: 'pink'}}>
            <Text>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHHHHHHHHHHHHHHHHHHH</Text>
            
        </View>
    )
}

export default Home;