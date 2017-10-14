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
    this.wipeData = this._wipeData.bind(this)
    this.handleWipeData = this._handleWipeData.bind(this)
    this.removeUserFromQueue = this._removeUserFromQueue.bind(this)
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
   * wipes the user data from the database!
   */
  _wipeData() {
    this.database.ref('waitlist').orderByChild('id').once('value', (snapshot) => {
      snapshop.forEach((clientSnapshot) => {
        clientSnapshot.ref().remove()
      })
    })
  }

  /**
   * prompts the user about wiping the database
   * before doing so, uses a modal notification
   */
  _handleWipeData() {

      // alert prompt data
      let alertTitle = 'עצור!'
      let alertMessage = 'אתה בטוח שאתה רוצה לאפס את התור?'

      // prompt the user
      Alert.alert(alertTitle, alertMessage, [
        {
          text: 'לא',
          style: 'cancel'
        }, {
          text: 'תאפס אותו',
          onPress: this.wipeData
        }
      ], {cancelable: false})
  }

  /**
   * removes the user from queue and moves
   * back to the signup screen
   */
  _removeUserFromQueue() {
    this.database.ref('waitlist').orderByChild("id").limitToFirst(1).once('value', (snapshot) => {
      snapshot.ref.remove()
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
