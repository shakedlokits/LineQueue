import App from './src/App'
import { AppRegistry } from 'react-native';
import * as firebase from 'firebase';
import config from './config'

// initialize firebase
firebase.initializeApp(config)

AppRegistry.registerComponent('lineQueueManager', () => App);
