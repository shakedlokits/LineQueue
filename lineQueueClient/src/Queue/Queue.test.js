import 'react-native';
import React from 'react';
import Queue, { countPosition } from './Queue';
import * as firebase from 'firebase';
import config from '../../config'
import renderer from 'react-test-renderer';

const MOCK_WAITLIST = [
  {
    fullName: 'Shaked Lokits',
    id: 0
  }, {
    fullName: 'Ophir Sheriff',
    id: 1
  }
]

beforeAll(() => {
  firebase.initializeApp(config)
})

describe('Queue Screen', () => {

  describe('UI Testing', () => {
    it('renders correctly', () => {
      renderer.create(<Queue id={0} fullName={"Shaked Lokits"}/>)
    })
  })

  describe('Firebase Queue Integration', () => {
    it('should count position correctly', () => {
			expect(countPosition(MOCK_WAITLIST, 1)).toEqual(1)
			expect(countPosition(MOCK_WAITLIST, 0)).toEqual(0)
    })
  })
})
