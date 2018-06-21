/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 * Created by Administrator on 2018/6/19.
 */

import {
  BackHandler,
  Platform
} from 'react-native';

import {observable,action} from 'mobx';
import Toast from 'teaset/components/Toast/Toast';



//创建有关监听安卓返回键的全局实例
class GlobalBackAndroid {

    @observable
    //监听安卓返回键实现点两次返回
    _onBackAndroid = () => {
      if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
        //最近2秒内按过back键，可以退出应用。
        BackHandler.exitApp()
      }
      this.lastBackPressed = Date.now();
      Toast.show({
        text: `再按一次退出应用`,
        position: 'bottom',
        duration: 2000,
      });
      return true;
    }


    @observable
    //添加监听安卓返回键
    AddBackAndroid=()=>{
        if (Platform.OS === 'android') {
          BackHandler.addEventListener('hardwareBackPress', this._onBackAndroid);
        }
    }

    @observable
    //删除监听安卓返回键
    DeleteBackAndroid=()=>{
        if (Platform.OS === 'android') {
          BackHandler.removeEventListener('hardwareBackPress', this._onBackAndroid);
        }
    }
}

let NewGlobalBackAndroid=new GlobalBackAndroid();
export default NewGlobalBackAndroid;

