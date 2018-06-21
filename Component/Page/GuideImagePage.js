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
  TouchableOpacity,
  StatusBar,
} from 'react-native';

import {observable,action} from 'mobx';
import {observer} from 'mobx-react';
import NewGlobalStore from '../../GlobalStore/GlobalStore'
import FromSureAnimation from '../AnimationComponent/FromSureAnimation'
import ExcavatorAnimation from '../AnimationComponent/ExcavatorAnimation'
import AscensionEfficiencyAnimation from '../AnimationComponent/AscensionEfficiencyAnimation'
import realm from '../../RealmLocalStore/RealmLocalStore'
import Swiper from 'react-native-swiper';
import StartImagePage from './StartImagePage'

@observer
export default class GuideImagePage extends Component{
  state={
    Index:0,
    leaveSelect:false,
    GuideImageState:true
  }
  GuideImageState=realm.objects('GuideImageState')

  //引导页发生变化时调用的函数
  _onIndexChanged=(index)=>{
    this.setState({
        Index:index
    })
  }


  //将GuideImageState状态保存到本地,锁死引导图状态,q确保引导图以后不会再出现,除非完全清除数据
  _createGuideImageState=()=>{
      realm.write(()=>{
          realm.delete(this.GuideImageState);
      })
      realm.write(() => {
          realm.create('GuideImageState',
               {
                  state: true
               }
          );
      });
  }


  //删除引导图状态保存数据
  //  _removeGuideImageState(){
  //    realm.write(()=>{
  //        realm.delete(this.GuideImageState);
  //    })
  //  }

  //当执行到最后一页,点击Done执行的回调函数
  _DoneBtnClick=()=>{
    this._createGuideImageState()
    this.props.navigation.navigate('LandingPage')
  }


  componentDidMount() {
    if(this.GuideImageState[0]===undefined){
        this.setState({
            GuideImageState:true
        })
    }else {
        this.setState({
            GuideImageState:false
        })
    }
  }


  render() {
    const {navigate}=this.props.navigation;
    return (
        <View
            style={{
                flex:1
            }}
        >
            {
                this.state.GuideImageState===false
                ?
                    <View
                        style={{
                            flex:1
                        }}
                    >
                        <StatusBar
                            backgroundColor='rgba(0,0,0,0)'
                            translucent={true}
                        />
                        <Swiper
                            onIndexChanged={this._onIndexChanged}
                            loop={false}
                        >
                          <View style={styles.slide1}>
                            <Text style={styles.text}>工程管理一目了然</Text>
                            <FromSureAnimation
                                style={{
                                    width:250,
                                    height:250
                                }}
                                Index={this.state.Index}
                            />
                          </View>
                          <View style={styles.slide2}>
                            <Text style={styles.text}>资产信息随时查看</Text>
                            <ExcavatorAnimation
                                style={{
                                    width:250,
                                    height:250
                                }}
                                Index={this.state.Index}
                            />
                          </View>
                          <View style={styles.slide3}>
                            <Text style={styles.text}>项目进度指数上升</Text>
                            <AscensionEfficiencyAnimation
                                style={{
                                    width:250,
                                    height:250
                                }}
                                Index={this.state.Index}
                            />
                            <TouchableOpacity
                                style={{
                                    width:50,
                                    height:50,
                                    backgroundColor:'blue',
                                    borderRadius:2,
                                }}
                                onPress={this._DoneBtnClick}
                            >
                                <Text style={{color:'#fff'}}>欢迎进入云联App</Text>
                            </TouchableOpacity>
                          </View>
                        </Swiper>
                    </View>
                :
                    <StartImagePage navigate={navigate}/>
            }
        </View>
    );
  }
}

const styles = StyleSheet.create({
    slide1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#9DD6EB',
    },
    slide2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#97CAE5',
    },
    slide3: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#92BBD9',
    },
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold',
    }
});
