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
 *     2018/5/13.
 */

import React, { Component,PureComponent } from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  Dimensions
} from 'react-native';

import LottieView from 'lottie-react-native';

const {height, width} = Dimensions.get('window');
export default class PinballLoading extends PureComponent{
  componentDidMount() {
    this.animation.play();
  }
  render() {
    return (
      <View
          style={{
            flex:1,
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
          source={require('../../AnimationJson/PinballJson.json')}
          style={this.props.style}
          speed={1.5}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({

});
