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
    // In this case we are changing the state of the application by calling the action
    // change_user_name defined in the actions file in the actions folder.
    this.props.Actions.change_user_name(newUserName);
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

export default connect(mapStateToProps, mapDispatchToProps)(SettingContainer);
