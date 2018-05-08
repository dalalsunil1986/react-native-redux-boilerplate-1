/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 *
 * This is the react native sample code adapted to work with redux
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View

} from 'react-native';

import PropTypes from 'prop-types';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class MainForm extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {`Welcome ${this.props.userName}!`}
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
        <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.buttonPressed()}>
            <Text>Settings</Text>
          </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:              1,
    justifyContent:   'center',
    alignItems:       'center',
    backgroundColor:  '#F5FCFF',
  },
  button:{
    alignItems:       'center',
    justifyContent:   'center',
    backgroundColor:  '#3EFF8E',

    shadowColor:      '#000',
    shadowOffset:     { width: 0, height: 2 },
    shadowOpacity:    0.8,
    shadowRadius:     2,
    elevation:        1,
  },
  welcome: {
    fontSize:         20,
    textAlign:        'center',
    margin:           10,
  },
  instructions: {
    textAlign:        'center',
    color:            '#333333',
    marginBottom:     5,
  },
});

// Allows to specify the type of props that the Component would be expecting.
MainForm.propTypes = {
  userName:       PropTypes.string,
  buttonPressed:  PropTypes.func,
};

// Define default values for certain props in case no value is passed.
MainForm.defaultProps = {
  userName:       '',
};
