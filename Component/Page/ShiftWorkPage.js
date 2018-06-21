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
  Platform,
  StyleSheet,
  View,
  Image,
  StatusBar,
  Dimensions,
  ScrollView,
  Text,
  BackHandler,
} from 'react-native';

import PublicHeader from '../PublicComponents/PublicHeader'
import PublicTopTab from '../PublicComponents/PublicTopTab'
import ShiftWorkPageList from '../PageComponents/ShiftWorkPage/ShiftWorkPageList'
import {observable,action} from 'mobx';
import {observer} from 'mobx-react';
import NewGlobalStore from "../../GlobalStore/GlobalStore";
import RedPigLoadingAnimation from '../AnimationComponent/RedPigLoadingAnimation'
import { Calendar, CalendarList, Agenda,LocaleConfig } from 'react-native-calendars';
import realm from '../../RealmLocalStore/RealmLocalStore'
import fetchPost from '../../Function/FetchPost'


LocaleConfig.locales['fr'] = {
  monthNames: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
  monthNamesShort: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
  dayNames: ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'],
  dayNamesShort: ['日','一','二','三','四','五','六']
};

LocaleConfig.defaultLocale = 'fr';

const vacation = {key:'vacation', color: '#88cfdd'};
const massage = {key:'massage', color: '#7facdb'};
const workout = {key:'workout', color: '#b8b3d8'};

const DateData={
    '2018-06-01': {dots: [vacation]},
    '2018-06-18': {dots: [vacation]},
    '2018-06-19': {dots: [vacation]},
    '2018-06-20': {dots: [vacation]},
    '2018-06-21': {dots: [vacation]}
}

const {height, width} = Dimensions.get('window');

@observer
export default class ShiftWorkPage extends PureComponent {

    state = {
        lazyLoading: true,
        onPressDay: '',
        onPressMonth: '',
        onPressGetDay: '',
        showToday: false,
        openRightList: false,
        markedDates:[]
    }

    TokenData = realm.objects('Token')
    UserInformationData = realm.objects('UserInformation')

