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

import PublicHeader from '../PublicComponents/PublicHeader'
import realm from '../../RealmLocalStore/RealmLocalStore'

let Width=Dimensions.get('window').width;

export default class AccountDetails extends PureComponent{

  state={
    user:'',
  }

  UserLandingState=realm.objects('UserLandingState')
  UserInformationData=realm.objects('UserInformation')

  //仅删除用户登陆状态
  _removeUserLandingState(){
    realm.write(()=>{
        realm.delete(this.UserLandingState);
    })
    realm.write(() => {
        realm.create('UserLandingState',
          {
              state:false,
          }
        );
    });
  }

  //清空缓存
  componentDidMount() {
      this.setState({
          user:this.UserInformationData[0].user
      })
  }




  render() {
    const {goBack}=this.props.navigation;
    return (
      <View
          style={{
            flex:1,
            backgroundColor:'#f5f5f9'
          }}>
          <PublicHeader
            type='third'
            Title='账号信息'
            goBack={()=>goBack()}
          />
          <View
              style={{
                backgroundColor:'#FFF'
              }}
          >
            <TouchableOpacity
                style={{
                  width:Width-15,
                  marginLeft:15,
                  height:65,
                  flexDirection:'row',
                  alignItems:'center',
                  borderBottomWidth:StyleSheet.hairlineWidth,
                  borderBottomColor:'#e0e0e0',
                  justifyContent:'space-between',
                }}
                activeOpacity={0.7}
            >
                <Text
                    style={{
                        color:'#000'
                    }}
                >头像</Text>
                <View
                  style={{
                      flexDirection:'row',
                      alignItems:'center'
                  }}
                >
                  <Image
                      source={require('../../Img/MyPageHeadPortrait.png')}
                      style={{
                          width:45,
                          height:45,
                          borderRadius:20,
                      }}
                  />
                  <Image
                      source={require('../../Icon/公用图标/ForwardWhite.png')}
                      style={{
                          marginRight:15,
                          width:20,
                          height:20,
                      }}
                  />
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                style={{
                  width:Width-15,
                  marginLeft:15,
                  height:50,
                  flexDirection:'row',
                  alignItems:'center',
                  borderBottomWidth:StyleSheet.hairlineWidth,
                  borderBottomColor:'#e0e0e0',
                  justifyContent:'space-between',
                }}
                activeOpacity={0.7}
            >
                <Text
                    style={{
                        color:'#000'
                    }}
                >用户名</Text>
                <View
                  style={{
                      flexDirection:'row',
                      alignItems:'center'
                  }}
                >
                  <Text
                      style={{
                        color:'#000'
                      }}
                  >{this.state.user}</Text>
                  <Image
                      source={require('../../Icon/公用图标/ForwardWhite.png')}
                      style={{
                          marginRight:15,
                          width:20,
                          height:20,
                      }}
                  />
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                style={{
                  width:Width-15,
                  marginLeft:15,
                  height:50,
                  flexDirection:'row',
                  alignItems:'center',
                  justifyContent:'space-between',
                }}
                activeOpacity={0.7}
            >
                <Text
                    style={{
                        color:'#000'
                    }}
                >性别</Text>
                <View
                  style={{
                      flexDirection:'row',
                      alignItems:'center'
                  }}
                >
                  <Text
                      style={{
                        color:'#000'
                      }}
                  >男</Text>
                  <Image
                      source={require('../../Icon/公用图标/ForwardWhite.png')}
                      style={{
                          marginRight:15,
                          width:20,
                          height:20,
                      }}
                  />
                </View>
            </TouchableOpacity>
            <View
                style={{
                    height:35,
                    width:Width,
                    backgroundColor:'#f5f5f9',
                    justifyContent:'center',
                    paddingLeft:15,
                }}
            >
                <Text
                    style={{
                        color:'#999999'
                    }}
                >绑定账号</Text>
            </View>
            <TouchableOpacity
                style={{
                  width:Width-15,
                  marginLeft:15,
                  height:50,
                  flexDirection:'row',
                  alignItems:'center',
                  justifyContent:'space-between',
                }}
                activeOpacity={0.7}
            >
                <Text
                    style={{
                        color:'#000'
                    }}
                >手机号码</Text>
                <View
                  style={{
                      flexDirection:'row',
                      alignItems:'center'
                  }}
                >
                  <Image
                      source={require('../../Icon/公用图标/ForwardWhite.png')}
                      style={{
                          marginRight:15,
                          width:20,
                          height:20,
                      }}
                  />
                </View>
            </TouchableOpacity>
            <View
                style={{
                    height:35,
                    width:Width,
                    backgroundColor:'#f5f5f9',
                    justifyContent:'center',
                    paddingLeft:15,
                }}
            >
                <Text
                    style={{
                        color:'#999999'
                    }}
                >安全设置</Text>
            </View>
            <TouchableOpacity
                style={{
                  width:Width-15,
                  marginLeft:15,
                  height:50,
                  flexDirection:'row',
                  alignItems:'center',
                  justifyContent:'space-between',
                }}
                activeOpacity={0.7}
            >
                <Text
                    style={{
                        color:'#000'
                    }}
                >登录密码</Text>
                <View
                  style={{
                      flexDirection:'row',
                      alignItems:'center'
                  }}
                >
                  <Text
                      style={{
                        color:'#000'
                      }}
                  >修改密码</Text>
                  <Image
                      source={require('../../Icon/公用图标/ForwardWhite.png')}
                      style={{
                          marginRight:15,
                          width:20,
                          height:20,
                      }}
                  />
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                style={{
                  width:Width-15,
                  marginLeft:15,
                  height:50,
                  flexDirection:'row',
                  alignItems:'center',
                  justifyContent:'center',
                  borderTopColor:'#f5f5f9',
                  borderTopWidth:1,
                }}
                activeOpacity={0.7}
                onPress={()=>{
                  this._removeUserLandingState();
                  this.props.navigation.navigate('LandingPage')
                }}
            >
                <Text
                    style={{
                        color:'#000'
                    }}
                >退出登录</Text>
            </TouchableOpacity>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});
