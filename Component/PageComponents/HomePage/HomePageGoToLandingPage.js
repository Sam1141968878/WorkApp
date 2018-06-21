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
 *     2018/5/2.
 */

import React, { Component,PureComponent } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {observable,action} from 'mobx';
import {observer} from 'mobx-react';

export default class HomePageGoToLandingPage extends PureComponent{
  componentDidMount() {
     this.props.navigate('LandingPage')
  }
  render() {
    return (
      <View style={{flex:1}}>
          <Text>正在跳转到登陆页</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});
