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
 *     2018/5/3.
 */

import React, { Component,PureComponent } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';

import PublicHeader from '../PublicComponents/PublicHeader'
import SearchInput from 'teaset/components/SearchInput/SearchInput';

export default class SearchWarningPage extends PureComponent{
  render() {
    return (
      <View
          style={{
            flex:1,
            backgroundColor:'#fff'
          }}
      >
        <View
            style={{
                height:70,
                width:'100%',
                backgroundColor:'#f5f5f9',
                borderBottomColor:'#e2e2e4',
                borderBottomWidth:1,
            }}>
            <View
                style={{
                  marginRight:'5%',
                  flexDirection:'row',
                  justifyContent:'space-between',
                  alignItems:'center',
                  marginTop:23,
                }}>
                <TouchableOpacity
                    style={{
                        width:60,
                        height:45,
                        justifyContent:'center',
                        paddingLeft:'4%',
                    }}
                >
                  <Image
                      style={{
                        width:25,
                        height:25,
                      }}
                      source={require('../../Icon/公用图标/BackBlue.png')}
                  />
                </TouchableOpacity>
                <SearchInput
                    style={{
                        width: 240,
                        marginLeft:-20,
                        height:35,
                        borderColor:'#efefef'
                    }}
                    placeholder='搜索告警'
                    iconSize={15}
                />
                <TouchableOpacity
                    onPress={this.props.function}
                >
                    <Text
                        style={{
                            fontSize:16,
                            color:'#3487ea'
                        }}
                    >取消</Text>
                </TouchableOpacity>
            </View>
        </View>
          <View
              style={{
                  alignItems:'center',
                  justifyContent:'center',
                  flex:1
              }}
          >
              <Text
                  style={{
                    color:'silver',
                    fontSize:16,
                  }}
              >搜索最新的告警信息</Text>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});
