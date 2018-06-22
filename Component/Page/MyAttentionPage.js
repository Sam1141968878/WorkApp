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
  Image,
  BackHandler,
  Text
} from 'react-native';

import {observable,action} from 'mobx';
import {observer} from 'mobx-react';

import PublicHeader from '../PublicComponents/PublicHeader'
import PublicTopTab from '../PublicComponents/PublicTopTab'
import MyAttentionOnePage from '../PageComponents/MyAttentionPage/MyAttentionOnePage'
import MyAttentionTwoPage from '../PageComponents/MyAttentionPage/MyAttentionTwoPage'
import MyAttentionThirdPage from '../PageComponents/MyAttentionPage/MyAttentionThirdPage'
import MyAttentionFourPage from '../PageComponents/MyAttentionPage/MyAttentionFourPage'
import RedPigLoadingAnimation from '../AnimationComponent/RedPigLoadingAnimation'

const PublicTopTabProps={
    OneTitle:'全部',
    TwoTitle:'待处理',
    ThirdTitle:'处理中',
    FourTitle:'待关闭',
    OnePage:<MyAttentionOnePage/>,
    TwoPage:<MyAttentionTwoPage/>,
    ThirdPage:<MyAttentionThirdPage/>,
    FourPage:<MyAttentionFourPage/>,
    Type:'Four',
}

@observer
export default class MyAttentionPage extends PureComponent{
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
                <View
                    style={{
                        flex:1
                    }}
                >
                    <StatusBar
                      backgroundColor='rgba(0,0,0,0)'
                      translucent={true}
                    />
                    <PublicHeader
                      type='third'
                      Title='我的关注'
                      goBack={()=>goBack()}
                    />
                    {/*<PublicTopTab*/}
                        {/*{...PublicTopTabProps}*/}
                    {/*/>*/}
                    <View
                        style={{
                            alignItems:'center',
                            justifyContent:'center'
                        }}
                    >
                        <Image
                            source={require('../../Icon/公用图标/DevelopmentImg.png')}
                            style={{
                                width:200,
                                height:200,
                                marginTop:150,
                            }}
                        />
                        <Text>此功能正在加急开发中,请稍等</Text>
                    </View>
                </View>
          }
      </View>
    );
  }
}

const styles = StyleSheet.create({

});
