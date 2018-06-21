/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 * Created by Administrator on 2018/4/28.
 */

import {observable,action} from 'mobx';
import {BackHandler}from 'react-native'

class GlobalStore {
    //mobx关联的观察者
    @observable User='';
    @observable PassWord='';
    @observable ServerParameters='';
    @observable GlobalToken='';
    @observable LandingState=false;
    @observable onBackAndroid=()=>{
        if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
          //最近2秒内按过back键，可以退出应用。
          // BackHandler.exitApp()
          return false;
        }
        this.lastBackPressed = Date.now();
        alert('再按一次退出应用');
        return true;
    }
    @observable AddBackHandler=()=>{
        BackHandler.addEventListener('hardwareBackPress', this.onBackAndroid);
    }
    @observable RemoveBackHandler=()=>{
        BackHandler.removeEventListener('hardwareBackPress', this.onBackAndroid);
    }
    @observable GuideImageState=true;
}

let NewGlobalStore=new GlobalStore();
export default NewGlobalStore;
