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
 *     2018/6/4.
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
  ScrollView,
  StatusBar,
  ActivityIndicator,
  BackHandler
} from 'react-native';


import PublicHeader from '../PublicComponents/PublicHeader'
import PatrolCheckTaskContentPage from '../DetailComponents/PatrolCheckDetail/PatrolCheckTaskContentPage'
import realm from '../../RealmLocalStore/RealmLocalStore'
import fetchPost from '../../Function/FetchPost'
import Toast from 'teaset/components/Toast/Toast';
import ModalIndicator from 'teaset/components/ModalIndicator/ModalIndicator';
import NewPatrolCheckPostDataStore from '../../GlobalStore/PatrolCheckPostDataStore'
import SelectNormalExceptionButton from '../DetailComponents/PatrolCheckDetail/SelectNormalExceptionButton'
import NumPatrolCheckResultsTextInput from '../DetailComponents/PatrolCheckDetail/NumPatrolCheckResultsTextInput'
import PatrolCheckRemarkTextInput from '../DetailComponents/PatrolCheckDetail/PatrolCheckRemarkTextInput'
import AwaitMeManageDetailPost from '../DetailComponents/AwaitMeManageDetail/AwaitMeManageDetailPost'



export default class AwaitMeManageDetailPage extends PureComponent{

  state={
    normal:true,
    editorState:false,
    noteValue:'',
    AwaitMeManageDetailListData:[],
    selectState:true,
    startTime:'',
    endTime:'',
    YesButtonState:false,
    PatrolCheckResults:true,
    AwaitMeManage:false,
    AwaitMeManage:'',
  }

  TokenData=realm.objects('Token')
  UserInformationData=realm.objects('UserInformation')
  AwaitMeManageData=[]

