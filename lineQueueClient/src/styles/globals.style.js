import {StyleSheet, Dimensions} from 'react-native';

let {height, width} = Dimensions.get('window')

export let colors = {
  main: '#151515'
}

const globals = StyleSheet.create({
  sceneContainer: {
    display: 'flex',
    width: width,
    height: height
  },
  contentContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'stretch',
    backgroundColor: 'white',
    flex: 1
  },
  textRegular: {
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Assistant',
    color: colors.main
  },
  textLarge: {
    fontSize: 20,
    fontFamily: 'Assistant',
    textAlign: 'center',
    color: colors.main
  }
})

export default globals
