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



export default class WarningPageItem extends PureComponent{
  _stateColor(){
      if(this.props.state==='严重告警'){
          return(
              <View
                  style={{
                    width:15,
                    height:15,
                    backgroundColor:'#ff3154',
                    borderRadius:2,
                    marginLeft:5
                  }}/>
          )
      }  else if(this.props.state==='次要告警') {
          return(
              <View
                  style={{
                    width:15,
                    height:15,
                    backgroundColor:'#fcd947',
                    borderRadius:2,
                    marginLeft:5
                  }}/>
          )
      }else{
          return(
             <View
                  style={{
                    width:15,
                    height:15,
                    backgroundColor:'#ff8022',
                    borderRadius:2,
                    marginLeft:5
                  }}/>
          )
      }
  }
  render() {
    const {
        title,
        location,
        state,
        time,
        content,
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
                style={{
                    color:'#000'
                }}
            >{title}</Text>
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
                      flexDirection:'row',
                      alignItems:'center'
                  }}
              >
                <Image
                    style={{
                        width:20,
                        height:20,
                    }}
                    source={require('../../../Icon/待我处理等列表图标/Location.png')}
                />
                <Text
                    style={{
                        marginLeft:5,
                    }}
                >{location}</Text>
              </View>
              <View
                  style={{
                      flexDirection:'row',
                      alignItems:'center'
                  }}
              >
                <Image
                    style={{
                        width:20,
                        height:20,
                    }}
                    source={require('../../../Icon/待我处理等列表图标/Warning.png')}
                />
                {this._stateColor()}
                <Text
                    style={{
                        marginLeft:5,
                    }}
                >{state}</Text>
              </View>
              <View
                  style={{
                      flexDirection:'row',
                      alignItems:'center'
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
                    flexDirection:'row',
                    alignItems:'center'
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
                >{content}</Text>
              </View>
          </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({

});
