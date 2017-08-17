import { StyleSheet } from 'react-native';

const signupStyle = StyleSheet.create({
  containerWhite: {
    flex: 1,
    backgroundColor: 'white'
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
    borderWidth: 1
  },
  border: {
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#151515'
  },
  button: {
    borderWidth: 1,
    color: '#151515'
  }
})

export default signupStyle
