import React, {Component} from 'react'
import {Text, View, TextInput, Button} from 'react-native';
import Header from '../Header/Header'
import globals from '../../styles/globals.style'
import signupStyle from './Signup.style'
import { Actions } from 'react-native-router-flux'

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
            <Text style={signupStyle.text}>

              על מנת להזמין תור למחסן הציוד הזן את שמך:

            </Text>
          </View>

          <TextInput style={signupStyle.box} placeholder={"שם מלא"} onChangeText= { (text) => this.setState({text}) } value={this.state.text}/>

          <View style={signupStyle.inputContainer2}>
            <Button style={signupStyle.button} title='שלח' color="#151515"  onPress={() => Actions.queue({
							id: 0,
							fullName: 'Shaked Lokits'
            })}/>
          </View>
        </View>
      </View>
    )
  }
}
