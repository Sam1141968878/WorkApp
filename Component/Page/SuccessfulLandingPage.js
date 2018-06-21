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
 *     2018/6/10.
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
  ActivityIndicator,
  StatusBar
} from 'react-native';


export default class SuccessfulLandingPage extends PureComponent{
  componentDidMount() {
      this.props.navigate('HomePage')
  }
  render() {
    return (
      <View
          style={{
            flex:1,
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:'gray'
          }}
      >
          <StatusBar
            backgroundColor='rgba(0,0,0,0)'
            translucent={true}
          />
          <TouchableOpacity
              onPress={
              ()=>this.props.navigate('HomePage')
              }
              style={{
                width:120,
                height:50,
                backgroundColor:'#000',
                borderRadius:5,
                alignItems:'center',
                justifyContent:'center'
              }}
          >
              <Text
                  style={{
                    color:'#fff',
                  }}
              >点击我返回首页</Text>
          </TouchableOpacity>
          <Text
              style={{
                color:'#fff',
                marginTop:20
              }}
          >再次点击返回退出云联App</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});
