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
  Platform,
  StyleSheet,
  View,
  StatusBar,
  ScrollView,
  Text,
  BackHandler
} from 'react-native';

import {observable,action} from 'mobx';
import {observer} from 'mobx-react';
import NewGlobalStore from "../../GlobalStore/GlobalStore";

import PublicHeader from '../PublicComponents/PublicHeader'
import PublicTopTab from '../PublicComponents/PublicTopTab'
import MyMessagePageItem from '../PageComponents/MyMessagePage/MyMessagePageItem'
import RedPigLoadingAnimation from '../AnimationComponent/RedPigLoadingAnimation'

const MyMessageData=[
    {
        title:'通知1',
        state:'已读',
        time:'2017-11-11 09:58:10',
        object:'对象1',
        content:'内容1'
    },
    {
        title:'通知2',
        state:'未读',
        time:'2017-11-11 09:58:10',
        object:'对象2',
        content:'内容3'
    },
    {
        title:'通知3',
        state:'已读',
        time:'2017-11-11 09:58:10',
        object:'对象3',
        content:'内容3'
    },
    {
        title:'通知4',
        state:'未读',
        time:'2017-11-11 09:58:10',
        object:'对象4',
        content:'内容4'
    },
    {
        title:'通知5',
        state:'已读',
        time:'2017-11-11 09:58:10',
        object:'对象5',
        content:'内容5'
    },
    {
        title:'通知6',
        state:'未读',
        time:'2017-11-11 09:58:10',
        object:'对象6',
        content:'内容6'
    },
]

@observer
export default class MyMessagePage extends Component{
  state={
    lazyLoading:true
  }

  componentDidMount() {
      setTimeout(()=>{
          this.setState({
              lazyLoading:false
          })
      },600)
  }

  //监听安卓Back覆盖全局的监听安卓返回
  _onThisBackAndroid=()=>{
    return this.props.navigation.goBack()
  }

  componentWillMount() {
      if (Platform.OS === 'android') {
        BackHandler.addEventListener('hardwareBackPress', this._onThisBackAndroid);
      }
  }


  render() {
    const {goBack}=this.props.navigation;
    return (
      <View
          style={{
            flex:1
          }}
      >
          {
            this.state.lazyLoading
            ?
                <RedPigLoadingAnimation
                    speed={2.5}
                />
            :
                <ScrollView
                    style={{flex:1}}
                >
                  <StatusBar
                    backgroundColor='rgba(0,0,0,0)'
                    translucent={true}
                  />
                  <PublicHeader
                    type='one'
                    Title='通知'
                    goBack={()=>goBack()}
                  />
                  <View
                      style={{
                        flex:1,
                        backgroundColor:'#f5f5f9'
                      }}
                  >
                      {/*{*/}
                        {/*MyMessageData.map((item,index)=>*/}
                            {/*<MyMessagePageItem*/}
                                {/*title={item.title}*/}
                                {/*state={item.state}*/}
                                {/*time={item.time}*/}
                                {/*object={item.object}*/}
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
                  </View>
                </ScrollView>
          }
      </View>
    );
  }
}

const styles = StyleSheet.create({

});
