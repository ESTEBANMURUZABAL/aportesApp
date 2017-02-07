import React, { Component, PropTypes} from 'react';
import { TouchableHighlight, StyleSheet, Text, View, Image, ListView } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Planes extends Component {
 constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
      ])
    };
  }

  _renderRow(data) {
    return (
      <TouchableHighlight onPress={() => Actions.faq() } underlayColor="transparent">
        <View>  
          <Text> {data}</Text>
        </View>
      </TouchableHighlight>
    )
  } 

  render() {
    return (
      <View style={{flex: 1, paddingTop: 70}}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => this._renderRow(rowData)}
          renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  
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
    fontSize:10,
    fontWeight:'800',
    fontFamily:'Arial',
    backgroundColor: 'transparent',
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  },

});
