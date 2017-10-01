import React, {Component} from 'react'
import {Text, View, Dimensions, AppState, Alert} from 'react-native'
import * as firebase from 'firebase'
import {Actions} from 'react-native-router-flux'
import PropTypes from 'prop-types';
import Header from '../Header/Header'
import queueStyle from './Queue.style'
import PushNotification from 'react-native-push-notification'
import globals from '../../styles/globals.style'

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
    this.removeUserFromQueue = this._removeUserFromQueue.bind(this)
    this.handleAppClose = this._handleAppClose.bind(this)
  }

  /**
	 * Fetches the number of waiting ahead in line, sets the state to it,
	 * if no one is waiting, move to confirmation screen.
	 * @return {None}
	 */
  _getNumberOfWaiting() {

    // requests the waitlist from firebase
    this.database.ref('waitlist').once('value', (snapshot) => {

      // on success, set the state to number of waiting ahead
      let waitlist = snapshot.val()
      this.setState({
        numWaiting: countPosition(waitlist, this.props.id)
      }, () => {
        // if the number of waiting ahead is zero, move to next screen
        if (!this.state.numWaiting) {
          Actions.confirmation({fullName: this.props.fullName})
        }

        if (this.state.numWaiting < 5) {
          PushNotification.localNotification({
            title: "הבא בתור!",
            message: "ישנם " + this.state.numWaiting + " ממתינים לפניך, אנא גש/י לדלפק המחסן."
          })
        }
      })
    })

  }

  /**
	 * on mount, set up running id listener and listen for app state
	 */
  componentDidMount() {

    // set a running id listener
    var getNumberOfWaiting = this.getNumberOfWaiting
    this.database.ref('/waitlist').on('value', function() {
      getNumberOfWaiting()
    })

    // listen for app state close
    // TODO: add an exit alert on app close
    // AppState.addEventListener('change', this.handleAppClose);
  }

  /**
   * removes app close listener
   */
  // componentWillUnmount() {
  //   AppState.removeEventListener('change', this.handleAppClose);
  // }

  /**
   * if the next state is inactive(application closed,
   * prompt the user about loss of turn
   * @param  {[type]} nextAppState the next AppState object
   */
  _handleAppClose(nextAppState) {

    // on next state being inactive
    if (nextAppState.match(/inactive|background/)) {

      // alert prompt data
      let alertTitle = 'אוי ואבוי'
      let alertMessage = 'יציאתך מהאפליקציה תוותר על מיקומך בתור'

      // prompt the user
      Alert.alert(alertTitle, alertMessage, [
        {
          text: 'תשאיר אותי בתור',
          style: 'cancel'
        }, {
          text: 'וויתרתי',
          onPress: this.removeUserFromQueue
        }
      ], {cancelable: false})
    }
  }

  /**
   * removes the user from queue and moves
   * back to the signup screen
   */
  _removeUserFromQueue() {
    this.database.ref('waitlist').orderByChild("id").limitToFirst(1).equalTo(this.props.id).once('value', (snapshot) => {
      snapshot.ref.remove().then(Actions.signup)
    })
  }

  render() {
    return (
      <View style={{
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
				display: 'flex'
      }}>
				<Header />
				<View style={globals.contentContainer}>
					<View style={queueStyle.textContainer}>
						<Text style={queueStyle.content}>
							היי{'\u00a0'}
							<Text style={queueStyle.boldContent}>
								{this.props.fullName},
							</Text>
							{'\n'}מספרך בתור הוא
						</Text>
						<Text style={queueStyle.queueNumber}>
							{this.props.id}
						</Text>
						<Text style={queueStyle.content}>
							ממתינים לפניך עוד{'\u00a0'}
							<Text style={queueStyle.boldContent}>
								{this.state.numWaiting}
							</Text>
							{'\u00a0'}אנשים
						</Text>
					</View>
					<View style={queueStyle.footerContainer}>
						<Text style={[queueStyle.content, queueStyle.footerContent]}>
              ניתן לסגור כעת את האפליקציה, הודעה תשלח{'\n'} אלייך כשיתקרב תורך.
						</Text>
					</View>
				</View>
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
  Object.entries(waitlist).forEach(([stamp, customer]) => {
    if (customer.id < id) {
      counter += 1
    }
  })
  return counter
}
