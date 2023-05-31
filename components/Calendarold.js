import React from 'react'
import {View,Text,Image, Button} from 'react-native'

const Calendar = () => {
    months = ["January", "February", "March", "April", 
    "May", "June", "July", "August", "September", "October", 
    "November", "December"];
   
    weekDays = [
        "Sun","Mon","Tue","Wed","Thu","Fri","Sat"
    ];

    nDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    state = {
        activeDate: new Date()
    } 

    var year = this.state.activeDate.getFullYear();
    var month = this.state.activeDate.getMonth();
   
    var firstDay = new Date(year, month, 1).getDay(); 
    
    var maxDays = this.nDays[month];
    if (month == 1) { // February
        if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
            maxDays += 1;
        }
    } 

    

    /* props.data.map(data => {  
        months.push(  
        <td  
        key={data}  
        className="calendar-month"  
        onClick={e => {  
        this.setMonth(data);  
        }}  
        >  
        <span>{data}</span>  
        </td>  
        );  
     });
    */
    return(
        <View style={{backgroundColor: 'pink'}}>
            <Text style={{
                fontWeight: 'bold',
                fontSize: 18,
                textAlign: 'center'
            }}>
                {this.months[this.state.activeDate.getMonth()]}{" "}{this.state.activeDate.getFullYear()}
            </Text> 
      
        </View>
    )
}

export default Calendar;