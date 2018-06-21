/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 * Created by Administrator on 2018/5/2.
 */

import {
  AsyncStorage,
} from 'react-native';

//保存数据
const setObject=(key,object)=>{
    AsyncStorage.setItem(key, JSON.stringify(object), () => {});
}

export default setObject;

