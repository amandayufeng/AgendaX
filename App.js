import React from 'react'
import {StatusBar, View} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Tab from './navigation/Tabs';
import ButtonNav from './navigation/ButtonNav';
import SQLite from "react-native-sqlite-storage";


/*************************************************
*  Open the database once for all components 
**************************************************/
global.db = SQLite.openDatabase(
  { name: 'Swamp.db' },
  () => { },
  error => {
    console.log("Database Open Error: " + error);
  }
);

/*************************************************
* Define Global Functions that can be called by  
* any component 
**************************************************/

/*************************************************
* Execute sql queries
* 
* @param sql
* @param params
* 
* @returns {resolve} results
**************************************************/
ExecuteQuery = (sql, params = []) => new Promise((resolve, reject) => {
  global.db.transaction((trans) => {
    trans.executeSql(sql, params, (trans, results) => {
      console.log("Home:DB Query: " + sql.substring(0, 30) + "--Completed!");
      resolve(results);
    },
      (error) => {
        reject(error);
      });
  });
});

/****************************************************
* Await promise return of sql queries
* 
* @param sql
* 
* @returns {resolve} results
*****************************************************/
ExecuteCommand = async (sql, parms = []) => {
  try {
    let nonReturnQry = await ExecuteQuery(sql, parms);
    console.log("Home:DB Cmd: " + sql.substring(0, 30) + "--Completed!");
  } catch (err) {
    console.log("Error in Settings:ExecuteCommand: " + sql + " " + err.message);
  }
}



const App = () => { 
  
  //const Tab = createBottomTabNavigator();
    return(
      
        <NavigationContainer>
          <StatusBar
            backgroundColor="pink"
            barStyle="light-content"
          />
          <ButtonNav/>
        </NavigationContainer>
          
        
    )
}

export default App;