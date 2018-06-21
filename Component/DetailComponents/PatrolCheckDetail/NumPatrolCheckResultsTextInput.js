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
  TextInput
} from 'react-native';



export default class NumPatrolCheckResultsTextInput extends PureComponent{
  state={
    NumPatrolCheckResults:'',
    editorState:false,
    remarkText:''
  }




  render() {
    return (
      <View
          style={{
              width:180,
              height:40,
              marginLeft:10,
              borderColor:'#b2b2b2',
              borderWidth:1,
              flexDirection:'row'
          }}
      >
          <TouchableOpacity
              disabled={this.state.editorState}
              style={{
                  width:40,
                  height:40,
                  alignItems:'center',
                  justifyContent:'center',
                  borderRightColor:'#b2b2b2',
                  borderRightWidth:1,
              }}
              activeOpacity={0.6}
              onPress={
                  ()=> this.setState({
                      NumPatrolCheckResults:(this.state.NumPatrolCheckResults*10-0.1*10)/10
                  })}
          >
              <Text>-0.1</Text>
          </TouchableOpacity>
          <View
              style={{
                  alignItems:'center',
                  justifyContent:'center',
                  flex:1,
              }}
          >
              <TextInput
                  editable={!this.state.editorState}
                  style={{
                      color:'#000',
                      fontSize:16,
                      fontWeight:'700'
                  }}
                  value={`${this.state.NumPatrolCheckResults}`}
                  onChangeText={(value)=>this.setState({
                      NumPatrolCheckResults:value
                  })}
                  keyboardType='numeric'
              />
          </View>
          <TouchableOpacity
              disabled={this.state.editorState}
              style={{
                  width:40,
                  height:40,
                  alignItems:'center',
                  justifyContent:'center',
                  borderLeftColor:'#b2b2b2',
                  borderLeftWidth:1,
              }}
              activeOpacity={0.6}
              onPress={()=>this.setState({
                  NumPatrolCheckResults:(this.state.NumPatrolCheckResults*10+0.1*10)/10
              })}
          >
              <Text>+0.1</Text>
          </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});
