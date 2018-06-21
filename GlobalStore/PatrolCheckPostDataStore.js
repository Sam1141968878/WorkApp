/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 * Created by Administrator on 2018/6/1.
 */

import {observable,action} from 'mobx';


//创建有关巡检提交的mobx状态数据类
class PatrolCheckPostDataStore {

    //创建和巡检提交有关的observable数据格式,待后续添加
    @observable
    SubmitPatrolCheckData=[]


}

let NewPatrolCheckPostDataStore=new PatrolCheckPostDataStore();
export default NewPatrolCheckPostDataStore;


