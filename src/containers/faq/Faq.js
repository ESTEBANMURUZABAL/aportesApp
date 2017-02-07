import React, { Component } from 'react';
import { TouchableHighlight, StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Panel from './../../components/Panel';
export default class Faq extends Component {

  render() {
    return (
       <ScrollView style={styles.contentContainer}>
        <Panel title="A Panel with short content text">
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
        </Panel>
        <Panel title="A Panel with long content text">
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
        </Panel>
        <Panel title="Another Panel">
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</Text>
        </Panel>
      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
  contentContainer:{
    flex            : 1,
    backgroundColor : '#f4f7f9',
    paddingTop      : 65
  },
  rowContainer: {
    flex:1,
    flexDirection: 'row',
    justifyContent:'space-around',

  },
  menuItem: {
     width:150,
    height:150,
    borderRadius:75,
    backgroundColor:'white',
    opacity: 0.7,
    alignItems:'center',
    overflow:'hidden',
    justifyContent:'center'

  },
  thumbnail: {
    width: 80,
    height: 80,
  },
  text: {
    color:'black',
    fontSize:20,
    fontWeight:'800',
    fontFamily:'Arial',
    backgroundColor: 'transparent',
  },

});
