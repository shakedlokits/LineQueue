import { StyleSheet, Dimensions } from 'react-native';

const globals = StyleSheet.create({
  sceneContainer: {
    display:'flex',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,

  },
  text: {
    fontSize: 16,
    textAlign: 'center',
		fontFamily: 'Assistant',
    color: '#151515',
  },
})

export default globals
