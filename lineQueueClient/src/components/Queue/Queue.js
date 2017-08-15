import React, {Component} from 'react'
import {Text, View} from 'react-native'
import * as firebase from 'firebase'
import { Actions } from 'react-native-router-flux'
import PropTypes from 'prop-types';
import Header from '../Header/Header'

export default class Queue extends Component {

	/**
	 * Initializes firebase database and waiting state
	 */
  constructor(props) {
    super(props)
		this.state = {
			numWaiting: 0
		}
		this.database = firebase.database()
		this.getNumberOfWaiting = this._getNumberOfWaiting.bind(this)
  }

	/**
	 * Fetches the number of waiting ahead in line, sets the state to it,
	 * if no one is waiting, move to confirmation screen.
	 * @return {None}
	 */
	_getNumberOfWaiting(){

		// requests the waitlist from firebase
		this.database.ref('waitlist').once('value', (snapshot) => {

			// on success, set the state to number of waiting ahead
			let waitlist = snapshot.val()
			this.setState({
				numWaiting: countPosition(waitlist, this.props.id)
			})

			// if the number of waiting ahead is zero, move to next screen
			if(!this.state.numWaiting){
				Actions.confirmation({
					fullName: this.props.fullName
				})
			}
		})
	}

	/**
	 * on mount, set up running id listener
	 */
	componentDidMount(){
		var getNumberOfWaiting = this.getNumberOfWaiting
		this.database.ref('/runningId').on('value', function() {
			getNumberOfWaiting()
		})
	}

  render() {
    return (
      <View>
				<Header />
        <Text>
          Hi {this.props.fullName},
					Your number in line is {this.props.id} and there
					are {this.state.numWaiting} people waiting ahead of you
        </Text>
      </View>
    )
  }
}

Queue.propTypes = {
	id: PropTypes.number.isRequired,
	fullName: PropTypes.string.isRequired
}

/**
 * evaluates number of customers waiting ahead of a given id
 * @param  {Array} waitlist array of customers, each with a unique id
 * @param  {Number} id       customer id to evaluate against
 * @return {Number}          how many customers are ahead
 */
export function countPosition(waitlist, id) {
	let counter = 0

	// for each customer, count the ones ahead
	waitlist.map((customer) => {
		if(customer.id < id){
			counter+=1
		}
	})
	return counter
}
