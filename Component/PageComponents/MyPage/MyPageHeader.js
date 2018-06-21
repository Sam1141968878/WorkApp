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
  Dimensions,
  AsyncStorage
} from 'react-native';


import LinearGradient from 'react-native-linear-gradient';

let Width=Dimensions.get('window').width;

export default class MyPageHeader extends PureComponent{

  render() {
    const {navigate}=this.props;
    return (
      <LinearGradient
          start={{x: 0.5, y: 0.0}} end={{x: 0.5, y: 1.0}}
          locations={[0.1,0.6,1]}
          colors={['#4297fe', '#4297fe', '#2f84eb']}
          style={{
            height:150,
            width:'100%',
          }}
      >
          <View
              style={{
                justifyContent:'center',
                flexDirection:'row',
                marginTop:30,
                alignItems:'center'
              }}
          >
              <Text
                  style={{
                    fontSize:18,
                    color:'#FFF'
                  }}
              >我的</Text>
              <TouchableOpacity
                  style={{
                    position:'absolute',
                    right:15
                  }}
              >
                <Image
                    style={{
                        width:20,
                        height:20
                    }}
                    source={require('../../../Icon/我的页图标/MyPageMoreWhite.png')}
                />
              </TouchableOpacity>
          </View>
          <Image
              source={require('../../../Img/MyPageHeadPortraitBackground.png')}
              style={{
                width:Width,
                height:80,
                position:'absolute',
                top:70
              }}
          />
          <View
              style={{
                  flexDirection:'row',
                  justifyContent:'space-between',
                  alignItems:'center',
                  paddingLeft:15,
                  paddingRight:15,
                  marginTop:25
              }}
          >
              <View
                  style={{
                    flexDirection:'row',
                    alignItems:'center',
                  }}
              >
                  <Image
                      source={require('../../../Img/MyPageHeadPortrait.png')}
                      style={{
                        width:60,
                        height:60,
                        borderRadius:30,
                        borderColor:'#93acdd',
                        borderWidth:5,
                      }}
                  />
                  <View
                      style={{
                        marginLeft:15
                      }}
                  >
                      <Text
                          style={{
                            color:'#FFF',
                            fontSize:15,
                            fontWeight:'900'
                          }}
                      >{this.props.user}</Text>
                      <Text
                          style={{
                              marginTop:5,
                              color:'#FFF'
                          }}
                      >{this.props.serverParameters}</Text>
                  </View>
              </View>

              <TouchableOpacity
                  style={{
                    width:50,
                    height:60,
                    marginRight:-15,
                    alignItems:'center',
                    justifyContent:'center'
                  }}
                  onPress={()=>navigate('AccountDetailsPage')}
              >
                  <Image
                    style={{
                      width:20,
                      height:20,
                    }}
                    source={require('../../../Icon/公用图标/ForwardWhite.png')}
                  />
              </TouchableOpacity>
          </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({

});
