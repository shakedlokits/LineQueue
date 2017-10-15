import {StyleSheet, Dimensions, Platform} from 'react-native';
import colors from '../../styles/globals.style'

let {height, width} = Dimensions.get('window')

const signupStyle = StyleSheet.create({
  inputContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 1,
    borderColor: colors.main,
    ...Platform.select({
      ios: {
        flex: 1
      },
      android: {
        flex: 0.8,
        paddingBottom: width * (1 / 20)
      }
    })
  },
  inputBox: {
    padding: width * (1 / 20),
    width: width * (5 / 7),
    borderColor: colors.main,
    borderWidth: 1,
    textAlign: 'center'
  },
  buttonBox: {
    borderWidth: 2,
    width: width * (4 / 10),
    height: height * (1 / 10),
    borderColor: colors.main,
    justifyContent: 'center',
    ...Platform.select({
      ios: {
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowColor: '#151515',
        shadowRadius: 0,
        shadowOpacity: 1.0,
        backgroundColor: 'white'
      },
      android: {
        backgroundColor: '#151515'
      }
    })
  },
  buttonText: {
    fontFamily: 'Alef',
    fontWeight: 'bold',
    fontSize: 38,
    textAlign: 'center',
    ...Platform.select({
      ios: {
        color: colors.main,
      },
      android: {
        color: 'white',
      }
    })
  }
})

export default signupStyle
