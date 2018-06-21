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
 *     2018/6/10.
 */

import React, { Component,PureComponent } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  InteractionManager,
  TouchableOpacity,
  Image,
  Dimensions,
  ActivityIndicator
} from 'react-native';
import {StackNavigator,TabNavigator } from 'react-navigation';

import StartImagePage from './StartImagePage'
import LandingPage from './LandingPage'
import SuccessfulLandingPage from './SuccessfulLandingPage'

import realm from '../../RealmLocalStore/RealmLocalStore'




export default class FirstHomePage extends PureComponent{
  state={
    leaveTime:3,
    leaveSelect:false,
    goToFirstHomePage:false,
    landingPage:true,
  }


  UserLandingStateData=realm.objects('UserLandingState')

  //倒计时函数
  setGoToHomePage=setInterval(()=>this.setState({
    leaveTime:this.state.leaveTime-1
  },()=>{
    if(this.state.leaveTime<=0){
        setTimeout(()=>{
            this.setState({
                goToFirstHomePage:true
            })
        },50)

        clearInterval(this.setLeaveTime)
    }else{
       return
    }
  }),1000)

  componentDidMount() {
      this.setGoToHomePage;
      if(this.UserLandingStateData[0]===undefined){
        this.setState({
            landingPage:true
        })
      }else if(this.UserLandingStateData[0].state===false){
        this.setState({
            landingPage:true
        })
      }else{
        this.setState({
            landingPage:false
        })
      }
  }

  _goToFirstHomePageFn=()=>{
    this.setState({
        goToFirstHomePage:true
    })
  }

  _goToHomePageFn=()=>{
    this.setState({
        landingPage:false
    })
  }



  render() {
    return (
      <View
          style={{
            flex:1
          }}
      >
          {
            this.state.goToFirstHomePage
            ?
                <LandingPage
                    goToHomePageFn={()=>this._goToHomePageFn()}
                    navigate={this.props.navigation.navigate}
                />
            :
                <StartImagePage
                    goToFirstHomePageFn={()=>this._goToFirstHomePageFn()}
                />
          }
      </View>
    );
  }
}

const styles = StyleSheet.create({

});
