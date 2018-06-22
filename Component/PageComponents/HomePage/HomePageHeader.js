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
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import BellAnimation from '../../AnimationComponent/BellAnimation'
import fetchPost from '../../../Function/FetchPost'
import realm from '../../../RealmLocalStore/RealmLocalStore'
import LinearGradient from 'react-native-linear-gradient';


export default class HomePageHeader extends PureComponent{
  state={
    totalNum:'',
    serverParameters:'',
    TokenDataValue:'',
    isRefreshing:false
  }

  UserInformationData=realm.objects('UserInformation')
  TokenData=realm.objects('Token')

  //获取待我处理的数量
  _GetTotalNum=()=>{
    fetchPost(`http://${this.state.serverParameters}/workflow`,{
      	"access_token": this.state.TokenDataValue,
      	"type": "todolist_getcount",
      	"data": {
      		"status": "",
      		"model": ""
      	}
      }).then((res)=>
        this.setState({
            totalNum:res.data.total
        })
      )
  }

  _setState=()=>{
    if(this.UserInformationData[0]===undefined||this.TokenData[0]===undefined){
        return
    }else {
        this.setState({
            serverParameters:this.UserInformationData[0].serverParameters,
            TokenDataValue:this.TokenData[0].value
        },()=>{
            this._GetTotalNum()
        })
    }
  }

  componentWillMount() {
     this._setState()
  }

  componentWillReceiveProps(newProps) {
      this.setState({
        isRefreshing:newProps.isRefreshing
      })

      if(this.state.isRefreshing===true){
        this._setState()
      }else{
        return
      }
  }

  render() {
    const {navigate}=this.props;
    return (
      <LinearGradient
          start={{x: 0.25, y: 0.75}} end={{x: 1.0, y: 0.0}}
          locations={[0.2,0.65,1]}
          colors={['#003278', '#052e6b', '#022762']}
          style={{
            width:'100%',
            height:140,
            elevation:-1
          }}>
          <Text
              style={{
                color:'#fefefe',
                fontSize:16,
                marginLeft:'45%',
                marginTop:25,
                position:'absolute'
              }}>首页</Text>
          <BellAnimation
              style={{
                width:200,
                height:200,
                position:'absolute',
                top:-63,
                right:-70
              }}
          />
          <TouchableOpacity
              style={{
                width:50,
                height:60,
                position:'absolute',
                right:0,
                top:22,
              }}
              activeOpacity={0.6}
              onPress={()=>navigate('MyMessagePage')}
          >
              <View
                  style={{
                    width:18,
                    height:13,
                    borderRadius:6,
                    backgroundColor:'#e05141',
                    alignItems:'center',
                    justifyContent:'center',
                    position:'absolute',
                    top:1,
                    right:13,
                  }}>
                  <Text
                      style={{
                        fontSize:8,
                        fontWeight:'900',
                        color:'#fefefe'
                      }}>99+</Text>
              </View>
          </TouchableOpacity>
          <View
              style={{
                width:'90%',
                marginLeft:'5%',
                height:80,
                marginTop:58,
                flexDirection:'row',
                justifyContent:'space-between',
                alignItems:'center',
              }}>
              <TouchableOpacity
                  style={{
                    width:80,
                    height:58,
                    alignItems:'center',
                    justifyContent:'space-between',
                    paddingBottom:10,
                    marginTop:10,
                  }}
                  activeOpacity={0.6}
                  onPress={()=>navigate('AwaitMeManagePage',{
                    serverParameters:this.props.serverParameters,
                    TokenData:this.props.TokenData,
                    GetTotalNum:this._GetTotalNum()
                  })}
              >
                  <Text
                      style={{
                        color:'#fefefe',
                        fontSize:20,
                      }}>{this.state.totalNum?this.state.totalNum:0}</Text>
                  <Text
                      style={{
                        color:'#fefefe',
                        fontSize:11,
                      }}>待我处理</Text>
              </TouchableOpacity>
              <TouchableOpacity
                  style={{
                    width:80,
                    height:58,
                    alignItems:'center',
                    justifyContent:'space-between',
                    paddingBottom:10,
                    marginTop:10,
                  }}
                  activeOpacity={0.6}
                  onPress={()=>navigate('MyAttentionPage')}
              >
                  <Text
                      style={{
                        color:'#fefefe',
                        fontSize:20,
                      }}>0</Text>
                  <Text
                      style={{
                        color:'#fefefe',
                        fontSize:11,
                      }}>我的关注</Text>
              </TouchableOpacity>
              <TouchableOpacity
                  style={{
                    width:80,
                    height:58,
                    alignItems:'center',
                    justifyContent:'space-between',
                    paddingBottom:10,
                    marginTop:10,
                  }}
                  activeOpacity={0.6}
                  onPress={()=>navigate('WarningPage')}
              >
                <Text
                      style={{
                        color:'#fefefe',
                        fontSize:20,
                      }}>0</Text>
                  <Text
                      style={{
                        color:'#fefefe',
                        fontSize:11,
                      }}>告警</Text>
              </TouchableOpacity>
          </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({

});
