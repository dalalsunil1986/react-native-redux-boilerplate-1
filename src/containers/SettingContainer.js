import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ActionCreators from '../actions/actions';

import SettingForm from '../components/SettingForm';

class SettingContainer extends Component{
  constructor(props){
    super(props);

    this.handleButtonPressed = this.handleButtonPressed.bind(this);
  }

  render(){
    return(
      <SettingForm
        userName      = {this.props.user.name}
        buttonPressed = {this.handleButtonPressed}
      />
    );
  }

  handleButtonPressed(newUserName) {
    this.props.Actions.change_user_name(newUserName);
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

export default connect(mapStateToProps, mapDispatchToProps)(SettingContainer);
