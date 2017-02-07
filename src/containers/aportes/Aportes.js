import React, { Component, PropTypes} from 'react';
import { TouchableHighlight, StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Aportes extends Component {

  render() {
    return (
      <View style={styles.contentContainer}>
        <View style={styles.textInputWrapper}>
          <TextInput
            style={styles.textInput}
            
            placeholder="Ingresa tu saldo bruto"
            placeholderTextColor ="white"
            clearButtonMode="while-editing"
            returnKeyType="search"
            maxLength={30}
            autoCorrect={false}
          />
        </View>  
      </View>
    );
  }
}


const styles = StyleSheet.create({
  contentContainer:{
    flexDirection: 'row',
    flex: 1,
    justifyContent:'center',
    marginTop: 65,
  },
  rowContainer: {
    flex:1,
    flexDirection: 'row',
    justifyContent:'space-around',

  },
    textInput:{
    height: 50,
    borderColor: '#33001a',
    borderWidth: 1,
    padding:10,
    color:'white',
    borderRadius:20,
    textAlign:'center',
    backgroundColor:'black',
    opacity:1
  },
  textInputWrapper:{
    flex:3,
    
    padding:5,
    shadowColor:'#b300b3',
    shadowOffset:{width:0,height:0},
    shadowRadius:2,
    shadowOpacity:.8,
    borderRadius:2,
    opacity:.7

  },
  text: {
    color:'black',
    fontSize:20,
    fontWeight:'800',
    fontFamily:'Arial',
    backgroundColor: 'transparent',
  },

});
