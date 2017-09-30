import {StyleSheet, Dimensions} from 'react-native';

let width = Dimensions.get('window').width

const confirmationStyle = StyleSheet.create({
  textContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: width / 10,
  },
  footerContainer: {
		flex: 1,
		borderTopWidth: 1,
		justifyContent: 'flex-start',
    padding: width / 10,
  },

})

export default confirmationStyle
