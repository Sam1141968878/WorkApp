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
  BackHandler
} from 'react-native';

import {observable,action} from 'mobx';
import {observer} from 'mobx-react';

import PublicHeader from '../PublicComponents/PublicHeader'
import PublicTopTab from '../PublicComponents/PublicTopTab'
import WarningOnePage from '../PageComponents/WarningPage/WarningOnePage'
import WarningTwoPage from '../PageComponents/WarningPage/WarningTwoPage'
import WarningThirdPage from '../PageComponents/WarningPage/WarningThirdPage'
import RedPigLoadingAnimation from '../AnimationComponent/RedPigLoadingAnimation'

const PublicTopTabProps={
    OneTitle:'全部',
    TwoTitle:'配电',
    ThirdTitle:'环境',
    OnePage:<WarningOnePage/>,
    TwoPage:<WarningTwoPage/>,
    ThirdPage:<WarningThirdPage/>,
    Type:3,
}

@observer
export default class AwaitMeManagePage extends PureComponent{
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
                    Title='告警'
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
                  </View>
                </View>
          }
      </View>
    );
  }
}

const styles = StyleSheet.create({

});
