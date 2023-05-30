import { StyleSheet,Dimensions } from 'react-native';
import { color } from 'react-native-reanimated';

//to be changed but please use these and add as needed
export const STYLES = StyleSheet.create({
  background: {
    backgroundColor:'white',   
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
  flex: {
    flex: 1
  },
  centerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5
  },
  title: {
    fontSize: 30,
    color: 'white'
  },
  heading: {
    fontSize: 25
  },
  selectButtonContainer: {
    margin: 20,
    borderRadius: 5
  },
  selectButtonTitle: {
    padding: 10,
    fontSize: 18
  },
  // ADD BELOW
  imageContainer: {
    marginVertical: 20,
    borderWidth: 5,
    borderColor: 'black'
  },
  imageBox: {
    width: 256,
    height: 256
  },
  button: {
    borderColor: 'black',
    borderWidth: 3,
    borderRadius: 10,
    color: 'pink',
    height: 80,
    width: 390
    
  }
});

export const COLORS = {
  primaryDark: '#22212c',
  primaryLight: '#f8f8f2',
  primaryRed: '#ff5555',
  primaryPink: '#ff80bf',
  primaryYellow: '#ffff80',
  primaryOrange: '#ff9580'
};