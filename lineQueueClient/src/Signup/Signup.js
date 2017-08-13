import React, {Component} from 'react'
import {Text, View, TextInput, StyleSheet, Image, Button} from 'react-native';

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
        <View style={styles.containerBlack}>
          <View style={{height: 20}} />
          <Image style={styles.logo} source={require('../images/BezalelLogo.png')}></Image>
          <View style={{height: 20}} />

          <Text style={styles.title}>מערכת</Text>
          <Text style={styles.title}>הזמנת תורים</Text>
          <Text style={styles.title}>מחסן מרכזי</Text>

          <View style={{height: 30}} />
        </View>
        <View style={styles.containerWhite}>
          <View style={styles.containerWhite, {height: 50}} />
          <Text style={styles.text}>

            על מנת להזמין תור למחסן הציוד הזן את שמך:

          </Text>
          <TextInput style={styles.box} placeholder={"שם מלא"} onChangeText= { (text) => this.setState({text}) } value={this.state.text}/>
          <View style={styles.border} />
          <Button style={styles.button} title='send' color="#151515"
          accessibilityLabel="Learn more about this purple button" />
        </View>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  logo: {
    width: 103,
    height: 50,
    paddingRight: 18,
    paddingTop: 18,
    justifyContent: 'center',
    left: 250
  },
  containerBlack: {
    backgroundColor: '#151515'
  },
  containerWhite: {
    flex: 1,
    backgroundColor: 'white'
  },
  title: {
    fontSize: 40,
    textAlign: 'right',
    color: 'white',
    paddingRight: 30
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    color: '#151515'
  },
  box: {
    height: 58,
    width: 264,
    borderColor: '#404040',
    borderWidth: 1,
  },
  border: {
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#151515',
  },
  button: {
    borderWidth: 1,
    color: '#151515'
}
})
