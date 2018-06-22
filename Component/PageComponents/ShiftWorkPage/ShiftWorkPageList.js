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
 *     2018/5/22.
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
  Dimensions,
  ActivityIndicator,
} from 'react-native';




import ShiftWorkPageItem from './ShiftWorkPageitem'


const {height, width} = Dimensions.get('window');

export default class ShiftWorkPageList extends PureComponent{
  state={
    ShiftWorkPageListData:[],
    NullState:false,
  }

  componentWillReceiveProps(newProps) {
      if(newProps.datas){
        this.setState({
            ShiftWorkPageListData:newProps.datas.datas
        })
      }else{
        return
      }
      setTimeout(()=>this.setState({
        NullState:true
      }),3000)
  }

  render() {
    return (
      <View
          style={{
            flex:1,
            marginTop:10,
            minHeight:height-440,
          }}
      >
          {
            this.state.ShiftWorkPageListData
            ?
                this.state.ShiftWorkPageListData.map((item,index)=>
                    <ShiftWorkPageItem
                        key={index}
                        sid={item.sid}
                        per_name={item.per_name}
                        begin_time_1={item.begin_time_1.substring(item.begin_time_1.length-8)}
                        end_time_1={item.end_time_1.substring(item.end_time_1.length-8)}
                        color={item.color}
                    />
                )
            :
                <View>
                    {
                        this.state.NullState
                        ?
                            <Text
                                style={{
                                  marginLeft:80,
                                  marginTop:85
                                }}
                            >暂无值班任务</Text>
                        :
                            <View>
                                <Text
                                    style={{
                                      marginLeft:70,
                                      marginTop:85
                                    }}
                                >正在加载值班数据</Text>
                                <ActivityIndicator/>
                            </View>
                    }
                </View>
          }
      </View>
    )
  }
}

const styles = StyleSheet.create({

});
