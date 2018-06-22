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
  StyleSheet,
  View,
  Image,
  StatusBar,
  AsyncStorage,
  ScrollView,
  Text,
  RefreshControl,
  Platform,
  BackHandler,
} from 'react-native';

import {observer} from 'mobx-react';

import HomePageHeader from '../PageComponents/HomePage/HomePageHeader'
import HomePageContent from '../PageComponents/HomePage/HomePageContent'
import HomePageGoToLandingPage from '../PageComponents/HomePage/HomePageGoToLandingPage'
import LandingPage from '../Page/LandingPage'
import Toast from 'teaset/components/Toast/Toast';
import fetchPost from '../../Function/FetchPost'
import realm from '../../RealmLocalStore/RealmLocalStore'
import NewGlobalStartImageState from '../../GlobalStore/GlobalStartImageState'




@observer
export default class HomePage extends Component{

  static navigationOptions = {
      tabBarLabel: '主页',
      tabBarIcon: ({tintColor, focused}) => {
        return(
            <View>
             {
                tintColor==='#129faa'
                ?
              <Image
                  source={require('../../Icon/底部导航栏图标/ClickHome.png')}
                  style={{
                    marginTop:10,
                    width:24,
                    height:24,
                  }}
              />
              :
              <Image
                  source={require('../../Icon/底部导航栏图标/NoClickHome.png')}
                  style={{
                    marginTop:10,
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
    isRefreshing:false
  }

  UserLandingStateData=realm.objects('UserLandingState')
  UserInformationData=realm.objects('UserInformation')
  TokenData=realm.objects('Token')

  //判断是否进入登录页
  _goToLandingPage=()=>{
    if(this.UserLandingStateData[0]===undefined){
        this.props.navigation.navigate('LandingPage')
    }else if(this.UserLandingStateData[0].state===false){
        this.props.navigation.navigate('LandingPage')
    }else{
        return
    }
  }



  componentWillMount() {
      this._goToLandingPage();
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


  //下滑事件
  _onRefresh=()=>{
    this.setState({
        isRefreshing:true
    },()=>{
        setTimeout(()=>{
            this.setState({
                isRefreshing:false
            })
        },1000)
    })
  }

  render() {
    const {navigate}=this.props.navigation;
    return (
      <ScrollView
        style={{flex:1}}
        refreshControl={
            <RefreshControl
                refreshing={this.state.isRefreshing}
                onRefresh={this._onRefresh}
                colors={['#fff']}
                progressBackgroundColor="#06204d"
            >

            </RefreshControl>
        }
      >
          <StatusBar
            backgroundColor='rgba(0,0,0,0)'
            translucent={true}
          />
          <HomePageHeader
             navigate={navigate}
             isRefreshing={this.state.isRefreshing}
          />
          <HomePageContent navigate={navigate}/>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({

});
