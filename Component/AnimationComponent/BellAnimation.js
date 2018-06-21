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
} from 'react-native';

import LottieView from 'lottie-react-native';
export default class BellAnimation extends PureComponent{
  componentDidMount() {
    this.animation.play();
  }
  render() {
    return (
        <LottieView
          ref={animation => {
            this.animation = animation;
          }}
          source={require('../../AnimationJson/BellJson.json')}
          style={this.props.style}
        />
    );
  }
}

const styles = StyleSheet.create({

});
