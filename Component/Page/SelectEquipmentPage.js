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
  StatusBar,
  ScrollView,
} from 'react-native';


import PublicHeader from '../PublicComponents/PublicHeader'
import SelectEquipmentPageItem from '../PageComponents/SelectEquipmentPageItem/SelectEquipmentPageItem'

const SelectEquipmentPageData=[
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
        状态:'在架(未运行)'
    },
    {
        资产编号:'ASST2018031700001',
        资产名称:'机架服务器005',
        资产分类:'IT类',
        资产位置:'数据中心>2号楼>2F>A机房>B1列',
        状态:'在架(闲置)'
    },
    {
        资产编号:'ASST2018031700001',
        资产名称:'机架服务器008',
        资产分类:'IT类',
        资产位置:'数据中心>2号楼>2F>A机房>B2列',
        状态:'在库'
    },
    {
        资产编号:'ASST2018031700001',
        资产名称:'机架服务器005',
        资产分类:'IT类',
        资产位置:'数据中心>2号楼>2F>A机房>B1列',
        状态:'在架(闲置)'
    },
    {
        资产编号:'ASST2018031700001',
        资产名称:'机架服务器008',
        资产分类:'IT类',
        资产位置:'数据中心>2号楼>2F>A机房>B2列',
        状态:'在库'
    },
]

export default class SelectEquipmentPage extends PureComponent{
  SelectData=[]
  render() {
    const {goBack}=this.props;
    return (
      <ScrollView
          style={{
            flex:1
          }}
      >
        <StatusBar
          backgroundColor='rgba(0,0,0,0)'
          translucent={true}
        />
        <PublicHeader
            type='String'
            RightText='确定'
            Title='选择设备'
            goBack={goBack}
            function={()=>alert(`你选中了${this.SelectData.length}个`)}
        />
          <View
              style={{
                height:30,
                marginLeft:15,
                marginRight:15,
                borderRadius:2,
                backgroundColor:'#f9f9f9',
                marginTop:10,
                marginBottom:10,
                alignItems:'center',
                justifyContent:'center'
              }}
          >
              <Text style={{color:'#cccccc'}}>请输入设备名称或编号(这个功能还未开发)</Text>
          </View>
          <View
              style={{
                paddingTop:10,
                flex:1,
                backgroundColor:'#f5f5f9'
              }}
          >
              {
                SelectEquipmentPageData.map((item,index)=>
                    <SelectEquipmentPageItem
                        key={index}
                        data={SelectEquipmentPageData[index]}
                        onPress={()=>{
                            alert(`下标:${index}资产编号:${item.资产编号}状态:${item.状态}资产名称:${item.资产名称}资产分类:${item.资产分类}资产位置:${item.资产位置}`);
                            this.SelectData.push(item)
                        }}

                    />
                )
              }
          </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({

});
