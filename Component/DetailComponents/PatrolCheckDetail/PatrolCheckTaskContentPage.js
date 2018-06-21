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
} from 'react-native';


import PatrolCheckContentPage from './PatrolCheckContentPage'
import NewPatrolCheckPostDataStore from '../../../GlobalStore/PatrolCheckPostDataStore'


export default class PatrolCheckTaskContentPage extends PureComponent{
  state={
    select:true,
  }


  render() {
    const {select}=this.state;
    return (
      <View
          style={{
            marginRight:10,
            backgroundColor:'#fff',
            flex:1
          }}
      >
          <TouchableOpacity
              style={{
                height:30,
                backgroundColor:'#e5e5e5',
                justifyContent:'center'
              }}
              onPress={()=>this.setState({
                  select:true
              })}
              activeOpacity={0.8}
          >
            <Text
                style={{
                    marginLeft:10,
                    borderRadius:1,
                }}
            >区域:<Text
                style={{
                    color:'#000',
                    marginLeft:10
                }}>{this.props.Area}</Text>
            </Text>
            <View
                style={{
                    width:20,
                    height:20,
                    position:'absolute',
                    right:10
                }}
            >
                {
                    select
                    ?
                        <Image
                            source={require('../../../Icon/巡检页图标/Nabla.png')}
                            style={{
                                width:20,
                                height:20
                            }}
                        />
                    :
                        <Image
                            source={require('../../../Icon/巡检页图标/EquilateralTriangle.png')}
                            style={{
                                width:20,
                                height:20
                            }}
                        />
                }
            </View>
          </TouchableOpacity>
          <View>
              {
                this.state.select
                ?
                    <View>
                        {
                          this.props.Items.map((item,index)=>
                            <PatrolCheckContentPage
                                index={index}
                                key={index}
                                item={item}
                                object={item.object}
                                content={item.content}
                                cid={this.props.Cid}
                                PatrolCheckResults={this.props.PatrolCheckResults}
                            />
                          )
                        }
                     </View>
                :
                    <View></View>
              }
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});
