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
 *     2018/4/23.
 */

import React, { Component,PureComponent } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  StatusBar,
  Dimensions,
  TextInput,
  AsyncStorage,
  BackHandler,
  Platform,
} from 'react-native';

import fetchPost from '../../Function/FetchPost'
import realm from '../../RealmLocalStore/RealmLocalStore'
import RedPigLoadingAnimation from '../AnimationComponent/RedPigLoadingAnimation'
import Toast from 'teaset/components/Toast/Toast';

var {height, width} = Dimensions.get('window');

export default class LandingPage extends Component{

  state={
    user:'',
    passWord:'',
    UserLandingState:false,
    PassWordHidden:false,
    modalVisible:false,
    serverParameters:'',
    GlobalToken:'',
    overlayViewState:false,
    GoToHomePageState:false,
  }

  TokenData=realm.objects('Token')
  UserInformationData=realm.objects('UserInformation')
  UserLandingStateData=realm.objects('UserLandingState')


  //将全局Token保存到本地
  _createTokenData(){
     realm.write(() => {
         realm.delete(this.TokenData);
     });
     realm.write(() => {
        realm.create('Token',
             {
                value: this.state.GlobalToken
             }
        );
    });
  }

  // 将用户信息保存到本地
  _createUserInformationData() {
      realm.write(() => {
          realm.delete(this.UserInformationData);
      });
      realm.write(() => {
          realm.create('UserInformation',
            {
                user:this.state.user,
                passWord:this.state.passWord,
                serverParameters:this.state.serverParameters
            }
          );
      });
  }

  //将用户登陆状态保存到本地
  _createUserLandingState(){
    realm.write(()=>{
        realm.delete(this.UserLandingStateData)
    })
    realm.write(() => {
        realm.create('UserLandingState',
          {
              state:true
          }
        );
    });
  }

  //删除所有数据
  removeAllData(){
    realm.write(()=>{
        realm.delete(this.TokenData);
        realm.delete(this.UserInformationData);
        realm.delete(this.UserLandingState);
    })
  }

  //将用户名和密码清除
  _removeUserPassWord=()=>{
    realm.write(()=>{
        realm.delete(this.UserInformationData);
    })
    realm.write(() => {
        realm.create('UserInformation',
          {
              user:'',
              passWord:'',
              serverParameters:this.state.serverParameters
          }
        );
    });
  }

  //检验用户网络是否畅通或者ip地址是否正确
  _judgeUserLandingState=()=>{
      fetchPost(`http://${this.state.serverParameters}/login`,
          {"uid": 'admin', "pwd": '123456'}
    ).then((res)=>{
            if(res.errcode==='00000'){
                Toast.show({
                  text: `Ip地址连接成功,网络连接正常`,
                  position: 'bottom',
                  duration: 2000,
                });
            }else{
                Toast.show({
                  text: `请检查你的Ip地址或者网络状况`,
                  position: 'bottom',
                  duration: 2000,
                });
            }
        }).catch(
          (err)=>{
            Toast.show({
              text: `似乎网络出现了问题,请稍后重试`,
              position: 'bottom',
              duration: 2000,
            });
          }
        )
  }

  //登录函数
  _fetchLanding=()=>{
      fetchPost(`http://${this.state.serverParameters}/login`,
          {"uid": this.state.user, "pwd": this.state.passWord}
      )
        .then((accessToken)=>{
            if(accessToken.errcode==='00000'){
                this.setState({
                    GlobalToken:accessToken.access_token
                },()=> {
                    this._createTokenData();
                    this._createUserInformationData();
                    this._createUserLandingState();
                    if(this.props.navigate){
                        this.props.navigate('HomePage')
                    }else{
                        this.props.navigation.navigate('HomePage')
                    }

                })
            }else if(accessToken.errcode==='00001'){
                Toast.show({
                  text: `错误的账号或者密码`,
                  position: 'center',
                  duration: 2000,
                });
            }else if(accessToken===undefined){
                Toast.show({
                  text: `请检查你的服务器设置是否正确`,
                  position: 'center',
                  duration: 2000,
                });
            }else{
                Toast.show({
                  text: `错误代码:${accessToken.errcode}`,
                  position: 'center',
                  duration: 2000,
                });
            }
        }).catch(
          (err)=>{
            Toast.show({
              text: `似乎网络出现了问题,请稍后重试`,
              position: 'bottom',
              duration: 2000,
            });
          }
        )
  }


  componentWillMount() {
      if(this.UserLandingStateData[0]===undefined){
        this.setState({
            user:'',
            passWord:'',
            serverParameters:'',
            GlobalToken:''
        })
      }else{
        this.setState({
            user:this.UserInformationData[0].user,
            passWord:this.UserInformationData[0].passWord,
            serverParameters:this.UserInformationData[0].serverParameters,
            GlobalToken:this.UserInformationData[0].GlobalToken
        })
      }
  }

