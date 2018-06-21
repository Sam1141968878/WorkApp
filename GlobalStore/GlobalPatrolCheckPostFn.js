/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 * Created by Administrator on 2018/6/6.
 */

import {observable,action} from 'mobx';


//创建有关巡检,待我处理巡检的提交相关实例
class GlobalPatrolCheckPostFn {

    @observable
    datas=[]

    @observable
    datasObjects={}


}

let NewGlobalPatrolCheckPostFn=new GlobalPatrolCheckPostFn();
export default NewGlobalPatrolCheckPostFn;

