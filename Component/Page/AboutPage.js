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
} from 'react-native';




export default class AboutPage extends PureComponent{

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
      </View>
    );
  }
}

const styles = StyleSheet.create({

});