  //监听安卓Back覆盖全局的监听安卓返回
  _onThisBackAndroid=()=>{
    return BackHandler.exitApp()
  }

   componentDidMount(){
      if (Platform.OS === 'android') {
        BackHandler.addEventListener('hardwareBackPress', this._onThisBackAndroid);
      }
  }




  render() {
    const {
        user,
        passWord,
        PassWordHidden,
    }=this.state;
    return (
      <View style={{flex:1}}>
          {
                this.UserLandingStateData[0]===true
            ?
                <RedPigLoadingAnimation/>
            :
                <TouchableOpacity
                    style={{flex:1}}
                    activeOpacity={1}
                    onPress={()=>this.setState({
                      overlayViewState:false,
                      serverParameters:this.state.serverParameters
                    })}
                >
                    <StatusBar
                        backgroundColor='rgba(0,0,0,0)'
                        translucent={true}
                    />
                    <Image
                        source={require('../../Img/LandingBackground.png')}
                        style={{
                            width:width,
                            height:height,
                            position:'absolute'
                        }}
                    />
                    <TouchableOpacity
                        activeOpacity={0.6}
                        style={{
                            position:'absolute',
                            right:0,
                            top:35,
                            width:40,
                            height:40
                        }}
                        onPress={()=>this.setState({
                          overlayViewState:!this.state.overlayViewState
                        })}
                    >
                        <Image
                            source={require('../../Icon/登陆页图标/SetUp.png')}
                            style={{
                                width:20,
                                height:20,
                            }}
                        />
                    </TouchableOpacity>
                      <View
                          style={{
                            alignItems:'center',
                            marginTop:180,
                          }}
                      >
                          <Text
                              style={{
                                fontSize:23,
                                color:'#FFF'
                              }}
                          >云运维</Text>
                      </View>
                      <View
                          style={{
                            marginLeft:45,
                            marginRight:45,
                            height:110,
                            marginTop:45,
                            justifyContent:'space-between'
                          }}
                      >
                          <View
                              style={{
                                height:50,
                                backgroundColor:'rgba(19,51,106,0.6)',
                                borderRadius:30,
                                flexDirection:'row',
                                alignItems:'center',
                                justifyContent:'space-between',
                                paddingLeft:25,
                                paddingRight:20,
                              }}
                          >
                            <TextInput
                                // autoFocus={true}
                                placeholder='请输入你的账号'
                                placeholderTextColor='#FFF'
                                style={{
                                    width:200,
                                    color:'#FFF',
                                    fontSize:16,
                                }}
                                onChangeText={(text) => this.setState({
                                    user:text
                                })}
                                defaultValue={user}
                                selectionColor='#FFF'
                                underlineColorAndroid='transparent'
                            />
                            <TouchableOpacity
                              activeOpacity={0.6}
                              onPress={()=>this.setState({
                                  user:''
                              })}
                            >
                                <Image
                                    source={require('../../Icon/登陆页图标/ShutDown.png')}
                                    style={{
                                        width:20,
                                        height:20
                                    }}
                                />
                            </TouchableOpacity>
                          </View>
                          <View
                              style={{
                                height:50,
                                backgroundColor:'rgba(19,51,106,0.6)',
                                borderRadius:30,
                                flexDirection:'row',
                                alignItems:'center',
                                justifyContent:'space-between',
                                paddingLeft:25,
                                paddingRight:20,
                              }}
                          >
                            <TextInput
                                maxLength={18}
                                placeholder='请输入你的密码'
                                placeholderTextColor='#FFF'
                                style={{
                                    width:200,
                                    color:'#FFF',
                                    fontSize:16,
                                }}
                                onChangeText={(text) => this.setState({
                                    passWord:text
                                })}
                                selectionColor='#FFF'
                                defaultValue={passWord}
                                underlineColorAndroid='transparent'
                                secureTextEntry={PassWordHidden?false:true}
                            />
                            <TouchableOpacity
                                activeOpacity={0.6}
                                onPress={()=>this.setState({
                                    PassWordHidden:!PassWordHidden
                                })}
                            >
                                {
                                    PassWordHidden
                                    ?
                                    <Image
                                        source={require('../../Icon/登陆页图标/Show.png')}
                                        style={{
                                            width:20,
                                            height:20
                                        }}
                                    />
                                    :
                                    <Image
                                        source={require('../../Icon/登陆页图标/Hidden.png')}
                                        style={{
                                            width:20,
                                            height:20
                                        }}
                                    />
                                }
                            </TouchableOpacity>
                          </View>
                      </View>
                      <TouchableOpacity
                          style={{
                            marginLeft:45,
                            marginRight:45,
                            backgroundColor:'rgba(48,135,239,0.8)',
                            height:50,
                            alignItems:'center',
                            justifyContent:'center',
                            borderRadius:25,
                            marginTop:25
                          }}
                          activeOpacity={0.8}
                          onPress={()=>{
                              this._fetchLanding()
                          }}
                      >
                          <Text
                              style={{
                                fontSize:18,
                                color:'#FFF'
                              }}
                          >登录</Text>
                      </TouchableOpacity>
                    {
                      this.state.overlayViewState
                      ?
                      <View
                          style={{
                              flex:1,
                              justifyContent:'center',
                              alignItems:'center',
                              position:'absolute',
                              top:'27%',
                              left:'7.5%'
                          }}
                      >
                          <View
                            style={{
                                width:305,
                                height:215,
                                borderRadius: 10,
                                borderColor:'#3087ef',
                                borderWidth:2,
                            }}
                          >
                              <View
                                  style={{
                                      alignItems:'center',
                                      justifyContent:'center',
                                      height:45,
                                      backgroundColor:'#3087ef',
                                      borderTopLeftRadius:7,
                                      borderTopRightRadius:7,
                                  }}
                              >
                                  <Text
                                      style={{
                                        color:'#FFF',
                                        fontSize:16,
                                      }}>服务器设置</Text>
                              </View>
                              <View
                                  style={{
                                    height:115,
                                    backgroundColor:'#1d4799'
                                  }}
                              >
                                  <View
                                      style={{
                                        marginLeft:15,
                                        marginRight:15,
                                        marginTop:15,
                                        marginBottom:15,
                                        justifyContent:'space-between',
                                        height:85
                                      }}
                                  >
                                      <Text
                                          style={{
                                            color:'#FFF',
                                            fontSize:16,
                                          }}
                                      >服务器参数</Text>
                                      <View
                                          style={{
                                            height:45,
                                            backgroundColor:'#133371'
                                          }}
                                      >
                                        <TextInput
                                            keyboardType='numeric'
                                            maxLength={30}
                                            placeholder='请输入服务器参数'
                                            placeholderTextColor='#6d88af'
                                            style={{
                                                width:200,
                                                color:'#FFF',
                                                fontSize:16,
                                            }}
                                            defaultValue={this.state.serverParameters}
                                            selectionColor='#FFF'
                                            onChangeText={(value)=>this.setState({
                                                serverParameters:value
                                            })}
                                            underlineColorAndroid='transparent'
                                        />
                                      </View>
                                  </View>
                              </View>
                              <View
                                  style={{
                                      flexDirection:'row',
                                  }}>
                                 <TouchableOpacity
                                     style={{
                                       borderColor:'#2b63a6',
                                       borderWidth:1,
                                       width:'50%',
                                       height:52,
                                       borderBottomLeftRadius:7,
                                       backgroundColor:'#1d4799',
                                       alignItems:'center',
                                       justifyContent:'center',
                                     }}
                                     activeOpacity={0.8}
                                     onPress={()=>{
                                        this.setState({
                                          overlayViewState:false,
                                          serverParameters:'',
                                        })
                                     }}
                                 >
                                     <Text
                                         style={{
                                            fontSize:16,
                                            color:'#FFF'
                                         }}
                                     >取消</Text>
                                 </TouchableOpacity>
                                 <TouchableOpacity
                                     style={{
                                       borderColor:'#2b63a6',
                                       borderWidth:1,
                                       width:'50%',
                                       height:52,
                                       borderBottomRightRadius:7,
                                       backgroundColor:'#1d4799',
                                       alignItems:'center',
                                       justifyContent:'center'
                                     }}
                                     activeOpacity={0.8}
                                     onPress={()=>{
                                        this.setState({
                                          overlayViewState:false
                                        },()=>{
                                          realm.write(()=>
                                            realm.delete(this.UserInformationData)
                                          )
                                          realm.write(() => {
                                              realm.create('UserInformation',
                                                {
                                                    user:this.state.user,
                                                    passWord:this.state.passWord,
                                                    serverParameters:this.state.serverParameters
                                                }
                                              );
                                          })
                                          this._judgeUserLandingState()
                                        })
                                     }}
                                 >
                                     <Text
                                         style={{
                                            fontSize:16,
                                            color:'#FFF'
                                         }}
                                     >确定</Text>
                                 </TouchableOpacity>
                              </View>
                          </View>
                      </View>

                      :
                      <View></View>
                    }
                </TouchableOpacity>
          }
      </View>
    )
  }
}


