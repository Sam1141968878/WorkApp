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
 *     2018/5/14.
 */

import React, { Component,PureComponent } from 'react';
import {
  StyleSheet,
} from 'react-native';

import LottieView from 'lottie-react-native';

export default class EditorAnimation extends PureComponent{
  state={
    editorState:true,
  }
  componentWillReceiveProps(nextProps) {
      this.setState({
        editorState:nextProps.EditorState
      },()=>{
        if(this.state.editorState===true){
            this.animation.play()
        }else{
            this.animation.reset()
        }
      })
  }
  render() {
    return (
        <LottieView
          ref={animation => {
            this.animation = animation;
          }}
          source={require('../../AnimationJson/EditorJson.json')}
          style={this.props.style}
          loop={false}
        />
    );
  }
}

const styles = StyleSheet.create({

});
