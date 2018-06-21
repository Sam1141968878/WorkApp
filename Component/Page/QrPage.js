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
 *     2018/4/18.
 */

import React, { Component,PureComponent } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  StatusBar,
  BackHandler
} from 'react-native';


import PublicHeader from '../PublicComponents/PublicHeader'
import PublicTopTab from '../PublicComponents/PublicTopTab'
import Toast from 'teaset/components/Toast/Toast';
import fetchPost from '../../Function/FetchPost'
import QRPatrolCheckDetailPage from "../Detail/QRPatrolCheckDetailPage";
import {observable,action} from 'mobx';
import {observer} from 'mobx-react';
import NewGlobalStore from "../../GlobalStore/GlobalStore";
import RedPigLoadingAnimation from '../AnimationComponent/RedPigLoadingAnimation'
import realm from '../../RealmLocalStore/RealmLocalStore'
import QRCodeScanner from 'react-native-qrcode-scanner';


    //构造播放微信扫一扫音效的组件
    import Sound from 'react-native-sound';
       const s = new Sound('http://img.sc115.com/uploads1/sc/yx/742/88150832361.mp3',    null, (e) => {
                   if (e) {
                       return;
                   }
       });

@observer
export default class QrPage extends PureComponent{

  static navigationOptions = {
      tabBarLabel: '扫一扫',
      tabBarIcon: ({tintColor, focused}) => {
        return(
            <View>
             {
                tintColor==='#129faa'?
              <Image
                  source={require('../../Icon/底部导航栏图标/ClickQR.png')}
                  style={{
                    marginTop:5,
                    width:20,
                    height:20,
                  }}
              />
              :
              <Image
                  source={require('../../Icon/底部导航栏图标/NoClickQR.png')}
                  style={{
                    marginTop:5,
                    width:20,
                    height:20,
                  }}
              />
             }
         </View>
        )
      }
  };

  state={
    AccessToken:'',
    Inspection:'',
    inspectionPointFlag:'',
    QRNumber:0,
    lazyLoading:true,
  }

  TokenData=realm.objects('Token')
  UserInformationData=realm.objects('UserInformation')

  //进入组件生命周期诞生前先进行服务器连接测试的函数
  _TestNetworkSmoothFn=()=>{
    fetchPost(`http://${this.UserInformationData[0].serverParameters}/login`,
          {"uid": 'admin', "pwd": '123456'}
    ).then((res)=>{
        if(res.errcode==='00000'){
            return
        }else{
            Toast.show({
              text: `用户连接已断开`,
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

  componentDidMount() {
      this._TestNetworkSmoothFn()
      setTimeout(()=>{
          this.setState({
              lazyLoading:true
          })
      },600)

  }

  //扫描成功时的回调
  onSuccess(e) {
      fetchPost(`http://${this.UserInformationData[0].serverParameters}/inspection`,
        {
            "access_token":this.TokenData[0].value,
            "type":"inspection_point_mission_get",
            "data":{
                "inspection_point_flag":e.data
            }
        }
      )  .then((res)=>{
        if(res.errcode==='00000'){
            this.props.navigation.navigate('QRPatrolCheckDetailPage',{
                startTime:res.data.start_time,
                endTime:res.data.end_time,
                items:res.data.items,
                region:res.data.region,
                cid:res.data.cid,
                status:res.data.status,
                data:res.data,
                reactivateQr:this._reactivateQr,s,
            })
        }else if(res.errcode==='00001'){
            //如果错误代码是00001就跳转到首页并弹出相应悬浮层
            this.props.navigation.navigate('HomePage')
            setTimeout(()=>{
                Toast.show({
                  text: res.errmsg,
                  position: 'bottom',
                  duration: 10000,
                });
            },1000)
        }else{
            console.log('二维码扫描出错')
        }
      })
    }

  //监听安卓Back覆盖全局的监听安卓返回
  _onThisBackAndroid=()=>{
    return this.props.navigation.goBack()
  }

  componentWillMount() {
      if (Platform.OS === 'android') {
        BackHandler.addEventListener('hardwareBackPress', this._onThisBackAndroid);
      }
  }


  render() {
    return (
        <View
            style={{
                flex:1
            }}
        >
            {
                this.state.lazyLoading
                ?
                <View
                    style={{
                        flex:1,
                        alignItems:'center',
                        justifyContent:'center'
                    }}
                >
                    <StatusBar
                        backgroundColor='rgba(0,0,0,0)'
                        translucent={true}
                    />
                    <QRCodeScanner
                        fadeIn={false}
                        onRead={this.onSuccess.bind(this)}
                        cameraStyle={{
                            width:250,
                            height:250,
                        }}
                        containerStyle={{
                            backgroundColor:'#0d0e09',
                            justifyContent:'center',
                            alignItems:'center'
                        }}
                        customMarker={
                            <View
                                style={{
                                    width:250,
                                    height:250,
                                    borderColor:'#686964',
                                    borderWidth:1,
                                }}
                            >
                                <View
                                    style={{
                                        position:'absolute',
                                        top:0,
                                        left:0
                                    }}
                                >
                                    <View
                                        style={{
                                            width:20,
                                            height:4,
                                            backgroundColor:'#69e200'
                                        }}
                                    ></View>
                                    <View
                                        style={{
                                            width:4,
                                            height:20,
                                            backgroundColor:'#69e200'
                                        }}
                                    ></View>
                                </View>
                                <View
                                    style={{
                                        position:'absolute',
                                        top:0,
                                        right:0
                                    }}
                                >
                                    <View
                                        style={{
                                            width:20,
                                            height:4,
                                            backgroundColor:'#69e200',
                                        }}
                                    ></View>
                                    <View
                                        style={{
                                            width:4,
                                            height:20,
                                            backgroundColor:'#69e200',
                                            marginLeft:16,
                                        }}
                                    ></View>
                                </View>
                                <View
                                    style={{
                                        position:'absolute',
                                        bottom:0,
                                        left:0
                                    }}
                                >
                                    <View
                                        style={{
                                            width:4,
                                            height:20,
                                            backgroundColor:'#69e200',
                                        }}
                                    ></View>
                                    <View
                                        style={{
                                            width:20,
                                            height:4,
                                            backgroundColor:'#69e200',
                                        }}
                                    ></View>
                                </View>
                                <View
                                    style={{
                                        position:'absolute',
                                        bottom:0,
                                        right:0,
                                    }}
                                >
                                    <View
                                        style={{
                                            width:4,
                                            height:20,
                                            backgroundColor:'#69e200',
                                            marginLeft:16,
                                        }}
                                    ></View>
                                    <View
                                        style={{
                                            width:20,
                                            height:4,
                                            backgroundColor:'#69e200',
                                        }}
                                    ></View>
                                </View>
                            </View>
                        }
                        showMarker={true}
                    />
                </View>
                :
                    <RedPigLoadingAnimation/>
            }

        </View>
    );
  }
}

const styles = StyleSheet.create({

});
