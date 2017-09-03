import React, { Component } from 'react'
import { Scene, Router } from 'react-native-router-flux';
import Signup from './components/Signup/Signup'
import Queue from './components/Queue/Queue'
import Confirmation from './components/Confirmation/Confirmation'

export default class App extends Component {
  render() {
    return <Router>
      <Scene key="root" hideNavBar={true}>
        <Scene key="signup" component={Signup} title="Signup" type="replace"/>
				<Scene key="queue" component={Queue} title="Queue" type="replace"/>
        <Scene key="confirmation" component={Confirmation} title="Confirmation" type="replace"/>
      </Scene>
    </Router>
  }
}
