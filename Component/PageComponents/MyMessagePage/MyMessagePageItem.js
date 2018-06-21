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
} from 'react-native';



export default class MyMessagePageItem extends PureComponent{
  render() {
    const {
        title,
        state,
        time,
        object,
        content
    }=this.props;
    return (
      <TouchableOpacity
          style={{
            marginLeft:10,
            marginRight:10,
            borderRadius:2,
            backgroundColor:'#FFF',
            height:135,
            marginTop:10,
          }}
          activeOpacity={0.7}
      >
          <View
              style={{
                  marginLeft:20,
                  marginRight:20,
                  height:40,
                  borderBottomColor:'#e5e5e5',
                  borderBottomWidth:StyleSheet.hairlineWidth,
                  flexDirection:'row',
                  justifyContent:'space-between',
                  alignItems:'center'
              }}
          >
              <Text>{title}</Text>
              <Text>{state}</Text>
          </View>
          <View
              style={{
                marginLeft:20,
                marginRight:20,
                height:95,
                justifyContent:'space-around'
              }}
          >
              <View
                  style={{
                      flexDirection:'row'
                  }}
              >
                <Image
                    style={{
                        width:20,
                        height:20,
                    }}
                    source={require('../../../Icon/待我处理等列表图标/Time.png')}
                />
                <Text
                    style={{
                        marginLeft:5,
                    }}
                >{time}</Text>
              </View>
              <View
                  style={{
                      flexDirection:'row'
                  }}
              >
                <Image
                    style={{
                        width:20,
                        height:20,
                    }}
                    source={require('../../../Icon/待我处理等列表图标/Schedule.png')}
                />
                <Text
                    style={{
                        marginLeft:5,
                    }}
                >{object}</Text>
              </View>
              <View
                  style={{
                      flexDirection:'row'
                  }}
              >
                <Image
                    style={{
                        width:20,
                        height:20,
                    }}
                    source={require('../../../Icon/待我处理等列表图标/Content.png')}
                />
                <Text
                    style={{
                        marginLeft:5,
                    }}
                >{content}</Text>
              </View>
          </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({

});
