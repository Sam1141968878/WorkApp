/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 * Created by Administrator on 2018/5/16.
 */

import React, { Component,PureComponent } from 'react';
import {
  StyleSheet,
  View,
  StatusBar
} from 'react-native';


import LottieView from 'lottie-react-native';
export default class RedPigLoadingAnimation extends PureComponent{
  componentDidMount() {
    this.animation.play();
  }
  render() {
    return (
      <View
        style={{
          flex:1,
          justifyContent:'center',
          alignItems:'center'
        }}
      >
        <StatusBar
          backgroundColor='rgba(0,0,0,0)'
          translucent={true}
        />
        <LottieView
          ref={animation => {
            this.animation = animation;
          }}
          source={require('../../AnimationJson/RedPigLoading.json')}
          style={{width:300,height:300}}
          speed={this.props.speed||2}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({

});
