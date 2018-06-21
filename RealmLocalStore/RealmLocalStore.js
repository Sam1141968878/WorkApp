/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 * Created by Administrator on 2018/5/16.
 */


const Realm = require('realm');

    //初始化一个记录Token的表
    const TokenDataRealm={
        name:'Token',
        properties:{
            value: 'string'
        }
    }

    //初始化一个记录用户名和用户密码和用户服务器设置的表
    const UserInformationRealm={
        name:'UserInformation',
        properties:{
            user: {type: 'string', default: ''},
            passWord: {type: 'string', default: ''},
            serverParameters: {type: 'string', default: ''},
        }
    }


    //初始化一个记录引导图状态的表
    const GuideImageStateRealm={
        name:'GuideImageState',
        properties:{
            state: {type: 'bool', default: true},
        }
    }

    //初始化记录用户登陆状态的表
    const UserLandingStateRealm={
        name:'UserLandingState',
        properties:{
            state: {type: 'bool', default: false},
        }
    }

    //初始化记录用户保存账号和密码状态的表
    const SaveUserPassWordRealm={
        name:'SaveUserPassWord',
        properties:{
            SaveUserState: 'bool',
            SavePassWordState: 'bool',
        }
    }


    // 初始化带有 Car 和 Person 模型的 Realm 实例
    let realm = new Realm(
        {
            schema:
                [
                    TokenDataRealm,
                    UserInformationRealm,
                    UserLandingStateRealm,
                    GuideImageStateRealm,
                    SaveUserPassWordRealm
                ]
        }
    );

export default realm;

