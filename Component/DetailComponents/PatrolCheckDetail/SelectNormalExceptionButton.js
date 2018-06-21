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
 *     2018/5/31.
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
} from 'react-native';


import NewGlobalPatrolCheckPostFn from '../../../GlobalStore/GlobalPatrolCheckPostFn'

export default class SelectNormalExceptionButton extends PureComponent{
  state={
    YesButtonState:'',
    editorState:false,
    remarkText:''
  }



  render() {
    return (
      < View
          style= {{
              flexDirection:'row'
          }}>
          <TouchableOpacity
              disabled={this.state.editorState}
              style={{
                  marginLeft:10,
                  flexDirection:'row'
              }}
              onPress={()=> this.setState({
                  YesButtonState:!this.state.YesButtonState
              },()=>{
                NewGlobalPatrolCheckPostFn.datasObjects.real_value=this.state.YesButtonState
                })}
          >
              {
                  this.state.YesButtonState
                  ?
                  <Image
                      source={require('../../../Icon/巡检页图标/SelectBlueXj.png')}
                      style={{
                          width: 20,
                          height: 20
                      }}
                  />
                  :
                  <Image
                      source={require('../../../Icon/巡检页图标/SelectGrayXJ.png')}
                      style={{
                          width: 20,
                          height: 20
                      }}
                  />
              }
             <Text style={{color: '#75bd52'}}>正常</Text>
          </TouchableOpacity>
          <TouchableOpacity
              disabled={this.state.editorState}
              style={{
                marginLeft: 20,
                flexDirection: 'row'
              }}
              onPress={() => this.setState({
                    YesButtonState: !this.state.YesButtonState
              },()=>{
                NewGlobalPatrolCheckPostFn.cid=this.props.inspection_mission_cid
                NewGlobalPatrolCheckPostFn.inspection_mission_cid=this.props.inspection_mission_cid
                NewGlobalPatrolCheckPostFn.status='完成'
                NewGlobalPatrolCheckPostFn.datasObjects.real_value=this.state.YesButtonState


              })}
          >
          {
              this.state.YesButtonState
                  ?
                    <Image
                        source={require(
                            '../../../Icon/巡检页图标/SelectGrayXJ.png')}
                        style={{
                            width: 20,
                            height: 20
                        }}
                    />
                  :
                    <Image
                        source={require(
                            '../../../Icon/巡检页图标/SelectBlueXj.png')}
                        style={{
                            width: 20,
                            height: 20
                        }}
                    />
          }
                <Text style={{color: '#e63d41'}}>异常</Text>
          </TouchableOpacity>
          </View>
    );
  }
}

const styles = StyleSheet.create({

});
