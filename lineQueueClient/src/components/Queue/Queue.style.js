import { StyleSheet, Dimensions } from 'react-native';

let width = Dimensions.get('window').width

const queueStyle = StyleSheet.create({
  contentContainer: {
		flex: 1,
		flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch'
	},
	textContainer: {
		flex: 2,
		flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
		padding: width / 10
	},
	content: {
		textAlign: 'center',
		fontFamily: 'Assistant',
		fontWeight: 'normal',
		fontSize: 20
	},
	boldContent: {
		fontWeight: 'bold'
	},
	queueNumber: {
		textAlign: 'center',
		fontFamily: 'Assistant',
		fontSize: 40,
		color: 'white',
		fontWeight: '800',
		backgroundColor: '#151515',
		width: width / 6,
		height: width / 6,
	},
	footerContainer: {
		flex: 1,
		borderTopWidth: 1,
		justifyContent: 'center'
	},
	footerContent: {
		fontSize: 16
	}
})

export default queueStyle