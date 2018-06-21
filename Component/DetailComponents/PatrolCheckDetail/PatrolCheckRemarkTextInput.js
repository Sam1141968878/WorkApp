/**
 * Sample
 * React
 * Native
 * App
 * https://github.com/facebook/react-native
 * @flow
 * Created
 *     by
 *     Administrator
 *     on
 *     2018/6/1.
 */

import React, { Component,PureComponent } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  InteractionManager,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';


export default class PatrolCheckRemarkTextInput extends PureComponent{
  state={
    remarkText:'',
    editorState:false,
  }


  render() {
    return (
      <View
          style={{
              marginTop:10,
              flexDirection:'row',
              alignItems:'center',
              marginBottom:10
          }}
      >
          <Text>备注:</Text>
          <TextInput
              style={{
                  width:250,
                  height:40,
                  marginLeft:10,
                  borderColor:'#e5e5e5',
                  borderWidth:1
              }}
              editable={this.props.editorState}
              underlineColorAndroid='transparent'
              value={this.state.remarkText}
              onChangeText={(value)=>this.setState({
                  remarkText:value
              })}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({

});
