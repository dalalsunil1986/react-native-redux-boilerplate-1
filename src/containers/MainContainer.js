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
    Actions.settings();
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    Actions: bindActionCreators(ActionCreators, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
