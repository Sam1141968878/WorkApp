/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 * Created by Administrator on 2018/6/12.
 */

import {observable,action} from 'mobx';


//创建有关全局启动图状态的实例
class GlobalStartImageState{

    @observable
    goToStartImagePageState=true

}

let NewGlobalStartImageState=new GlobalStartImageState();
export default NewGlobalStartImageState;




