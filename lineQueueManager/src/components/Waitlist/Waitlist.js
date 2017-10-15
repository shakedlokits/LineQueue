import React, {Component} from 'react'
import {
  Text,
  View,
  Dimensions,
  AppState,
  Alert,
  TouchableHighlight
} from 'react-native'
import * as firebase from 'firebase'
import PropTypes from 'prop-types'
import moment from 'moment'
import waitlistStyle from './Waitlist.style'
import globals from '../../styles/globals.style'
import Header from '../Header/Header'

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
          return Object.assign({}, waitlist[key], {
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
      <View style={globals.sceneContainer}>
        <Header/>
        <View style={waitlistStyle.listConatiner}>
          {this.state.waitlist.map((client, index) => {

            let itemContainerStyle = [
              waitlistStyle.itemContainer,
            (index === 0) ? {
              backgroundColor: '#151515',
              marginBottom: 20
            } : {
              backgroundColor: 'white'
            }
            ]

            let textColor = (index === 0) ? {
              color: 'white'
            } : {
              color: '#151515'
            }

            return (
              <View key={client.id} style={itemContainerStyle}>
                <View style={waitlistStyle.idContainer}>
                  <Text style={[textColor, waitlistStyle.idText]}>{client.id}</Text>
                </View>
                <View style={waitlistStyle.fullNameContainer}>
                  <Text style={[waitlistStyle.fullNameText, textColor]}>{client.fullName}</Text>
                </View>
                <View style={waitlistStyle.timestampContainer}>
                  <Text style={[waitlistStyle.timestampText, textColor]}>{client.timestamp}</Text>
                </View>
              </View>
            )
          })}
        </View>
        <View style={waitlistStyle.buttonContainer}>
          <View style={waitlistStyle.buttonRedBox}>
            <TouchableHighlight onPress={() => {}}>
              <Text style={waitlistStyle.buttonText}>מחק רשימה</Text>
            </TouchableHighlight>
          </View>
          <View style={waitlistStyle.buttonBox}>
            <TouchableHighlight onPress={() => {}}>
              <Text style={waitlistStyle.buttonText}>הבא</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    )
  }
}
