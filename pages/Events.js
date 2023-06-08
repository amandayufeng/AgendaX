import React, {useState} from 'react'
import {View,Text,Image} from 'react-native'
//import Calendar from '../components/Calendarold';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import { STYLES } from '../styles/styles';

const Events = () => {
    const [selected, setSelected] = useState('');
    return(
        <View style={{backgroundColor: 'pink'}}>
            <Text style = {[STYLES.title, {marginLeft: 10, marginBottom: 5}]}>Calendar</Text>
            {/* <Calendar/> */}
            <Calendar
                onDayPress={day => {
                setSelected(day.dateString);
                console.log(day)
                }}
                //markingType={'period'}
                markedDates={{
                [selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'pink'},
                //'2023-05-06': {marked: true, dotColor: '#50cebb'},
                }}
                theme={{
                    backgroundColor: '#ffffff',
                    calendarBackground: '#ffffff',
                    textSectionTitleColor: 'pink', //colors days of week
                    selectedDayBackgroundColor: '#00adf5',
                    selectedDayTextColor: '#ffffff',
                    todayTextColor: '#00adf5',
                    dayTextColor: '#2d4150',
                    textDisabledColor: 'gray'
                }}
                
                
            />
            

            
        </View>
    )
}

export default Events;