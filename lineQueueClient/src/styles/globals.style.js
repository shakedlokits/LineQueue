import { StyleSheet, Dimensions } from 'react-native';

const globals = StyleSheet.create({
  sceneContainer: {
    display:'flex',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,

  }
})

export default globals
