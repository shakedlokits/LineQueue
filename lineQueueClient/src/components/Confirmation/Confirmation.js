import React from 'react'
import {
  Text,
  View
} from 'react-native';
import Header from '../Header/Header'

const Confirmation = (props) => {
	return (
		<View>
			<Header />
			<Text>
				Hey, {props.fullName}, thank's for all the fish!
			</Text>
		</View>
	)
}

export default Confirmation
