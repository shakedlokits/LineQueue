import { StyleSheet, Dimensions } from 'react-native';

const signupStyle = StyleSheet.create({
  contentContainer: {
    display:'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    flex: 1,
  },
  inputContainer:{
  },
  inputContainer2:{
    borderWidth: 1,
    width: Dimensions.get('window').width,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
		fontFamily: 'Assistant',
    color: '#151515'
  },
  box: {
    height: 58,
    width: 264,
    borderColor: '#404040',
    borderWidth: 2
  },
  border: {
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#151515',

    width: Dimensions.get('window').width,
  },
  button: {
    borderWidth: 2,
    color: '#151515',
    shadowOffset:{  width: 3,  height: 0, },
    shadowColor: '#151515',
    shadowOpacity: 1.0,
    fontFamily: 'Alef',
    fontWeight: 'bold',

  }
})

export default signupStyle
