import StyleSheet from 'react-native';
import colors from '../../styles/globals.style'


const confirmationStyle = StyleSheet.create({
  inputContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textRegularBold: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Assistant',
    color: colors.main
  }
})

export default confirmationStyle
