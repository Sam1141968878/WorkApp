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
  Platform,
  StyleSheet,
  View,
  StatusBar,
  BackHandler,
} from 'react-native';

import PublicHeader from '../PublicComponents/PublicHeader'
import PublicTopTab from '../PublicComponents/PublicTopTab'
import AwaitMeManageOnePage from '../PageComponents/AwaitMeManagePage/AwaitMeManageOnePage'
import AwaitMeManageTwoPage from '../PageComponents/AwaitMeManagePage/AwaitMeManageTwoPage'
import AwaitMeManageThirdPage from '../PageComponents/AwaitMeManagePage/AwaitMeManageThirdPage'
import AwaitMeManageFourPage from '../PageComponents/AwaitMeManagePage/AwaitMeManageFourPage'
import {observer} from 'mobx-react';
import fetchPost from '../../Function/FetchPost'
import Toast from 'teaset/components/Toast/Toast';
import NewGlobalStore from "../../GlobalStore/GlobalStore";
import RedPigLoadingAnimation from '../AnimationComponent/RedPigLoadingAnimation'
import realm from '../../RealmLocalStore/RealmLocalStore'



@observer
export default class AwaitMeManagePage extends PureComponent{

  state={
    lazyLoading:true
  }

  PublicTopTabProps={
      OneTitle:'全部',
      TwoTitle:'待处理',
      ThirdTitle:'已完成',
      OnePage:
      <AwaitMeManageOnePage
        serverParameters={this.props.navigation.state.params.serverParameters}
        TokenData={this.props.navigation.state.params.TokenData}
        navigate={this.props.navigation.navigate}
      />,
      TwoPage:
      <AwaitMeManageTwoPage
        serverParameters={this.props.navigation.state.params.serverParameters}
        TokenData={this.props.navigation.state.params.TokenData}
        navigate={this.props.navigation.navigate}
      />,
      ThirdPage:
      <AwaitMeManageThirdPage
        serverParameters={this.props.navigation.state.params.serverParameters}
        TokenData={this.props.navigation.state.params.TokenData}
        navigate={this.props.navigation.navigate}
      />,
      Type:3,
  }

  UserLandingStateData=realm.objects('UserLandingState')
  UserInformationData=realm.objects('UserInformation')
  TokenData=realm.objects('Token')


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
      this.props.navigation.state.params.GetTotalNum;
      setTimeout(()=>{
          this.setState({
              lazyLoading:false
          })
      },600)
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
    const {goBack}=this.props.navigation;
    return (
      <View
          style={{
            flex:1
          }}
      >
          {
            this.state.lazyLoading
            ?
                <RedPigLoadingAnimation
                    speed={2.5}
                />
            :
                <View
                    style={{
                        flex:1
                    }}
                >
                    <StatusBar
                      backgroundColor='rgba(0,0,0,0)'
                      translucent={true}
                    />
                    <PublicHeader
                      type='third'
                      Title='待我处理'
                      goBack={()=>goBack()}
                    />
                    <PublicTopTab
                        {...this.PublicTopTabProps}
                    />
                </View>
          }
      </View>
    );
  }
}

const styles = StyleSheet.create({

});
