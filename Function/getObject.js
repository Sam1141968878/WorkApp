/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 * Created by Administrator on 2018/5/2.
 */

import {
  AsyncStorage,
} from 'react-native';

//获取数据
const getObject=(key)=>{
    AsyncStorage.getItem(key, (error, object) => {
        if (error) {
            console.log('Error:' + error.message);
        } else {
            return(object);
        }
    })}

export default getObject;

