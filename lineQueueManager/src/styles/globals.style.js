import {StyleSheet, Dimensions, Platform} from 'react-native';

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
    textAlign: 'center',
    color: colors.main,
    ...Platform.select({
      ios: {
        fontFamily: 'Assistant',
        fontSize: 16,
      },
      android: {
        fontFamily: 'Assistant Regular',
        fontSize:18,
      },
    }),
  },
  textLarge: {
    fontSize: 20,
    fontFamily: 'Assistant Regular',
    textAlign: 'center',
    color: colors.main,
  },
  textBold: {
    fontFamily: 'Assistant Bold',
  }
})

export default globals
