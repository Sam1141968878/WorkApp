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
 *     2018/5/28.
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
} from 'react-native';


import SelectNormalExceptionButton from './SelectNormalExceptionButton'
import NumPatrolCheckResultsTextInput from './NumPatrolCheckResultsTextInput'
import PatrolCheckRemarkTextInput from './PatrolCheckRemarkTextInput'
import NewPatrolCheckPostDataStore from '../../../GlobalStore/PatrolCheckPostDataStore'
import AwaitMeManageDetailPost from '../../DetailComponents/AwaitMeManageDetail/AwaitMeManageDetailPost'


export default class PatrolCheckContentPage extends PureComponent{
  state={
    remarkText:'',
    real_value:'',
    PatrolCheckResults:true,
  }


  render() {
    return (
      <View
          style={{
            marginLeft:10,
            marginTop:10,
          }}
      >
          <Text>设备名称:<Text style={{color:'#000'}}>{this.props.object}</Text></Text>
          <Text
              style={{
                marginTop:10
              }}
          >巡检内容:</Text>
          {
            this.props.content.map((item,index)=>
                <View
                    key={index}
                    style={{
                        borderBottomColor:'#e5e5e5',
                        borderBottomWidth:1,
                        marginBottom:10
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
                                backgroundColor:'#999999',
                                justifyContent:'center',
                                alignItems:'center'
                            }}
                        >
                            <Text
                                style={{
                                    color:'#fff',
                                    fontSize:14,
                                }}
                            >{index+1}</Text>
                        </View>
                        <Text
                            style={{
                                marginLeft:10,
                                color:'#000',
                                fontSize:14,
                            }}
                        >{item.content}</Text>
                    </View>
                    <View
                        style={{
                            marginTop:10,
                            flexDirection:'row',
                            alignItems:'center'
                        }}
                    >
                        <Text>参考值:<Text
                            style={{
                                color:'#000',
                                marginLeft:10,
                                marginLeft:10,
                            }}
                        >{item.reference_value
}</Text></Text>
                    </View>
                    <View
                        style={{
                            marginTop:10,
                            flexDirection:'row',
                            alignItems:'center'
                        }}
                    >
                        <Text>类型:<Text
                            style={{
                                color:'#000',
                                fontSize:14,
                                marginLeft:10,
                            }}
                        >{item.object_type}</Text></Text>
                    </View>
                    {
                        item.status==='已完成'
                        ?
                            <View>
                                <View
                                    style={{
                                        marginTop:10,
                                        flexDirection:'row'
                                    }}
                                >
                                    <Text>巡检结果:</Text>
                                    <Text
                                        style={{
                                            color:'#000'
                                        }}
                                    > {item.real_value}</Text>
                                </View>
                                <View
                                    style={{
                                        marginTop:10,
                                        flexDirection:'row',
                                        marginBottom:10,
                                    }}
                                >
                                    <Text>备注:</Text>
                                    <Text
                                        style={{
                                            color:'#000'
                                        }}
                                    > {item.remark?item.remark:'暂无备注'}</Text>
                                </View>
                            </View>
                        :

                            <AwaitMeManageDetailPost
                                type={item.object_type}
                                inspection_mission_cid={item.inspection_mission_cid}
                                cid={item.cid}
                                PatrolCheckResults={this.props.PatrolCheckResults}
                            />
                    }

                </View>
            )
          }
      </View>
    );
  }
}

const styles = StyleSheet.create({

});
