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
  TouchableOpacity,
  Image,
  StatusBar,
  AsyncStorage,
  BackHandler
} from 'react-native';

var Spinner = require('react-native-spinkit');
import {observer} from 'mobx-react';

import MyPageHeader from '../PageComponents/MyPage/MyPageHeader'
import MyPageContent from '../PageComponents/MyPage/MyPageContent'
import RedPigLoadingAnimation from '../AnimationComponent/RedPigLoadingAnimation'
import realm from '../../RealmLocalStore/RealmLocalStore'
import Toast from 'teaset/components/Toast/Toast';
import fetchPost from '../../Function/FetchPost'

@observer
export default class MyPage extends Component{

  static navigationOptions = {
      tabBarLabel: '个人中心',
      tabBarIcon: ({tintColor, focused}) => {
        return(
            <View>
             {
                tintColor==='#129faa'?
              <Image
                  source={require('../../Icon/底部导航栏图标/ClickMy.png')}
                  style={{
                    marginTop:6,
                    width:24,
                    height:24,
                  }}
              />
              :
              <Image
                  source={require('../../Icon/底部导航栏图标/NoClickMy.png')}
                  style={{
                    marginTop:6,
                    width:24,
                    height:24,
                  }}
              />
             }
         </View>
        )
      }
  };

  state={
    lazyLoading:true,
    user:'',
    serverParameters:'',
  }

  UserLandingState=realm.objects('UserLandingState')
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
              lazyLoading:false
          })
      },500)
      this.setState({
        user:this.UserInformationData[0].user,
        serverParameters:this.UserInformationData[0].serverParameters
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
    const {navigate}=this.props.navigation;
    return (
      <View style={{flex:1}}>
          {
            this.state.lazyLoading
            ?
                <RedPigLoadingAnimation/>
            :
                <View
                    style={{
                        flex:1,
                        backgroundColor:'#f5f5f9'
                    }}
                >
                      <StatusBar
                        backgroundColor='rgba(0,0,0,0)'
                        translucent={true}
                      />
                      <MyPageHeader
                        navigate={navigate}
                        user={this.state.user}
                        serverParameters={this.state.serverParameters}
                      />
                      <MyPageContent navigate={navigate}/>
                </View>
          }
      </View>
    );
  }
}

const styles = StyleSheet.create({

});
