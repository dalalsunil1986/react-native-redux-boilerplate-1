import React, {Component} from 'react';

import MainContainer from '../containers/MainContainer';

/** Defines the general layout of the Main scene*/
class MainScene extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <MainContainer />
    )
  }
}

export default MainScene;
