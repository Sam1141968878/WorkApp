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
 *     2018/5/22.
 */

import React, { Component,PureComponent } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  InteractionManager,
  TouchableOpacity,
  Image,
} from 'react-native';



export default class ShiftWorkPageitem extends PureComponent{
  render() {
    const {
        sid,
        per_name,
        begin_time_1,
        end_time_1,
        color
    }=this.props;
    return (
      <View
          style={{
            marginLeft:10,
            marginRight:10,
            height:50,
            backgroundColor:'#f4f4f8',
            marginTop:5,
          }}
      >
          <View
              style={{
                  marginLeft:5,
                  marginRight:5,
                  marginTop:5,
                  marginBottom:5,
                  flexDirection:'row',
                  alignItems:'center',
                  backgroundColor:color,
                  borderRadius:2,
                  height:40,
              }}
          >
              <View
                  style={{
                    width:30,
                    height:30,
                    borderRadius:2,
                    backgroundColor:'#fff',
                    marginLeft:5,
                    alignItems:'center',
                    justifyContent:'center'
                  }}
              >
                  <Text>{sid}</Text>
              </View>
              <Text
                  numberOfLines={1}
                  style={{
                    color:'#fff',
                    fontSize:14,
                    marginLeft:10,
                    width:70,
                  }}
              >{per_name}</Text>
              <Text
                  style={{
                    color:'#fff',
                    fontSize:12,
                    marginLeft:10,
                  }}
              >{begin_time_1}-</Text>
              <Text
                  style={{
                    color:'#fff',
                    fontSize:12,
                    marginLeft:0,
                  }}
              >{end_time_1}</Text>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});
