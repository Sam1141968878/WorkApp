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
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  FlatList
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

//首页的Icon集合
const HomeIconList=[
    // {
    //     uri:require('../../../Icon/首页图标/FailureToReport.png'),
    //     name:'故障上报',
    //     id:1
    // },
    // {
    //     uri:require('../../../Icon/首页图标/ServiceRequest.png'),
    //     name:'服务请求',
    //     id:2
    // },
    // {
    //     uri:require('../../../Icon/首页图标/ConstructionApplication.png'),
    //     name:'施工申请',
    //     id:3
    // },
    // {
    //     uri:require('../../../Icon/首页图标/AssetsWatch.png'),
    //     name:'资产查看',
    //     id:4
    // },
    {
        uri:require('../../../Icon/首页图标/DutyWatch.png'),
        name:'值班任务',
        id:5
    },
    {
        uri:require('../../../Icon/首页图标/InspectionPlan.png'),
        name:'巡检计划',
        id:6
    },
    // {
    //     uri:require('../../../Icon/首页图标/Knowledge.png'),
    //     name:'知识库',
    //     id:7
    // },
    // {
    //     uri:require('../../../Icon/首页图标/PUE查看.png'),
    //     name:'PUE查看',
    //     id:8
    // },
    // {
    //     uri:require('../../../Icon/首页图标/EnergyEfficiencyWatch.png'),
    //     name:'能效查看',
    //     id:9
    // },
    // {
    //     uri:require('../../../Icon/首页图标/WeeklyWatch.png'),
    //     name:'周报查看',
    //     id:10
    // },
    // {
    //     uri:require('../../../Icon/首页图标/MonthlyReportWatch.png'),
    //     name:'月报查看',
    //     id:11
    // },
    // {
    //     uri:require('../../../Icon/首页图标/AnnualReportWatch.png'),
    //     name:'年报查看',
    //     id:12
    // },
    // {
    //     uri:require('../../../Icon/首页图标/CapacityWatch.png'),
    //     name:'容量查看',
    //     id:13
    // },
    // {
    //     uri:require('../../../Icon/首页图标/More.png'),
    //     name:'更多',
    //     id:14
    // },
    // {
    //     uri:require('../../../Icon/首页图标/NullImg.png'),
    //     name:'',
    //     id:15
    // },
]

export default class HomePageContent extends PureComponent{
  render() {
    const {navigate}=this.props;
    return (
      <LinearGradient
          start={{x: 0.25, y: 0.25}} end={{x: 1.0, y: 1.0}}
          locations={[0.1,0.5,1]}
          colors={['#02265f', '#06204d', '#061135']}
          style={{
            width:'100%',
            height:Dimensions.get('window').height-195,
          }}>
           <FlatList
            columnWrapperStyle={{
                justifyContent:'space-around',
                marginTop:20,
            }}
            horizontal={false}
            numColumns={3}
            data={HomeIconList}
            renderItem={({item,separators})=>(
                <TouchableOpacity
                    activeOpacity={0.6}
                    style={{
                        alignItems:'center',
                        width:60,
                        height:60,
                    }}
                    onPress={()=>navigate('HomePublicPage',{
	                            name:item.name,
	                            id:item.id,
	                            navigate:navigate
                            })}
                >
                    <Image
                        source={item.uri}
                        style={{
                            width:40,
                            height:40
                        }}
                    />
                    <Text
                        style={{
                            color:'#FFF',
                            fontSize:12,
                            marginTop:2
                        }}
                    >{item.name}</Text>
                </TouchableOpacity>

            )}
            keyExtractor={item=>item.id}
           />
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({

});
