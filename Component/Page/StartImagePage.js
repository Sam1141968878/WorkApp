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
 *     2018/5/18.
 */

import React, { Component,PureComponent } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  Image,
  Dimensions,
} from 'react-native';

import realm from '../../RealmLocalStore/RealmLocalStore'
import LeaveCrackAnimation from '../AnimationComponent/TwoWayForwardAnimation'
const {height, width} = Dimensions.get('window');


export default class StartImagePage extends PureComponent{
  state={
    leaveTime:3,
    leaveSelect:false,
  }

  GuideImageState=realm.objects('GuideImageState')

  //倒计时函数
  setLeaveTime=setInterval(()=>this.setState({
    leaveTime:this.state.leaveTime-1
  },()=>{
    if(this.state.leaveTime<=0){
        clearInterval(this.setLeaveTime)
        this.props.navigation.navigate('HomePage')
    }else{
       return
    }
  }),1000)

  //跳过函数
  _goToFirstHomePageFn=()=>{
    clearInterval(this.setLeaveTime)
    this.props.navigation.navigate('HomePage')
  }

  componentDidMount() {
      this.setLeaveTime;
  }

  render() {
    return (
      <View
          style={{
              flex:1,
              justifyContent:'center',
              alignItems:'center'
          }}
      >
          <StatusBar
              backgroundColor='rgba(0,0,0,0)'
              translucent={true}
          />
          <Image
              source={require('../../gif/startImageGif.gif')}
              style={{
                width:width,
                height:height
              }}
          />
          <TouchableOpacity
              onPress={this._goToFirstHomePageFn}
              style={{
                  width:80,
                  height:40,
                  justifyContent:'center',
                  alignItems:'center',
                  borderColor:'#000',
                  borderWidth:1,
                  borderRadius:10,
                  flexDirection:'row',
                  position:'absolute',
                  right:20,
                  top:40
              }}
              activeOpacity={0.5}
          >
              <Text style={{fontSize:16}}>{this.state.leaveTime}</Text>
              <Text style={{color:'#000'}}>跳过</Text>
              <LeaveCrackAnimation
                  style={{
                      width:40,
                      height:40
                  }}
                  select={this.state.leaveSelect}
              />
          </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});
