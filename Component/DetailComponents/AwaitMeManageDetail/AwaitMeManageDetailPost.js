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
 *     2018/6/6.
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
  TextInput,
  Switch,
} from 'react-native';


import PatrolCheckPostDataStore from '../../../GlobalStore/PatrolCheckPostDataStore'

export default class AwaitMeManageDetailPost extends PureComponent{

  state={
    NumPatrolCheckResults:'',
    remarkText:'',
    editorState:true,
    SelectSwitch:true,
    OneAwaitMeManagePushState:true,
    TwoAwaitMeManagePushState:true,
    redBorder:false,
    cid:'',
    index:''
  }

  AwaitMeManageDetailDataObject={}

  componentWillReceiveProps(newProps) {
      if(this.state.NumPatrolCheckResults===''&&newProps.PatrolCheckResults===false) {
        this.setState({
            redBorder:true
        })
      } else{
        this.setState({
            redBorder:false
        })
      }
  }

  componentDidMount() {
     this.setState({
        cid:this.props.cid,
        index:this.props.index,
        total:this.props.total
     },()=>{
        PatrolCheckPostDataStore.SubmitPatrolCheckData.length=this.state.total
     })
  }

  render() {
    const {index}=this.state;
    return (
      <View
          style={this.props.style}
      >
              <View>
                {
                  this.props.type==='状态'
                  ?
                      <View
                          style={{
                              flexDirection:'row',
                              alignItems:'center',
                          }}
                      >
                          <Text>巡检结果:</Text>
                          <View
                              style={{
                                  flexDirection:'row',
                                  width:60,
                                  justifyContent:'space-between',
                                  marginLeft:10,
                              }}
                          >
                            <Switch
                                value={this.state.SelectSwitch}
                                onValueChange={
                                    (value)=>{
                                        this.setState({
                                            SelectSwitch:value
                                        },()=>{
                                                this.setState({
                                                    OneAwaitMeManagePushState:false
                                                },()=>{
                                                   this.AwaitMeManageDetailDataObject.cid=this.props.cid
                                                   this.AwaitMeManageDetailDataObject.inspection_mission_cid=this.props.inspection_mission_cid
                                                   this.AwaitMeManageDetailDataObject.status='完成'
                                                   this.AwaitMeManageDetailDataObject.real_value=this.state.SelectSwitch?'正常':'异常'
                                                   this.AwaitMeManageDetailDataObject.remark=this.state.remarkText
                                                    PatrolCheckPostDataStore.SubmitPatrolCheckData[index]=this.AwaitMeManageDetailDataObject
                                                })
                                        })
                                    }
                                }
                            />
                          </View>
                          <View>
                            {
                                this.state.SelectSwitch
                                ?
                                    <Text>正常</Text>
                                :
                                    <Text>异常</Text>
                            }
                          </View>
                      </View>

                  :
                      <View
                          style={{
                              flexDirection:'row',
                              alignItems:'center',
                          }}
                      >
                        <Text>巡检结果:</Text>
                        <View
                            style={{
                                width:180,
                                height:40,
                                borderRadius:2,
                                flexDirection:'row',
                                marginLeft:10,
                                zIndex:-1,
                                borderColor:this.state.redBorder?'red':'#b2b2b2',
                                borderWidth:1,
                            }}
                        >

                            <TouchableOpacity
                                style={{
                                    width:40,
                                    height:40,
                                    alignItems:'center',
                                    justifyContent:'center',
                                    borderRightColor:'#b2b2b2',
                                    borderRightWidth:1,
                                    zIndex:999
                                }}
                                activeOpacity={0.6}
                                onPress={
                                    ()=> this.setState({
                                        NumPatrolCheckResults:(this.state.NumPatrolCheckResults*10-0.1*10)/10
                                    })}
                            >
                                <Text>-0.1</Text>
                            </TouchableOpacity>
                            <View
                                style={{
                                    alignItems:'center',
                                    justifyContent:'center',
                                    flex:1,
                                }}
                            >
                                <TextInput
                                    style={{
                                        color:'#000',
                                        fontSize:14,
                                        fontWeight:'600'
                                    }}
                                    value={`${this.state.NumPatrolCheckResults}`}
                                    onChangeText={(value)=>this.setState({
                                        NumPatrolCheckResults:value
                                    })}
                                    keyboardType='numeric'
                                    underlineColorAndroid='transparent'
                                    onBlur={()=>{
                                       this.AwaitMeManageDetailDataObject.cid=this.props.cid
                                       this.AwaitMeManageDetailDataObject.inspection_mission_cid=this.props.inspection_mission_cid
                                       this.AwaitMeManageDetailDataObject.status='完成'
                                       this.AwaitMeManageDetailDataObject.real_value=this.state.NumPatrolCheckResults
                                       this.AwaitMeManageDetailDataObject.remark=this.state.remarkText
                                       PatrolCheckPostDataStore.SubmitPatrolCheckData[index]=this.AwaitMeManageDetailDataObject
                                        }}
                                />
                            </View>
                            <TouchableOpacity
                                style={{
                                    width:40,
                                    height:40,
                                    alignItems:'center',
                                    justifyContent:'center',
                                    borderLeftColor:'#b2b2b2',
                                    borderLeftWidth:1,
                                    zIndex:999
                                }}
                                activeOpacity={0.6}
                                onPress={
                                    ()=> this.setState({
                                        NumPatrolCheckResults:(this.state.NumPatrolCheckResults*10+0.1*10)/10
                                    })}
                            >
                                <Text>+0.1</Text>
                            </TouchableOpacity>
                        </View>
                      </View>

                }
              </View>
              <View
                  style={{
                      flexDirection:'row',
                      alignItems:'center',
                      marginTop:10,
                      marginBottom:10
                  }}
              >
                  <Text>备注:</Text>
                  <TextInput
                      blurOnSubmit={true}
                      style={{
                          width:250,
                          height:40,
                          marginLeft:10,
                          borderColor:'#e5e5e5',
                          borderWidth:1
                      }}
                      editable={this.state.editorState}
                      underlineColorAndroid='transparent'
                      value={this.state.remarkText}
                      onChangeText={(value)=>this.setState({
                          remarkText:value,
                      },()=>{
                        this.AwaitMeManageDetailDataObject.cid=this.props.cid
                        this.AwaitMeManageDetailDataObject.inspection_mission_cid=this.props.inspection_mission_cid
                        this.AwaitMeManageDetailDataObject.status='完成'
                        this.AwaitMeManageDetailDataObject.real_value= this.props.type==='状态'?(this.state.SelectSwitch?'正常':'异常'):this.state.NumPatrolCheckResults
                        this.AwaitMeManageDetailDataObject.remark=this.state.remarkText
                        PatrolCheckPostDataStore.SubmitPatrolCheckData[index]=this.AwaitMeManageDetailDataObject
                      })}
                  />
              </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});
