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
 *     2018/5/4.
 */

import React, { Component,PureComponent } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import GreenSureAnimation from '../../AnimationComponent/GreenSureAnimation'
export default class SelectEquipmentPageItem extends PureComponent{
  state={
    select:false,
  }
  render() {
    const {data,onPress}=this.props;
    const {select}=this.state;
    return (
      <TouchableOpacity
          style={{
              height:100,
              paddingLeft:40,
              paddingRight:15,
              backgroundColor:select?'#e3f0ff':'#fff',
              borderBottomColor:'#e5e5e5',
              borderBottomWidth:StyleSheet.hairlineWidth,
              justifyContent:'center'
          }}
          activeOpacity={0.7}
          onPress={()=>{
            this.setState({
              select:!this.state.select
            },()=>{
                if(this.state.select===true){
                    onPress()
                }else{
                    return
                }
            })
          }}
      >
          <View
              style={{
                width:45,
                height:45,
                position:'absolute',
                top:28,
                marginLeft:0,
                alignItems:'center',
                justifyContent:'center'
              }}
          >
              <GreenSureAnimation
                  style={{
                    width:80,
                    height:80
                  }}
                  select={select}
              />
          </View>
          <View
              style={{
                  flexDirection:'row',
                  justifyContent:'space-between'
              }}
          >
              <View style={{flexDirection:'row'}}>
                <Text>资产编号:<Text style={{color:'#000'}}>{data.资产编号}</Text>  </Text>
              </View>
              <Text
                  style={{
                    fontSize:14,
                    color:'#000',
                    fontWeight:'600'
                  }}
              >{data.状态}</Text>
          </View>
          <View style={{flexDirection:'row'}}>
              <Text>资产名称:<Text style={{color:'#000'}}>{data.资产名称}</Text>  </Text>
          </View>
          <View style={{flexDirection:'row'}}>
              <Text>资产分类:<Text style={{color:'#000'}}>{data.资产分类}</Text>  </Text>
          </View>
          <View style={{flexDirection:'row'}}>
              <Text>资产位置:<Text style={{color:'#000'}}>{data.资产位置}</Text>  </Text>
          </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({

});
