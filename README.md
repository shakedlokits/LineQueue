# LineQueue

Looking for a simple service queue management application with a dedicated mobile app? LineQueue is an open-source queue management for service counters! 🏪📱🕵️‍
[![Build Status](https://travis-ci.org/shakedlokits/LineQueue.svg?branch=master)](https://travis-ci.org/shakedlokits/LineQueue)

## Project structure

This application is composed of two self-contained applications with a [Firebase](https://firebase.google.com/) integration.
* **[Client](./lineQueueClient)📱** - User client, enables the user to draw a line number by simply inputting it's name. Providing the user to view it's number and how many people are waiting ahead of them.
* **[Manager](./lineQueueManager)🕵️** - Manager client, enable to advance the queue and view waitlist information‍.

## Built With

* [ReactNative](https://facebook.github.io/react-native) - Web/Native application framework
* [Jest](https://facebook.github.io/jest/) - Testing Framework
* [Firebase](https://firebase.google.com/)

## Contributing

Please read [./CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning.

## Authors

* **Shaked Lokits** - *Initial work* - [shakedlokits](https://github.com/shakedlokits)
* **Ophir Sheriff** - *Initial front-end** - [OphirSheriff](https://github.com/OphirSheriff)

## License

This project is licensed under the GPL v3 - see the [./LICENSE.md](LICENSE.md) file for details
