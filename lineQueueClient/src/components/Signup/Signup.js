import React, {Component} from 'react'
import {Text, View, TextInput, Button} from 'react-native';
import Header from '../Header/Header'
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
      <View>

        <Header/>
        <View style={signupStyle.containerWhite}>
          <View style={signupStyle.containerWhite, {height: 50}}/>
          <Text style={signupStyle.text}>

            על מנת להזמין תור למחסן הציוד הזן את שמך:

          </Text>
          <TextInput style={signupStyle.box} placeholder={"שם מלא"} onChangeText= { (text) => this.setState({text}) } value={this.state.text}/>
          <View style={signupStyle.border}/>
          <Button style={signupStyle.button} title='send' color="#151515" onPress={() => Actions.queue({
							id: 0,
							fullName: 'Shaked Lokits'
						})}/>
        </View>
      </View>
    )
  }
}
