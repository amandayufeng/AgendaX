import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { STYLES } from '../styles/styles';

const CardButton = (props) => {
  return (
    <TouchableOpacity
      style={[STYLES.button]}
      onPress={props.customClick}>
      <Text style={styles.text}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontWeight: "400",
    color: '#ffffff',
  },
});

export default CardButton;