  componentWillMount() {

      fetchPost(`http://${this.UserInformationData[0].serverParameters}/inspection`,
        {
            "access_token":this.TokenData[0].value,
            "type":"inspection_mission_item_app_getbyid",
            "id": this.props.navigation.state.params.sid,
            "data": {
	        	"page": {
	        		"page_size": "100",
	        		"page_number": "1"
	        	}
	        }
        }
      ).then((res)=>{
        if(res.errcode==='00000'){
            this.setState({
                AwaitMeManageDetailListData:res.data.items,
                startTime:res.data.start_time,
                endTime:res.data.end_time,
                total:res.data.total,
            })
        }else{
            Toast.show({
              text: '此巡检任务暂无数据,请等待上传',
              position: 'center',
              duration: 3000,
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
      if (Platform.OS === 'android') {
        BackHandler.addEventListener('hardwareBackPress', this._onThisBackAndroid);
      }
  }

  //监听安卓Back覆盖全局的监听安卓返回
  _onThisBackAndroid=()=>{
    return this.props.navigation.goBack()
  }

  AwaitMeManageData={
      "access_token":this.TokenData[0].value,
      "type":"inspection_mission_item_mod",
      "datas":NewPatrolCheckPostDataStore.SubmitPatrolCheckData
  }

  //提交函数
  _PostAwaitMeManageData=()=> {
      ModalIndicator.show('正在提交数据...');
      fetchPost(`http://${this.UserInformationData[0].serverParameters}/inspection`,
          this.AwaitMeManageData
          ).then((res)=>{
              if(res.errcode==='00000'){
                  ModalIndicator.hide()
                  Toast.show({
                    text: '提交成功',
                    position: 'bottom',
                    duration: 3000,
                  });
                  this.props.navigation.navigate('HomePage')
              }else{
                  ModalIndicator.hide()
                  Toast.show({
                    text: `请检查每一个必填项`,
                    position: 'bottom',
                    duration: 3000,
                  });
                  this.setState({
                    PatrolCheckResults:false
                  })
              }
          }).catch(
            (err)=>{
              ModalIndicator.hide()
              Toast.show({
                text: `似乎网络出现了问题,请稍后重试`,
                position: 'bottom',
                duration: 2000,
              });
            }
          )
  }

  //提交前的校验网络函数
  _CheckNetworkFn=()=>{
    fetchPost(`http://${this.UserInformationData[0].serverParameters}/login`,
          {"uid": 'admin', "pwd": '123456'}
    ).then((res)=>{
        if(res.errcode==='00000'){
            this._PostAwaitMeManageData()
        }else{
            ModalIndicator.hide()
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

  render() {
    const {params}=this.props.navigation.state;
    const {
        AwaitMeManageDetailListData,
        startTime,
        endTime
    }=this.state;
    return (
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
            <PublicHeader
              type='four'
              goBack={()=>this.props.navigation.goBack()}
              Title={this.props.navigation.state.params.Title}
            />
            {
                this.props.navigation.state.params.status==='完成'
                ?
                    <View></View>
                :
                    <TouchableOpacity
                        style={{
                          width:40,
                          height:40,
                          backgroundColor:'#2250a9',
                          alignItems:'center',
                          justifyContent:'center',
                          position:'absolute',
                          right:10,
                          top:18,
                        }}
                        onPress={this._CheckNetworkFn}
                    >
                        <Text style={{
                          color:'#fff'
                        }}>提交</Text>
                    </TouchableOpacity>
            }
            {
                this.state.AwaitMeManageDetailListData
                ?
                    <ScrollView
                        style={{
                          flex:1,
                          backgroundColor:'#f5f5f9',
                          zIndex:-999
                        }}
                    >

                            <View
                                style={{
                                  marginLeft:10,
                                  marginRight:10,
                                  marginTop:6,
                                  height:70,
                                  backgroundColor:'#fff',
                                  borderRadius:2,
                                  justifyContent:'center'
                                }}
                            >
                                <View
                                    style={{
                                      width:210,
                                      height:42,
                                      marginLeft:17,
                                      justifyContent:'space-between'
                                    }}
                                >
                                    <Text>开始时间:{startTime}</Text>
                                    <Text>结束时间:{endTime}</Text>
                                </View>
                            </View>
                                <View
                                style={{
                                  marginLeft:10,
                                  marginRight:10,
                                  marginTop:10,
                                  flex:1,
                                  backgroundColor:'#fff',
                                  borderRadius:2,
                                }}
                            >
                                <View
                                    style={{
                                      marginLeft:0,
                                      marginRight:0,
                                      height:40,
                                      justifyContent:'center',
                                      marginLeft:17
                                    }}
                                >
                                    <Text>巡检任务内容</Text>
                                </View>
                                <View>
                                    {
                                        AwaitMeManageDetailListData.map(
                                            (item,index)=>
                                                <View
                                                    key={index}
                                                    style={{
                                                        backgroundColor:'#f5f5f9',
                                                        marginLeft:10,
                                                        marginRight:10,
                                                        paddingLeft:10,
                                                        paddingBottom:10,
                                                    }}
                                                >
                                                    <View
                                                        style={{
                                                          marginTop:10,
                                                          justifyContent:'center',
                                                        }}
                                                    >
                                                        <TouchableOpacity
                                                            style={{
                                                              marginRight:10,
                                                              backgroundColor:'#e5e5e5',
                                                              height:30,
                                                              borderRadius:2,
                                                              flexDirection:'row',
                                                              justifyContent:'space-between',
                                                              alignItems:'center',
                                                              paddingRight:10,
                                                              paddingLeft:10,
                                                            }}
                                                            activeOpacity={0.7}
                                                        >
                                                            <Text>{item.region}</Text>
                                                            <Image
                                                                source={require('../../Icon/巡检页图标/Nabla.png')}
                                                                style={{
                                                                    width:20,
                                                                    height:20,
                                                                }}
                                                            />
                                                        </TouchableOpacity>
                                                    </View>
                                                    {
                                                        item.content.map(
                                                            (item,index)=>
                                                                <View
                                                                    key={index}
                                                                >
                                                                    <Text
                                                                        style={{
                                                                            marginTop:10
                                                                        }}
                                                                    >设备名称:  {item.object}</Text>
                                                                    <Text
                                                                        style={{
                                                                            marginTop:10
                                                                        }}
                                                                    >巡检内容:</Text>
                                                                    {
                                                                        item.content.map(
                                                                            (item,index)=>
                                                                                <View
                                                                                    key={index}
                                                                                    style={{
                                                                                        paddingBottom:5,
                                                                                    }}
                                                                                >
                                                                                    <View
                                                                                        style={{
                                                                                            marginTop:10,
                                                                                            flexDirection:'row',
                                                                                            alignItems:'center',
                                                                                        }}
                                                                                    >
                                                                                        <View
                                                                                            style={{
                                                                                                width:25,
                                                                                                height:25,
                                                                                                borderRadius:13,
                                                                                                backgroundColor:'#999',
                                                                                                alignItems:'center',
                                                                                                justifyContent:'center',
                                                                                            }}
                                                                                        >
                                                                                            <Text
                                                                                                style={{
                                                                                                    color:'#fff'
                                                                                                }}>{index+1}</Text>
                                                                                        </View>
                                                                                        <Text>   {item.content}</Text>
                                                                                    </View>
                                                                                        <Text
                                                                                            style={{
                                                                                                marginTop:10,
                                                                                            }}
                                                                                        >参考值:  {item.reference_value}</Text>
                                                                                        <Text
                                                                                            style={{
                                                                                                marginTop:10
                                                                                            }}
                                                                                        >类型:  {item.object_type}</Text>
                                                                                        <View
                                                                                            style={{
                                                                                                flexDirection:'row',
                                                                                                marginTop:10,
                                                                                                alignItems:'center'
                                                                                            }}
                                                                                        >
                                                                                            {
                                                                                                this.props.navigation.state.params.status==='完成'
                                                                                                ?
                                                                                                    <View>
                                                                                                        <View
                                                                                                            style={{
                                                                                                                flexDirection:'row'
                                                                                                            }}
                                                                                                        >
                                                                                                            <Text>巡检结果:</Text>
                                                                                                            <Text
                                                                                                                style={{
                                                                                                                    color:'#000'
                                                                                                                }}
                                                                                                            >  {item.real_value}</Text>
                                                                                                        </View>
                                                                                                        <View
                                                                                                            style={{
                                                                                                                flexDirection:'row',
                                                                                                                marginTop:10,
                                                                                                                marginBottom:10
                                                                                                            }}
                                                                                                        >
                                                                                                            <Text>备注:</Text>
                                                                                                            <Text
                                                                                                                style={{
                                                                                                                    color:'#000'
                                                                                                                }}
                                                                                                            >  {item.remark}</Text>
                                                                                                        </View>
                                                                                                    </View>
                                                                                                :
                                                                                                <AwaitMeManageDetailPost
                                                                                                    inspection_mission_cid={item.inspection_mission_cid}
                                                                                                    cid={item.cid}
                                                                                                    type={item.object_type}
                                                                                                    index={item.index}
                                                                                                    PatrolCheckResults={this.state.PatrolCheckResults}
                                                                                                    total={this.state.total}
                                                                                                />
                                                                                            }
                                                                                        </View>
                                                                                </View>
                                                                        )
                                                                    }
                                                                </View>
                                                        )
                                                    }
                                                </View>
                                        )
                                    }
                                </View>
                            </View>
                    </ScrollView>
                :
                    <View>
                        <Text
                            style={{
                              marginLeft:130,
                              marginTop:20
                            }}
                        >数据正在加载中</Text>
                        <ActivityIndicator/>
                    </View>
            }
        </View>
    )
  }
}

const styles = StyleSheet.create({

});
