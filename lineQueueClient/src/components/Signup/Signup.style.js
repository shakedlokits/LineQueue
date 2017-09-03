import {StyleSheet, Dimensions} from 'react-native';

let width = Dimensions.get('window').width
let height = Dimensions.get('window').height

const signupStyle = StyleSheet.create({
  contentContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'stretch',
    backgroundColor: 'white',
    flex: 1
  },
  inputContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainerBottom: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 1,
    borderColor: '#151515',
    paddingBottom: height * (1 / 8),
  },
  box: {
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'Assistant',
    width: width * (3 / 4),
    height: height * (1 / 10),
    borderColor: '#151515',
    borderWidth: 1
  },
  buttonContainer: {
    borderWidth: 2,
    width: width * (4 / 10),
    height: height * (1 / 10),
    borderColor: '#151515',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowColor: '#151515',
    shadowRadius: 0,
    shadowOpacity: 1.0,
    justifyContent: 'center',
  },
  buttonText: {
    fontFamily: 'Alef',
    fontWeight: 'bold',
    fontSize: 38,
    textAlign: 'center'
  }
})

export default signupStyle
