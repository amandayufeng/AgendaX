import React from 'react'
import {View,Text,Image, TouchableOpacity, useState} from 'react-native'
import { STYLES } from '../styles/styles';

const Database = () => {
    const run_db_command = (sql) => {
        ExecuteCommand(sql);
        
    }

    const initalize_database = () => {
        let sSQL = "";
        //Dropping Tables
        run_db_command("DROP TABLE IF EXISTS Lists");

        //Creating Tables
        run_db_command("CREATE TABLE IF NOT EXISTS Lists(taskNum INTEGER PRIMARY KEY, title text, category text, urgency text)");


    }
    return(
        <View style={{backgroundColor: 'pink'}}>
           <TouchableOpacity
           onPress={initalize_database}
           style={{width: 200, height: 100, borderColor:'white', borderRadius:10}}
           >
            <Text style = {[STYLES.heading, {marginLeft: 10, marginBottom: 5}]}>Database Init - temp</Text>
           </TouchableOpacity>
            
        </View>
    )
}

export default Database;