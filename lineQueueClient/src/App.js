import React, {Component} from 'react'
import {StatusBar, View} from 'react-native'
import {Scene, Router} from 'react-native-router-flux';
import Signup from './components/Signup/Signup'
import Queue from './components/Queue/Queue'
import Confirmation from './components/Confirmation/Confirmation'

console.disableYellowBox = true

export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar backgroundColor="#151515" barStyle="light-content" />
        <Router>
          <Scene key="root" hideNavBar={true}>
            <Scene key="signup" component={Signup} title="Signup" type="replace"/>
            <Scene key="queue" component={Queue} title="Queue" type="replace"/>
            <Scene key="confirmation" component={Confirmation} title="Confirmation" type="replace"/>
          </Scene>
        </Router>
      </View>
    )
  }
}
