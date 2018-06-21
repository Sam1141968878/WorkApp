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
 *     2018/5/15.
 */

import React, { Component,PureComponent } from 'react';
import {
  StyleSheet,
} from 'react-native';

import LottieView from 'lottie-react-native';
export default class FromSureAnimation extends PureComponent{
    componentDidMount() {
        this.animation.play()
    }
    componentWillReceiveProps(newProps) {
        if(newProps.Index===0){
            this.animation.play();
        }else{
            this.animation.reset();
        }
  }
  render() {
    return (
      <LottieView
        ref={animation => {
          this.animation = animation;
        }}
        source={require('../../AnimationJson/FromSure.json')}
        style={this.props.style}
        loop={false}
      />
    );
  }
}

const styles = StyleSheet.create({

});
