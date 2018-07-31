import React, {
  Component
} from 'react';
import App from './src/App'
import {
  AppRegistry
} from 'react-native';
import * as firebase from 'firebase';
import config from './config'
import PushNotification from 'react-native-push-notification'

// initialize firebase
const firebaseApp = firebase.initializeApp(config)

// initialize notification service
PushNotification.configure({
  onRegister: function(token) {
    console.debug('TOKEN:', token);
  },
  onNotification: function(notification) {
    console.debug('NOTIFICATION:', notification);
  },
  popInitialNotification: true,
  permissions: {
    alert: true,
    badge: true,
    sound: true
  },
})

AppRegistry.registerComponent('lineQueueClient', () => App);
