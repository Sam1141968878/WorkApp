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
 *     2018/4/26.
 */

import React, { Component,PureComponent } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  BackHandler,
  Platform
} from 'react-native';




export default class AboutPage extends PureComponent{

  //监听安卓Back覆盖全局的监听安卓返回
  _onThisBackAndroid=()=>{
    return this.props.navigation.goBack()
  }

  componentWillMount() {
      if (Platform.OS === 'android') {
        BackHandler.addEventListener('hardwareBackPress', this._onThisBackAndroid);
      }
  }

  render() {
    return (
      <View
          style={{
              alignItems:'center',
              justifyContent:'center'
          }}
      >
          <Image
              source={require('../../Icon/公用图标/DevelopmentImg.png')}
              style={{
                  width:200,
                  height:200,
                  marginTop:200,
              }}
          />
          <Text>此功能正在加急开发中,请稍等</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});
