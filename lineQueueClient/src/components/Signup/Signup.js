import React, {Component} from 'react'
import {Text, View, TextInput, TouchableHighlight, Keyboard, TouchableWithoutFeedback} from 'react-native';
import Header from '../Header/Header'
import * as firebase from 'firebase'
import globals from '../../styles/globals.style'
import signupStyle from './Signup.style'
import {Actions} from 'react-native-router-flux'
import moment from 'moment'

/**
 * Provides a user signup into queue database
 * @type Component
 */
export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: ''
    }
    this.database = firebase.database()
    this.registerNewUser = this._registerNewUser.bind(this)
  }

  _registerNewUser() {

    // first fetch and secure a running number
    this.database.ref('runningId').once('value', (snapshot) => {

      // fetch the currently running ID and increment it
      let runningId = snapshot.val()
      this.database.ref('runningId').set(runningId + 1)

      // save secured ID to state
      this.setState({
        id: runningId + 1,
        timestamp: moment().format()
      }, () => {
        // push new user to waitlist as callback
        this.database.ref('waitlist').push(this.state)

        // move to Queue screen
        Actions.queue(this.state)
      })
    })
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={globals.sceneContainer}>
          <Header/>
          <View style={globals.contentContainer}>
            <View style={signupStyle.inputContainer}>
              <Text style={globals.textRegular}>
                על מנת להזמין תור למחסן הציוד הזן את שמך: {"\n"}
              </Text>
              <TextInput style={[globals.textLarge, signupStyle.inputBox]}
                underlineColorAndroid={'transparent'} placeholder={"שם מלא"}
                onChangeText= { (input) => this.setState({fullName: input}) } value={this.state.fullName}/>
            </View>
            <View style={signupStyle.buttonContainer}>
              <View style={signupStyle.buttonBox}>
                <TouchableHighlight onPress={this.registerNewUser}>
                  <Text style={signupStyle.buttonText}>שלח</Text>
                </TouchableHighlight>
              </View>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}
