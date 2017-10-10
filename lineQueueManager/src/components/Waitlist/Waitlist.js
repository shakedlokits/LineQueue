import React, {Component} from 'react'
import {Text, View, Dimensions, AppState, Alert} from 'react-native'
import * as firebase from 'firebase'
import PropTypes from 'prop-types'
import moment from 'moment'

export default class Waitlist extends Component {

  /**
	 * Initializes firebase database and waiting state
	 */
  constructor(props) {
    super(props)
    this.state = {
      waitlist: []
    }
    this.database = firebase.database()
    this.getWaitlist = this._getWaitlist.bind(this)
  }

  /**
	 * Fetches and formats the waitlist, sets the state to it,
	 * @return {None}
	 */
  _getWaitlist() {

    // requests the waitlist from firebase
    this.database.ref('waitlist').orderByChild('id').once('value', (snapshot) => {

      // define format for timestamp
      let timestampFormat = "DD/MM HH:MM"

      // on success, set the state to number of waiting ahead
      let waitlist = snapshot.val()

      this.setState({
        waitlist: Object.keys(waitlist).map((key, index) => {
          return Object.assign({} ,waitlist[key], {
            timestamp: moment(waitlist[key].timestamp).format(timestampFormat)
          })
        })
      })
    })

  }

  /**
	 * on mount, set up running id listener and listen for app state
	 */
  componentDidMount() {

    // set a running id listener
    var getWaitlist = this.getWaitlist
    this.database.ref('/waitlist').on('value', function() {
      getWaitlist()
    })
  }

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
    this.database.ref('waitlist').orderByChild("id").limitToFirst(1).once('value', (snapshot) => {
      snapshot.ref.remove().then(Actions.signup)
    })
  }

  render() {
    return (
      <View>
        {this.state.waitlist.map((client) => {
          return (
            <View key={client.id}>
              <Text>{client.fullName} {client.timestamp}</Text>
            </View>
          )
        })}
      </View>
    )
  }
}
