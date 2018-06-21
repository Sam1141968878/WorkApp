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
 *     2018/4/27.
 */

import React, { Component,PureComponent } from 'react';
import {
  StyleSheet,
  ScrollView,
  Text
} from 'react-native';

const WarningTwoPageData=[
    {
        title:'配电告警',
        location:'位置1',
        state:'严重告警',
        time:'2017-11-11 09:58:10',
        content:'内容描述1'
    },
    {
        title:'配电告警',
        location:'位置2',
        state:'紧要告警',
        time:'2017-11-11 09:58:10',
        content:'内容描述2'
    },
    {
        title:'配电告警',
        location:'位置3',
        state:'次要告警',
        time:'2017-11-11 09:58:10',
        content:'内容描述3'
    },
    {
        title:'配电告警',
        location:'位置4',
        state:'次要告警',
        time:'2017-11-11 09:58:10',
        content:'内容描述4'
    },
    {
        title:'配电告警',
        location:'位置5',
        state:'严重告警',
        time:'2017-11-11 09:58:10',
        content:'内容描述5'
    },
    {
        title:'配电告警',
        location:'位置6',
        state:'严重告警',
        time:'2017-11-11 09:58:10',
        content:'内容描述6'
    },
]

import WarningPageItem from './WarningPageItem'
export default class WarningTwoPage extends PureComponent{
  render() {
    return (
      <ScrollView
          style={{
            marginTop:10,
          }}
      >
            {/*{*/}
                {/*WarningTwoPageData.map((item,index)=>*/}
                    {/*<WarningPageItem*/}
                        {/*title={item.title}*/}
                        {/*location={item.location}*/}
                        {/*state={item.state}*/}
                        {/*time={item.time}*/}
                        {/*content={item.content}*/}
                        {/*key={index}*/}
                    {/*/>*/}
                {/*)*/}
            {/*}*/}
            <Text
                style={{
                  marginLeft:150,
                  marginTop:20
                }}
            >暂无数据</Text>
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({

});
