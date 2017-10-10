import 'react-native';
import React from 'react';
import App from './App';
import * as firebase from 'firebase';
import config from '../config'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

beforeAll(() => {
  firebase.initializeApp(config)
})

it('renders correctly', () => {
  renderer.create(
    <App />
  );
});
