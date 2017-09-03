import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../styles/globals.style'

let {height, width} = Dimensions.get('window')

const signupStyle = StyleSheet.create({
  inputContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 1,
    borderColor: colors.main
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
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowColor: colors.main,
    shadowRadius: 0,
    shadowOpacity: 1.0,
    justifyContent: 'center'
  },
  buttonText: {
    fontFamily: 'Alef',
    fontWeight: 'bold',
    fontSize: 38,
    textAlign: 'center'
  }
})

export default signupStyle
