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
            }}
            markedDates={{
                [selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'}
            }}
            />
            
        </View>
    )
}

export default Events;