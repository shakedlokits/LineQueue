import 'react-native';
import React from 'react';
import Signup from './Signup';
import * as firebase from 'firebase';
import config from '../../../config'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

beforeAll(() => {
  firebase.initializeApp(config)
})
describe('Signup Test', () => {
  describe('UI Testing', () => {
    it('renders correctly', () => {
      renderer.create(<Signup/>)
    })
  })
})
