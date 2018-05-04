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
  TouchableOpacity,
  TextInput,
  Image,
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
export default class SettingForm extends Component<Props> {
  constructor(props){
    super(props)

    this.state = {
      text: "",
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Image
            style       ={styles.image}
            resizeMode  ="contain"
            source      ={require('../assets/icons/happy-icon.png')}>
          </Image>
        <Text style={styles.welcome}>
          {`Hey ${this.props.userName}!`}
        </Text>
        <Text style={styles.instructions}>
          Want to try a new name?
        </Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.buttonPressed(this.state.text)}>
            <Text>Change Name</Text>
          </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  textInput: {
    height: 20,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
  },
  image: {
    height:             40,
    width:              40,
  },
  button:{
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3EFF8E',

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
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

SettingForm.propTypes = {
  userName:       PropTypes.string,
  buttonPressed:  PropTypes.func,
};
SettingForm.defaultProps = {
  userName:       '',
};
