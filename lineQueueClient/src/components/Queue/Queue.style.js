import { StyleSheet, Dimensions, Platform} from 'react-native';
import { colors } from '../../styles/globals.style'

let width = Dimensions.get('window').width

const queueStyle = StyleSheet.create({
  contentContainer: {
		flex: 1,
		flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch'
	},
	textContainer: {
		flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
		padding: width / 10,
    ...Platform.select({
      ios: {
        flex: 2,
      },
      android: {
        flex: 1.5,
      },
    }),
	},
	content: {
		textAlign: 'center',
		fontFamily: 'Assistant',
		fontWeight: 'normal',
		fontSize: 20,
    color: colors.main
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
		backgroundColor: colors.main,
		width: width / 6,
		height: width / 6
	},

	footerContainer: {
		flex: 1,
		borderTopWidth: 1,
    ...Platform.select({
      ios: {
        justifyContent: 'center'
      },
      android: {
        justifyContent: 'flex-start',
        paddingTop: width /10
      },
    }),
	},
	footerContent: {
		fontSize: 16
	}
})

export default queueStyle
