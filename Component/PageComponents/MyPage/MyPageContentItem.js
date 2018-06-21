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
  TouchableOpacity,
  Image,
  Dimensions
} from 'react-native';


let Width=Dimensions.get('window').width;
export default class MyPageContentItem extends PureComponent{
  render() {
    const {url,title,onPress}=this.props;
    return (
      <TouchableOpacity
          style={{
            height:50,
            flexDirection:'row',
            alignItems:'center',
            marginLeft:15,
            width:Width-15,
            borderBottomColor:'#e0e0e0',
            borderBottomWidth:StyleSheet.hairlineWidth,
            justifyContent:'space-between'
          }}
          activeOpacity={0.6}
          onPress={onPress}
      >
        <View style={{flexDirection:'row'}}>
            <Image
                source={url}
                style={{
                    width:20,
                    height:20
                }}
            />
            <Text
                style={{
                    marginLeft:10,
                }}
            >{title}</Text>
        </View>

        <View
            style={{
                marginRight:15
            }}
        >
            <Image
                style={{
                  width:20,
                  height:20,
                }}
                source={require('../../../Icon/公用图标/ForwardWhite.png')}
            />
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({

});
