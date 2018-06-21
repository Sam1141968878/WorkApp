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
 *     2018/4/26.
 */

import React, { Component,PureComponent } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

const MyPageContentList=[
    {
        url:require('../../../Icon/我的页图标/MyPageData.png'),
        title:'资料管理',
        page:'DataManagementPage'
    },
    {
        url:require('../../../Icon/我的页图标/MyPageService.png'),
        title:'客服',
        page:'CustomerServicePage'
    },
    {
        url:require('../../../Icon/我的页图标/MyPageAbout.png'),
        title:'关于',
        page:'AboutPage'
    }
]

import MyPageContentItem from './MyPageContentItem'

export default class MyPageContent extends PureComponent{

  render() {
    const {navigate}=this.props;
    return (
      <View
          style={{
            height:150,
            backgroundColor:'#FFF',
            marginTop:10
          }}
      >
          {
            MyPageContentList.map((item,index)=>
                <MyPageContentItem
                    key={index}
                    url={item.url}
                    title={item.title}
                    onPress={()=>navigate(item.page)}
                />
            )
          }
      </View>
    );
  }
}

const styles = StyleSheet.create({

});
