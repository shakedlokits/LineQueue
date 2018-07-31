# LineQueue - Manager

Mobile manager for the line queue application 🏪🕵️‍

## Getting Started

In order to start the project, simply clone the repository, install the dependencies and initialize the `react-native` environment emulator
```shell
git clone https://github.com/shakedlokits/LineQueue.git && cd lineQueueManager
yarn
react-native run-<android|ios>
```

### Prerequisites

For this project to run you must have the `react-native` installed and configured, for more information see [ReactNative - Getting Started](https://facebook.github.io/react-native/docs/getting-started.html)

### Configuration

In order to build this project, place a `config.js` file in the root directory which resembles:
```javascript
const config = {
    apiKey: <API Key>,
    authDomain: <Authentication Domain>,
    databaseURL: <Database URL>,
    projectId: <Project ID>,
    storageBucket: <Storage Bucket ID>,
    messagingSenderId: <Message Sender ID>
}
export default config
```
which links this project to your **firebase** instance, before you build these applications. More details on further configuration can be found [Firebase Remote Config](https://firebase.google.com/docs/remote-config/use-config-rest).

## Running the tests

In order to run the tests, simply run
```shell
yarn test
```

> Note: Our tests make use of [Jest](https://facebook.github.io/jest/)

### Tests Structure

Each component is joined with a `\*.test.js` file which **at least** passes a smoke test on it's render function and **additionally** verifies custom functionality it performs(component life-cycle functions and methods)

For example, App.js holds the app entry point(surprisingly😏)
```
.
├── App.js
└── App.test.js
```
Thus App.test.js will hold a test suite for the entire file and sub-suite for the entry point
```javascript
import 'react-native'
import React from 'react';
import renderer from 'react-test-renderer';

import App from './App';
it('renders correctly', () => {
  const app = renderer.create(
    <App />
  );
});
```

## Building the project

In order to build the project for android/ios see [Generating Signed APK](https://facebook.github.io/react-native/docs/signed-apk-android.html)
