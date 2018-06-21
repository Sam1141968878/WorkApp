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
 *     2018/5/3.
 */

import React, { Component,PureComponent } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';


export default class AssetsViewPageItem extends PureComponent{
  state={
    show:false
  }
  render() {
    const {data}=this.props;
    return (
      <View
          style={{
            backgroundColor:'#FFF',
            marginTop:10,
          }}
      >
          <TouchableOpacity
            style={{
              height:40,
              paddingLeft:10,
              paddingRight:10,
              borderBottomColor:'#e5e5e5',
              borderBottomWidth:StyleSheet.hairlineWidth,
              flexDirection:'row',
              alignItems:'center',
              justifyContent:'space-between'
            }}
            onPress={()=>this.setState({
                    show:!this.state.show
            })}
            activeOpacity={0.7}
          >
              <Text
                  style={{
                    color:'#000',
                    fontSize:16,
                    fontWeight:'600'
                  }}
              >{data.type}</Text>
              <View>
                  {
                    this.state.show
                    ?
                    <Image
                        source={require('../../../Icon/公用图标/DownGray.png')}
                        style={{
                          width:20,
                          height:20
                        }}
                    />
                    :
                    <Image
                        source={require('../../../Icon/公用图标/UpGray.png')}
                        style={{
                          width:20,
                          height:20
                        }}
                    />
                  }

              </View>
          </TouchableOpacity>
          {
            this.state.show
            ?
            <View>
                {
                  data.data.map((item,index)=>
                      <View
                        key={index}
                        style={{
                            height:100,
                            paddingLeft:10,
                            paddingRight:10,
                            borderBottomColor:'#e5e5e5',
                            borderBottomWidth:StyleSheet.hairlineWidth,
                            paddingTop:10,
                            paddingBottom:10,
                        }}
                      >
                          <View
                            style={{
                                flexDirection:'row',
                                justifyContent:'space-between'
                            }}
                          >
                            <Text>资产编号:{item.资产编号}</Text>
                            <Text
                                style={{
                                    color:'#000',
                                    fontSize:14,
                                    fontWeight:'600'
                                }}
                            >{item.状态}</Text>
                          </View>

                          <Text>资产名称:{item.资产名称}</Text>
                          <Text>资产分类:{item.资产分类}</Text>
                          <Text>资产位置:{item.资产位置}</Text>

                      </View>
                  )
                }
            </View>
            :
            <View></View>
          }


      </View>
    );
  }
}

const styles = StyleSheet.create({

});
