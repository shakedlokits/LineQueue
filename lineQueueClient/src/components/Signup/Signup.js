import React, {Component} from 'react'
import {Text, View, TextInput, TouchableHighlight} from 'react-native';
import Header from '../Header/Header'
import globals from '../../styles/globals.style'
import signupStyle from './Signup.style'
import {Actions} from 'react-native-router-flux'

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  render() {
    return (
      <View style={globals.sceneContainer}>

        <Header/>

        <View style={signupStyle.contentContainer}>

          <View style={signupStyle.inputContainer}>
            <Text style={globals.text}>
              על מנת להזמין תור למחסן הציוד הזן את שמך: {"\n"}
            </Text>
            <TextInput style={signupStyle.box} placeholder={"שם מלא"} onChangeText= { (text) => this.setState({text}) } value={this.state.text}/>
          </View>

          <View style={signupStyle.inputContainerBottom}>
            <View style={signupStyle.buttonContainer}>
              <TouchableHighlight onPress={() => Actions.queue({id: 0, fullName: 'Shaked Lokits'})}>
                <Text style={signupStyle.buttonText}>שלח</Text>
              </TouchableHighlight>
            </View>
          </View>

        </View>

      </View>
    )
  }
}
