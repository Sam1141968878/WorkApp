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


export default class AwaitMeManagePageItem extends PureComponent{
  render() {
    const {
        title,
        state,
        content,
        type,
        startTime,
        endTime
    }=this.props
    return (
      <TouchableOpacity
          style={{
            marginLeft:10,
            marginRight:10,
            backgroundColor:'#FFF',
            height:170,
            borderRadius:3,
            marginBottom:10
          }}
          activeOpacity={0.7}
          onPress={()=>this.props.navigate('AwaitMeManageDetailPage',{
            sid:this.props.sid,
            Title:this.props.Title,
            status:this.props.state,
          })}
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
            <Text
                numberOfLines={1}
                style={{
                    color:'#000',
                    width:250,
                }}
            >{title}</Text>
            <Text
                style={{
                    color:'dodgerblue'
                }}
            >{state}</Text>
        </View>
        <View
              style={{
                marginLeft:20,
                marginRight:20,
                height:130,
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
                    source={require('../../../Icon/待我处理等列表图标/Content.png')}
                />
                <Text
                    style={{
                        marginLeft:5,
                    }}
                >{content}</Text>
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
                    source={require('../../../Icon/待我处理等列表图标/TypeGray.png')}
                />
                <Text
                    style={{
                        marginLeft:5,
                    }}
                >{type}</Text>
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
                    source={require('../../../Icon/待我处理等列表图标/Time.png')}
                />
                <Text
                    style={{
                        marginLeft:5,
                    }}
                >{startTime}</Text>
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
                >{endTime}</Text>
              </View>
          </View>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({

});
