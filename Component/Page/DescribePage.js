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
 *     2018/5/2.
 */

import React, { Component,PureComponent } from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  TextInput
} from 'react-native';


import PublicHeader from '../PublicComponents/PublicHeader'

export default class DescribePage extends PureComponent{
  state={
    DescribeValue:''
  }
  render() {
    return (
      <View style={{flex:1}}>
        <StatusBar
            backgroundColor='rgba(0,0,0,0)'
            translucent={true}
        />
        <PublicHeader
            type='title'
            Title='描述'
            // goBack={()=>navigate('HomePage')}
            RightText='保存'
        />
        <View
            style={{
                flex:1,
                backgroundColor:'#FFF'
            }}
        >
            <TextInput
                value={this.state.DescribeValue}
                style={{
                    marginLeft:15,
                    marginRight:15,
                    marginTop:0,
                    fontSize:18,
                }}
                multiline={true}
                onChangeText={(value)=>{
                    this.setState({
                        DescribeValue:value
                    })
                }}
                placeholder="请输入描述"
                underlineColorAndroid='transparent'
                selectionColor='#000'
            />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});
