import React, { Component } from 'react';
import App from './src/App'
import { AppRegistry } from 'react-native';
import * as firebase from 'firebase';
import config from './config'

// initialize firebase
const firebaseApp = firebase.initializeApp(config)

AppRegistry.registerComponent('warehouseClient', () => App);
