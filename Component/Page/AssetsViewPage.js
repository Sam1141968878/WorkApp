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
 *     2018/4/18.
 */

import React, { Component,PureComponent } from 'react';
import {
  Platform,
  StyleSheet,
  View,
  StatusBar,
} from 'react-native';

import PublicHeader from '../PublicComponents/PublicHeader'
import PublicTopTab from '../PublicComponents/PublicTopTab'
import AssetsViewOnePage from '../PageComponents/AssetsViewPage/AssetsViewOnePage'
import AssetsViewTwoPage from '../PageComponents/AssetsViewPage/AssetsViewTwoPage'
import AssetsViewThirdPage from '../PageComponents/AssetsViewPage/AssetsViewThirdPage'
import {observable,action} from 'mobx';
import {observer} from 'mobx-react';
import RedPigLoadingAnimation from '../AnimationComponent/RedPigLoadingAnimation'

const AssetsViewTopTabProps={
    OneTitle:'按分类',
    TwoTitle:'按位置',
    ThirdTitle:'按状态',
    OnePage:<AssetsViewOnePage/>,
    TwoPage:<AssetsViewTwoPage/>,
    ThirdPage:<AssetsViewThirdPage/>,
    Type:3,
}

@observer
export default class AssetsViewPage extends PureComponent{
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

  render() {
    const {goBack,navigate}=this.props;
    return (
      <View style={{flex:1}}>
        {
          this.state.lazyLoading
          ?
            <RedPigLoadingAnimation/>
          :
            <View
                style={{
                    flex:1,
                    backgroundColor:'#f5f5f9'
                }}
            >
                <StatusBar
                    backgroundColor='rgba(0,0,0,0)'
                    translucent={true}
                />
                <PublicHeader
                    type='one'
                    Title='资产查看'
                    goBack={goBack}
                    fn={()=>navigate('SearchAssetsPage')}
                />
                <PublicTopTab
                    {...AssetsViewTopTabProps}
                />
            </View>
        }

      </View>
    );
  }
}

const styles = StyleSheet.create({

});
