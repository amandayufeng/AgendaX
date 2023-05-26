import React, { useState } from "react";
import {View, TextInput, Text, TouchableOpacity} from 'react-native';
import STYLES from './styles/styles.js'

const AddInput = () => {
    const [value, setValue] = useState("");
    const onChangeText = (text) => {
        setValue(text);
    };

    return(
        <View>
            <View>
                <TextInput placeholder="Add Task..." onChangeText= 
                {onChangeText} />
            </View>
            <TouchableOpacity
                onPress={() => {
                alert('button clicked')
            }}
            >
            <Text>Submit</Text>
            </TouchableOpacity>
      </View>
    )
}

export default AddInput;