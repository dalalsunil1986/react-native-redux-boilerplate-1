/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {
  Scene,
  Router,
  Actions,
  Reducer,
  ActionConst,
  Overlay,
  Tabs,
  Modal,
  Drawer,
  Stack,
  Lightbox,
} from 'react-native-router-flux';

import configureStore from './src/store/store'
import { Provider } from 'react-redux';
const store = configureStore({});

// scenes being used in the app
import MainScene      from './src/scenes/MainScene';
import SettingScene  from './src/scenes/SettingScene';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Stack key='root'>
            <Scene key='main' initial={true} component={MainScene} title='Main'/>
            <Scene key='settings'  component={SettingScene}  title='Setting'/>
          </Stack>
      </Router>
    </Provider>
    );
  }
}




// render() {
//
//   return (
//     <View style={styles.container}>
//       <Text style={styles.welcome}>
//         Welcome to React Native!
//       </Text>
//       <Text style={styles.instructions}>
//         To get started, edit App.js
//       </Text>
//       <Text style={styles.instructions}>
//         {instructions}
//       </Text>
//     </View>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