    Addzero=(num)=>{
        if(num>10){
            return num
        }  else{
            return '0'+num
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                    lazyLoading: false
                })
        },600)
    }

    //点击某日时的回调函数
    _onDayPress = (day) => {
        this.setState(
            {
                onPressDay: day.day,
                onPressMonth: day.month,
                openRightList: true,
            }, () => {
                let nowDate = new Date();
                let nowDay = nowDate.getDate();
                let nowMonth = nowDate.getMonth()+1;
                let onPressDate = new Date(day.timestamp)

                fetchPost(`http://${this.UserInformationData[0].serverParameters}/onduty`,
                    {
                      "access_token": this.TokenData[0].value,
                      "type": "dutylist_get",
                      "data": {
                        "begin_time": day.dateString,
                        "end_time": day.dateString
                      }
                    }
                ).then((message)=>{
                    this.setState({
                        ShiftWorkDatas:message
                    })
                })

                //将天转化为星期
                this.setState(
                    {
                        onPressGetDay: onPressDate.getDay()
                    },
                    () => {
                        if (this.state.onPressGetDay === 0) {
                            this.setState(
                                {
                                    onPressGetDay: '星期日'
                                })
                        }
                        else if (this.state.onPressGetDay === 1) {
                            this.setState(
                                {
                                    onPressGetDay: '星期一'
                                })
                        }
                        else if (this.state.onPressGetDay === 2) {
                            this.setState(
                                {
                                    onPressGetDay: '星期二'
                                })
                        }
                        else if (this.state.onPressGetDay === 3) {
                            this.setState(
                                {
                                    onPressGetDay: '星期三'
                                })
                        }
                        else if (this.state.onPressGetDay === 4) {
                            this.setState(
                                {
                                    onPressGetDay: '星期四'
                                })
                        }
                        else if (this.state.onPressGetDay === 5) {
                            this.setState(
                                {
                                    onPressGetDay: '星期五'
                                })
                        }
                        else {
                            this.setState(
                                {
                                    onPressGetDay: '星期六'
                                })
                        }
                    }
                )

                //如果天和月都等于今天的天和月就让今天显示
                if (nowDay === day.day&&nowMonth===day.month) {
                    this.setState(
                        {
                            showToday: true
                        })
                }
                else {
                    this.setState(
                        {
                            showToday: false
                        })
                }
            }
        );
    }

   //监听安卓Back覆盖全局的监听安卓返回
   _onThisBackAndroid=()=>{
     return this.props.goBack()
   }

   componentWillMount() {
       if (Platform.OS === 'android') {
         BackHandler.addEventListener('hardwareBackPress', this._onThisBackAndroid);
       }
       fetchPost(`http://${this.UserInformationData[0].serverParameters}/onduty`,
           {
             "access_token": this.TokenData[0].value,
             "type": "dutylist_getdate_app",
	         "date": "2018"
           }
       ).then((res)=>{
           if(res.errcode==='00000'){
               this.state.markedDates
               this.setState({
                   markedDates:res.datas
               },()=>console.log(this.state.markedDates))
           }else{
               console.log(res.errcode)
           }
       })
   }

  render() {
    const {goBack}=this.props;
    return (
      <View style={{flex:1}}>
          {
            this.state.lazyLoading
            ?
                <RedPigLoadingAnimation/>
            :
                <View
                    style={{
                        flex:1,
                    }}
                >
                    <StatusBar
                        backgroundColor='rgba(0,0,0,0)'
                        translucent={true}
                    />
                    <PublicHeader
                        type='third'
                        Title='值班任务'
                        goBack={goBack}
                    />
                    <ScrollView style={{flex:1}}>
                        <CalendarList
                          disableMonthChange={true}
                          pagingEnabled={true}
                          horizontal={true}
                          firstDay={1}
                          hideArrows={false}
                          hideExtraDays={false}
                          onDayPress={this._onDayPress}
                          style={styles.calendar}
                          markedDates={DateData}
                          markingType={'multi-dot'}
                        />
                        <View
                            style={{
                                backgroundColor:'#fff',
                                marginTop:10,
                                flexDirection:'row',
                            }}
                        >
                            <View
                                style={{
                                    width:90,
                                    height:50,
                                    marginTop:95,
                                    marginLeft:10,
                                    flexDirection:'row',
                                    justifyContent:'space-around',
                                    alignItems:'center'
                                }}
                            >
                                <View
                                    style={{
                                        width:50,
                                        height:50,
                                        justifyContent:'center',
                                        alignItems:'center',
                                    }}
                                >
                                    {
                                        this.state.onPressMonth
                                        ?
                                        <View
                                            style={{
                                                flexDirection:'row',
                                            }}
                                        >
                                            <Text
                                                style={{
                                                    color:'#656766',
                                                    fontSize:22,
                                                }}
                                            >{this.state.onPressMonth}月</Text>
                                            <Text
                                                style={{
                                                    color:'#656766',
                                                    fontSize:22,
                                                }}
                                            >{this.state.onPressDay}日</Text>
                                        </View>
                                        :
                                            <View/>
                                    }

                                    <Text
                                        style={{
                                            color:'#656667',
                                            fontSize:14,
                                            marginTop:5,
                                        }}
                                    >{this.state.onPressGetDay}</Text>
                                </View>
                                <View
                                    style={{
                                        position:'absolute',
                                        top:-50,
                                        left:28
                                    }}
                                >
                                    {
                                        this.state.showToday
                                        ?
                                            <View
                                                style={{
                                                    width:35,
                                                    height:35,
                                                    backgroundColor:'#3b7dc0',
                                                    borderRadius:18,
                                                    alignItems:'center',
                                                    justifyContent:'center'
                                                }}
                                            >
                                                <Text
                                                    style={{
                                                        color:'#fff',
                                                        fontSize:20,
                                                    }}
                                                >今</Text>
                                            </View>
                                        :
                                            <View></View>
                                    }
                                </View>
                            </View>
                            {
                                this.state.openRightList
                                ?
                                    <ShiftWorkPageList
                                        datas={this.state.ShiftWorkDatas}
                                    />
                                :
                                    <View
                                        style={{
                                            minHeight:height-430
                                        }}
                                    >
                                        <Text
                                            style={{
                                                marginTop:90,
                                                fontSize:14
                                            }}
                                        >点击日历查看当前值班任务</Text>
                                    </View>
                            }
                        </View>
                    </ScrollView>
                </View>
          }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  calendar: {
    borderTopWidth: 1,
    paddingTop: 5,
    borderBottomWidth: 1,
    borderColor: '#eee',
    height: 360
  },
  text: {
    textAlign: 'center',
    borderColor: '#bbb',
    padding: 10,
    backgroundColor: '#eee'
  },
  container: {
    flex: 1,
    backgroundColor: 'gray'
  }
});
