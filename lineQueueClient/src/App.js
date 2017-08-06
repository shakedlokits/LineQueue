import React, { Component } from 'react'
import { Scene, Router } from 'react-native-router-flux';
import Signup from './Signup/Signup'
import Queue from './Queue/Queue'
import Confirmation from './Confirmation/Confirmation'

export default class App extends Component {
  render() {
    return <Router>
      <Scene key="root">
        <Scene key="signup" component={Signup} title="Signup"/>
        <Scene key="queue" component={Queue} title="Queue"/>
        <Scene key="confirmation" component={Confirmation} title="Confirmation"/>
      </Scene>
    </Router>
  }
}
