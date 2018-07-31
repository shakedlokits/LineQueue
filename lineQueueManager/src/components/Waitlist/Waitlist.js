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
    this.database.ref('waitlist').orderByChild('id').limitToFirst(10).once('value', (snapshot) => {

      // define format for timestamp
      let timestampFormat = "DD/MM HH:MM"

      // on success, set the state to number of waiting ahead
      let waitlist = snapshot.val()
      console.info('Fetching waitlist', waitlist)

      if (!waitlist) {
        this.setState({
          waitlist: []
        }, () => {
          console.info('no waiting in list')
        })
      } else {
        this.setState({
          waitlist: Object.keys(waitlist).map((key, index) => {
            return Object.assign({} ,waitlist[key], {
              timestamp: moment(waitlist[key].timestamp).format(timestampFormat)
            })
          })
        }, () => {
          console.info('set state to wailist')
        })
      }

    })

  }

  /**
	 * on mount, set up running id listener and listen for app state
	 */
  componentDidMount() {
    console.info('Component did mount')

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
      console.info("Wiping users from database", snapshot.val())
      snapshot.forEach((clientSnapshot) => {
        clientSnapshot.ref.remove()
      })
    })
    console.info('Resetting counter')
    this.database.ref('runningId').set(0)
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

      // logging removal
      let userData = snapshot.val()
      if (userData) console.info('Removing %s, number %d from queue', userData.fullName, userData.id )


      // removing user from database
      snapshot.forEach((clientSnapshot) => {
        clientSnapshot.ref.remove()
      })
    })
  }

  render() {
    return (
      <View style={globals.sceneContainer}>
        <Header/>
        <View style={waitlistStyle.listConatiner}>
          {this.state.waitlist.map((client, index) => {

            // set first item parameters
            let textColor = (index === 0) ? waitlistStyle.textColorFirst : {}
            let itemContainerStyle = [
              waitlistStyle.itemContainer,
              (index === 0) ? waitlistStyle.itemContainerFirst : {}
            ]

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
            <TouchableHighlight onPress={this.handleWipeData}>
              <Text style={waitlistStyle.buttonText}>מחק רשימה</Text>
            </TouchableHighlight>
          </View>
          <View style={waitlistStyle.buttonBox}>
            <TouchableHighlight onPress={this.removeUserFromQueue}>
              <Text style={waitlistStyle.buttonText}>הבא</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    )
  }
}
