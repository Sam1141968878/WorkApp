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
  TouchableOpacity,
} from 'react-native';


import LottieView from 'lottie-react-native';
export default class SquareCheckAnimation extends PureComponent{
  state={
    select:false
  }
  render() {
    return (
        <TouchableOpacity
            style={{
                width:20,
                height:20,
                borderWidth:1.5,
                borderColor:'#71abff',
                borderRadius:3,
                backgroundColor:'#113068'
            }}
            onPress={()=>this.setState({
                select:!this.state.select
            },()=>{
                if(this.state.select===true){
                    this.animation.play()
                }else{
                    this.animation.reset()
                }
            })
            }
        >
            <LottieView
              ref={animation => {
                this.animation = animation;
              }}
              source={require('../../AnimationJson/CheckJson.json')}
              style={this.props.style}
              loop={false}
              speed={1.5}
            />
        </TouchableOpacity>

    );
  }
}

const styles = StyleSheet.create({

});
