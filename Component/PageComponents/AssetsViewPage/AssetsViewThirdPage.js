/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 * Created by Administrator on 2018/5/3.
 */

import React, { Component,PureComponent } from 'react';
import {
  StyleSheet,
  ScrollView
} from 'react-native';

import AssetsViewPageItem from './AssetsViewPageItem'

const AssetsViewThirdPageData=[
    {
        "type":"在架",
        "data":[
            {
                资产编号:'ASST2018031700001',
                资产名称:'机架服务器001',
                资产分类:'IT类',
                资产位置:'数据中心>2号楼>2F>A机房>A1列',
                状态:'在架(运行中)'
            },
            {
                资产编号:'ASST2018031700001',
                资产名称:'机架服务器003',
                资产分类:'IT类',
                资产位置:'数据中心>2号楼>2F>A机房>A2列',
                状态:'在架(运行中)'
            },
            {
                资产编号:'ASST2018031700001',
                资产名称:'机架服务器005',
                资产分类:'IT类',
                资产位置:'数据中心>2号楼>2F>A机房>B1列',
                状态:'在架(运行中)'
            },
            {
                资产编号:'ASST2018031700001',
                资产名称:'机架服务器008',
                资产分类:'IT类',
                资产位置:'数据中心>2号楼>2F>A机房>B2列',
                状态:'在架(运行中)'
            },
        ]
    },
    {
        "type":"在库",
        "data":[
            {
                资产编号:'ASST2018031700001',
                资产名称:'机架服务器001',
                资产分类:'IT类',
                资产位置:'数据中心>2号楼>2F>A机房>A1列',
                状态:'在库'
            },
            {
                资产编号:'ASST2018031700001',
                资产名称:'机架服务器003',
                资产分类:'IT类',
                资产位置:'数据中心>2号楼>2F>A机房>A2列',
                状态:'在库'
            },
            {
                资产编号:'ASST2018031700001',
                资产名称:'机架服务器005',
                资产分类:'IT类',
                资产位置:'数据中心>2号楼>2F>A机房>B1列',
                状态:'在库'
            },
            {
                资产编号:'ASST2018031700001',
                资产名称:'机架服务器008',
                资产分类:'IT类',
                资产位置:'数据中心>2号楼>2F>A机房>B2列',
                状态:'在库'
            },
        ]
    },
    {
        "type":"维修中",
        "data":[
            {
                资产编号:'ASST2018031700001',
                资产名称:'机架服务器001',
                资产分类:'IT类',
                资产位置:'数据中心>2号楼>2F>A机房>A1列',
                状态:'维修中'
            },
            {
                资产编号:'ASST2018031700001',
                资产名称:'机架服务器003',
                资产分类:'IT类',
                资产位置:'数据中心>2号楼>2F>A机房>A2列',
                状态:'维修中'
            },
            {
                资产编号:'ASST2018031700001',
                资产名称:'机架服务器005',
                资产分类:'IT类',
                资产位置:'数据中心>2号楼>2F>A机房>B1列',
                状态:'维修中'
            },
            {
                资产编号:'ASST2018031700001',
                资产名称:'机架服务器008',
                资产分类:'IT类',
                资产位置:'数据中心>2号楼>2F>A机房>B2列',
                状态:'维修中'
            },
        ]
    },
]

export default class AssetsViewThirdPage extends PureComponent{
  render() {
    return (
      <ScrollView>
        {
          AssetsViewThirdPageData.map((item,index)=>
              <AssetsViewPageItem
                  data={AssetsViewThirdPageData[index]}
                  key={index}
              />
          )
        }
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({

});
