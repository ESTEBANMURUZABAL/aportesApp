'use strict';
import React, { Component } from 'react';
 import { StyleSheet,StatusBar,Text } from 'react-native';
 import { Router} from 'react-native-router-flux'
// import { loginUserByToken } from './actions/Auth/login';
// import { connect } from 'react-redux';
 import { scenes } from './Scenes';

// const reducerCreate = params=> {
//   const defaultReducer = Reducer(params);
//   return (state, action)=>{
//     return defaultReducer(state, action);
//   }
// };

export default class App extends Component {

  // constructor() {
  //   super();
  //   StatusBar.setBarStyle('light-content', true);
  // }

  // componentDidMount() {
  //   const {dispatch} = this.props;
  //   dispatch(loginUserByToken());
  // }

  render() {
    return (
     <Router scenes={scenes} />
    );
  }

}

// function mapStateToProps(state) {
//   return {};
// }


//export default connect(mapStateToProps)(App);
