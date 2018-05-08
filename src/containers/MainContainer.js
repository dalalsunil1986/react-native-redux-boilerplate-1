import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ActionCreators from '../actions/actions';

import {Actions} from 'react-native-router-flux';

import MainForm from '../components/MainForm';

class MainContainer extends Component{
  constructor(props){
    super(props);

    this.handleButtonPressed = this.handleButtonPressed.bind(this);
  }

  render(){
    return(
      <MainForm
        userName      = {this.props.user.name}
        buttonPressed = {this.handleButtonPressed}
      />
    );
  }

  handleButtonPressed() {
    // This is one way to push the scene settings previously declared in the App.js
    // into the stack.
    Actions.settings();
  }
}

// This function links your class props to the state of the application (Store)
// in this case you now can access the Store user data using
// this.props.user.[property]
function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

// This function links your class props to the Actions of the application
// in this case you now can access the Actions user data using
// this.props.user.[Action Name]
function mapDispatchToProps(dispatch) {
  return {
    Actions: bindActionCreators(ActionCreators, dispatch),
  };
}

// Connects the class with the Store.
export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
