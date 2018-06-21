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
 *     2018/4/27.
 */

import React, { Component,PureComponent } from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  ActivityIndicator
} from 'react-native';



import AwaitMeManagePageItem from './AwaitMeManagePageItem'
import fetchPost from '../../../Function/FetchPost'
import realm from '../../../RealmLocalStore/RealmLocalStore'


export default class AwaitMeManageTwoPage extends PureComponent{
  state={
    AwaitMeManageTwoPageData:[],
    NullState:false,
  }

  UserInformationData=realm.objects('UserInformation')
  TokenData=realm.objects('Token')

  componentDidMount() {
      fetchPost(`http://${this.UserInformationData[0].serverParameters}/workflow`,{
      	"access_token": this.TokenData[0].value,
      	"type": "todolist_get",
      	"data": {
	    	"condition": {
	    		"status": "待处理",
	    		"model": "",
	    		"words": "",
	    		"sid": "",
	    		"name": ""
	    	},
	    	"page": {
	    		"page_size": "100",
	    		"page_number": "1"
	    	}
	    }
      }).then((res)=>
        this.setState({
            AwaitMeManageTwoPageData:res.data.items
        })
      )
      setTimeout(()=>this.setState({
        NullState:true
      }),10000)
  }

  render() {
    return (
      <ScrollView
        style={{
            marginTop:10,
          }}
      >
          {
            this.state.AwaitMeManageTwoPageData.length!=0
            ?
                <View>
                  {
                      this.state.AwaitMeManageTwoPageData.map((item,index)=>
                          <AwaitMeManagePageItem
                              Title={`${item.name}详情`}
                              title={item.name}
                              state={item.status}
                              content={item.content}
                              type={item.model}
                              startTime={item.occurrence_time}
                              endTime={item.endTime?item.endTime:'暂无结束时间'}
                              key={index}
                              sid={item.sid}
                              navigate={this.props.navigate}
                          />
                      )
                  }
                </View>
            :
                <View>
                    {
                        this.state.NullState
                        ?
                            <Text
                                style={{
                                  marginLeft:150,
                                  marginTop:20
                                }}
                            >暂无数据</Text>
                        :
                            <View>
                                <Text
                                    style={{
                                      marginLeft:130,
                                      marginTop:20
                                    }}
                                >正在加载数据中</Text>
                                <ActivityIndicator/>
                            </View>
                    }
                </View>
          }
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({

});
