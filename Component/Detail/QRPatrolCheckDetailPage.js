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
  StatusBar,
  TextInput,
  ScrollView,
  Image,
} from 'react-native';

import PublicHeader from '../PublicComponents/PublicHeader'
import PatrolCheckTaskContentPage from '../DetailComponents/PatrolCheckDetail/PatrolCheckTaskContentPage'
import realm from '../../RealmLocalStore/RealmLocalStore'
import fetchPost from '../../Function/FetchPost'
import Toast from 'teaset/components/Toast/Toast';
import ModalIndicator from 'teaset/components/ModalIndicator/ModalIndicator';
import NewPatrolCheckPostDataStore from '../../GlobalStore/PatrolCheckPostDataStore'
import AwaitMeManageDetailPost from '../DetailComponents/AwaitMeManageDetail/AwaitMeManageDetailPost'


export default class QRPatrolCheckDetailPage extends PureComponent{

  state={
    normal:true,
    editorState:true,
    noteValue:'',
    PatrolCheckResults:true,
    startTime:'',
    endTime:'',
    QRPatrolCheckDetailListData:[]
  }

  TokenData=realm.objects('Token')
  UserInformationData=realm.objects('UserInformation')


  QRPatrolCheckData={
      "access_token":this.TokenData[0].value,
      "type":"inspection_mission_item_mod",
      "datas":NewPatrolCheckPostDataStore.SubmitPatrolCheckData
  }


  componentWillMount() {
      this.setState({
        QRPatrolCheckDetailListData:this.props.navigation.state.params.data,
        total:this.props.navigation.state.params.data.total,
        startTime:this.props.navigation.state.params.data.start_time,
        endTime:this.props.navigation.state.params.data.end_time,
      })
  }


  //提交函数
  _PostQrPatrolData=()=> {
      ModalIndicator.show('正在提交数据...');
      fetchPost(`http://${this.UserInformationData[0].serverParameters}/inspection`,
          this.QRPatrolCheckData
          ).then((res)=>{
              if(res.errcode==='00000'){
                  ModalIndicator.hide()
                  Toast.show({
                    text: '提交成功',
                    position: 'top',
                    duration: 5000,
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
            this._PostQrPatrolData()
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
    const {state,navigate,goBack}=this.props.navigation;
    const {
        data
    }=this.props.navigation.state.params;
    const{
        startTime,
        endTime,
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
            Title='巡检单'
            goBack={()=>navigate('HomePage')}
            type='third'
        />
        {
            this.state.editorState
            ?
                 <TouchableOpacity
                    style={{
                      width:40,
                      height:40,
                      backgroundColor:'#2250a9',
                      alignItems:'center',
                      justifyContent:'center',
                      position:'absolute',
                      right:15,
                      top:14,
                    }}
                    onPress={this._CheckNetworkFn}
                >
                    <Text style={{
                      color:'#fff'
                    }}>提交</Text>
                </TouchableOpacity>
            :

                <View></View>
          }
          <ScrollView
              style={{
                flex:1,
                backgroundColor:'#f5f5f9'
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
                        borderBottomColor:'#f5f5f9',
                        borderBottomWidth:1,
                        justifyContent:'center',
                        marginLeft:17
                      }}
                  >
                      <Text>巡检任务内容</Text>
                  </View>
                  <View>
                      <View
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
                                  <Text>{this.state.QRPatrolCheckDetailListData.region}</Text>
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
                                 this.state.QRPatrolCheckDetailListData.items.map(
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
                  </View>
              </View>
          </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});
