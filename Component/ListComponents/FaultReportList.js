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
 *     2018/4/19.
 */

import React, { Component,PureComponent } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput
} from 'react-native';


import Picker from 'react-native-picker';
import DateTimePicker from 'react-native-modal-datetime-picker';
import Overlay from 'teaset/components/Overlay/Overlay';


export default class FaultReportList extends PureComponent{
  state = {
    isDateTimePickerVisible: false,
    FaultPeople:'',
    SelectSystem:'',
    HappenTime:'',
    Location:'',
    Title:'',
    Content:'',
  };

  //构造了保障人选择系统的滚动选择器,并构建了相关数据
  ReportFaultPicker=()=>{
    let ReportFaultData = ['张三','李四','王二狗','张全蛋','无名氏'];
    Picker.init({
        pickerData: ReportFaultData,
        isLoop:true,
        pickerConfirmBtnText:'确定    ',
        pickerCancelBtnText:'    取消',
        pickerTitleText:'选择系统',
        pickerConfirmBtnColor:[52,135,234,1],
        pickerCancelBtnColor:[102,102,102,1],
        pickerBg:[255,255,255,1],
        selectedValue: [1],
        pickerFontSize:14,
        onPickerConfirm: data => {
            this.setState({
                FaultPeople:data
            })
        },
        onPickerCancel: data => {
            this.setState({
                FaultPeople:''
            })
        },
        onPickerSelect: data => {
            this.setState({
                FaultPeople:data
            })
        }
    });
    Picker.show();
  }

    //构造了选择系统的滚动选择器,并构建了相关数据
  SelectSystemPicker=()=>{
    let SystemData = [
        {
            配电系统: [
                {
                    弱电系统: ['强电系统', '弱电系统', 'XX系统', 'XXX系统']
                },
                {
                    强电系统: ['强电系统', '弱电系统', 'XX系统', 'XXX系统']
                },
                {
                    XX系统: ['强电系统', '弱电系统', 'XX系统', 'XXX系统']
                }
            ]
        },
        {
            配电系统2: [
                {
                    弱电系统2: ['强电系统', '弱电系统', 'XX系统', 'XXX系统']
                },
                {
                    强电系统2: ['强电系统', '弱电系统', 'XX系统', 'XXX系统']
                },
                {
                    XX系统2: ['强电系统', '弱电系统', 'XX系统', 'XXX系统']
                }
            ]
        },
        {
            配电系统3: [
                {
                    弱电系统3: ['强电系统', '弱电系统', 'XX系统', 'XXX系统']
                },
                {
                    强电系统3: ['强电系统', '弱电系统', 'XX系统', 'XXX系统']
                },
                {
                    XX系统3: ['强电系统', '弱电系统', 'XX系统', 'XXX系统']
                }
            ]
        }
    ];
    Picker.init({
        pickerData: SystemData,
        isLoop:true,
        pickerConfirmBtnText:'确定    ',
        pickerCancelBtnText:'    取消',
        pickerTitleText:'选择系统',
        pickerConfirmBtnColor:[52,135,234,1],
        pickerCancelBtnColor:[102,102,102,1],
        pickerBg:[255,255,255,1],
        selectedValue: [1],
        pickerFontSize:14,
        onPickerConfirm: data => {
            this.setState({
                SelectSystem:data
            })
        },
        onPickerCancel: data => {
            this.setState({
                SelectSystem:''
            })
        },
        onPickerSelect: data => {
            this.setState({
                SelectSystem:data
            })
        }
    });
    Picker.show();
  }

    //打开时间选择器时触发的回调函数
  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

    //关闭时间选择器时触发的回调函数
  _hideDateTimePicker = () => this.setState({
    isDateTimePickerVisible: false,
  });

    //确定或者关闭时间选择器时触发的回调函数
  _handleDatePicked = (date) => {
    this._hideDateTimePicker();
  };

    //构造了位置的滚动选择器,并构建了相关数据
  LocationPicker=()=>{
    let LocationData = [
        {
            A数据中心: ['全部','A座','B座','C座','D座','E座','F座','G座',]
        },
        {
            B数据中心: ['全部','A座','B座','C座','D座','E座','F座','G座',]
        },
        {
            C数据中心: ['全部','A座','B座','C座','D座','E座','F座','G座',]
        },
        {
            D数据中心: ['全部','A座','B座','C座','D座','E座','F座','G座',]
        },
        {
            E数据中心: ['全部','A座','B座','C座','D座','E座','F座','G座',]
        },
        {
            F数据中心: ['全部','A座','B座','C座','D座','E座','F座','G座',]
        },
        {
            G数据中心: ['全部','A座','B座','C座','D座','E座','F座','G座',]
        },
        {
            H数据中心: ['全部','A座','B座','C座','D座','E座','F座','G座',]
        },
    ];
    Picker.init({
        pickerData: LocationData,
        isLoop:true,
        pickerConfirmBtnText:'确定    ',
        pickerCancelBtnText:'    取消',
        pickerTitleText:'选择位置',
        pickerConfirmBtnColor:[52,135,234,1],
        pickerCancelBtnColor:[102,102,102,1],
        pickerBg:[255,255,255,1],
        selectedValue: [1],
        pickerFontSize:14,
        onPickerConfirm: data => {
            this.setState({
                Location:data
            })
        },
        onPickerCancel: data => {
            this.setState({
                Location:''
            })
        },
        onPickerSelect: data => {
            this.setState({
                Location:data
            })
        }
    });
    Picker.show();
  }

    //构造输入标题的弹出浮层框
  overlayTitleView = (
    <Overlay.PopView
      style={{alignItems: 'center', justifyContent: 'center'}}
      >
      <View
        style={{
            backgroundColor: '#fff',
            minWidth: 260,
            minHeight: 180,
            borderRadius: 15,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
          <TextInput
              style={{
                width:100,
              }}
              placeholder={'请输入标题'}
              onChangeText={(text)=>this.setState({
                Title:text
              })}
          ></TextInput>
      </View>
    </Overlay.PopView>
  );

    //构造输入描述的弹出浮层框
  overlayContentView = (
    <Overlay.PopView
      style={{alignItems: 'center', justifyContent: 'center'}}
      >
      <View style={{backgroundColor: '#fff', minWidth: 260, minHeight: 180, borderRadius: 15, justifyContent: 'center', alignItems: 'center'}}>
          <TextInput
              style={{
                width:100,
              }}
              underlineColorAndroid='#FFF'
              multiline={true}
              numberOfLines={10}
              placeholder={'请输入描述'}
              onChangeText={(text) => this.setState({Content:text})}
          ></TextInput>
      </View>
    </Overlay.PopView>
  );


  render() {
    const {
        FaultPeople,
        SelectSystem,
        HappenTime,
        Location,
        Title,
        Content,
    }=this.state;
    const {navigate}=this.props;
    return (
        <View
            style={{flex:1,backgroundColor:'#FFF',marginTop:10}}
        >
            {/*故障人模块*/}
            <TouchableOpacity
                style={{
                    flexDirection:'row',
                    marginLeft:10,
                    marginRight:10,
                    justifyContent:'space-between',
                    alignItems:'center',
                    height:50,
                    borderBottomColor:'#e5e5e5',
                    borderBottomWidth:StyleSheet.hairlineWidth,
                }}
                onPress={this.ReportFaultPicker}
            >
                <Text>故障人</Text>
                <View
                    style={{
                        flexDirection:'row',
                        alignItems:'center',
                    }}>
                    <Text>{FaultPeople?FaultPeople:'暂未填写'}</Text>
                    <Image
                        style={{
                          width:20,
                          height:20,
                        }}
                        source={require('../../Icon/公用图标/ForwardWhite.png')}
                    />
                </View>
            </TouchableOpacity>
            {/*选择系统模块*/}
            <TouchableOpacity
                onPress={this.SelectSystemPicker}
                style={{
                    flexDirection:'row',
                    marginLeft:10,
                    marginRight:10,
                    justifyContent:'space-between',
                    alignItems:'center',
                    height:50,
                    borderBottomColor:'#e5e5e5',
                    borderBottomWidth:StyleSheet.hairlineWidth,
                }}
            >
                <Text>选择系统</Text>
                <View
                    style={{
                        flexDirection:'row',
                        alignItems:'center',
                    }}>
                    <Text>{SelectSystem?SelectSystem:'暂未填写'}</Text>
                    <Image
                        source={require('../../Icon/公用图标/ForwardWhite.png')}
                        width='20'
                        height='20'
                    />
                </View>

            </TouchableOpacity>
            {/*选择发生时间模块*/}
            <TouchableOpacity
                onPress={this._showDateTimePicker}
                style={{
                    flexDirection:'row',
                    marginLeft:10,
                    marginRight:10,
                    justifyContent:'space-between',
                    alignItems:'center',
                    height:50,
                    borderBottomColor:'#e5e5e5',
                    borderBottomWidth:StyleSheet.hairlineWidth,
                }}
            >
                <Text>发生时间</Text>
                <View
                    style={{
                        flexDirection:'row',
                        alignItems:'center',
                    }}>
                    <Text>{HappenTime?HappenTime:'暂未填写'}</Text>
                    <Image
                        source={require('../../Icon/公用图标/ForwardWhite.png')}
                        width='20'
                        height='20'
                    />
                </View>
            </TouchableOpacity>
            <DateTimePicker
              mode='datetime'
              isVisible={this.state.isDateTimePickerVisible}
              onConfirm={this._handleDatePicked}
              onCancel={this._hideDateTimePicker}
              cancelTextStyle={{
                color:'red'
              }}
            />
            {/*选择位置模块*/}
            <TouchableOpacity
                onPress={this.LocationPicker}
                style={{
                    flexDirection:'row',
                    marginLeft:10,
                    marginRight:10,
                    justifyContent:'space-between',
                    alignItems:'center',
                    height:50,
                    borderBottomColor:'#e5e5e5',
                    borderBottomWidth:StyleSheet.hairlineWidth,
                }}
            >
                <Text>位置</Text>
                <View
                    style={{
                        flexDirection:'row',
                        alignItems:'center',
                    }}>
                    <Text>{Location?Location:'暂未填写'}</Text>
                    <Image
                        source={require('../../Icon/公用图标/ForwardWhite.png')}
                        width='20'
                        height='20'
                    />
                </View>
            </TouchableOpacity>
            {/*选择标题模块*/}
            <TouchableOpacity
                onPress={()=>Overlay.show(this.overlayTitleView)}
                style={{
                    flexDirection:'row',
                    marginLeft:10,
                    marginRight:10,
                    justifyContent:'space-between',
                    alignItems:'center',
                    height:50,
                    borderBottomColor:'#e5e5e5',
                    borderBottomWidth:StyleSheet.hairlineWidth,
                }}
            >
                <Text>标题</Text>
                <View
                    style={{
                        flexDirection:'row',
                        alignItems:'center',
                    }}>
                    <Text>{Title?Title:'暂未填写'}</Text>
                    <Image
                        source={require('../../Icon/公用图标/ForwardWhite.png')}
                        width='20'
                        height='20'
                    />
                </View>
            </TouchableOpacity>
            {/*请输入描述模块*/}
            <TouchableOpacity
                onPress={()=>Overlay.show(this.overlayContentView)}
                style={{
                    flexDirection:'row',
                    marginLeft:10,
                    marginRight:10,
                    justifyContent:'space-between',
                    alignItems:'center',
                    height:50,
                    borderBottomColor:'#e5e5e5',
                    borderBottomWidth:StyleSheet.hairlineWidth,
                }}
            >
                <Text>请输入描述</Text>
                <View
                    style={{
                        flexDirection:'row',
                        alignItems:'center',
                    }}>
                    <Text>{Content?Content:'暂未填写'}</Text>
                    <Image
                        source={require('../../Icon/公用图标/ForwardWhite.png')}
                        width='20'
                        height='20'
                    />
                </View>
            </TouchableOpacity>
            {/*选择关联设备模块*/}
            <TouchableOpacity
                onPress={()=>navigate('SelectEquipmentPage')}
                style={{
                    flexDirection:'row',
                    marginLeft:10,
                    marginRight:10,
                    justifyContent:'space-between',
                    alignItems:'center',
                    height:50,
                    borderBottomColor:'#e5e5e5',
                    borderBottomWidth:StyleSheet.hairlineWidth,
                }}
            >
                <Text>关联设备</Text>
                <View
                    style={{
                        flexDirection:'row',
                        alignItems:'center',
                    }}>
                    <Text>暂未填写</Text>
                    <Image
                        source={require('../../Icon/公用图标/ForwardWhite.png')}
                        width='20'
                        height='20'
                    />
                </View>
            </TouchableOpacity>
            {/*上传附件模块*/}
            <TouchableOpacity
                onPress={this.SelectSystemPicker}
                style={{
                    flexDirection:'row',
                    marginLeft:10,
                    marginRight:10,
                    justifyContent:'space-between',
                    alignItems:'center',
                    height:50,
                    borderBottomColor:'#e5e5e5',
                    borderBottomWidth:StyleSheet.hairlineWidth,
                }}
            >
                <Text>附件</Text>
                <View
                    style={{
                        flexDirection:'row',
                        alignItems:'center',
                    }}>
                    <Text>暂未填写</Text>
                    <Image
                        source={require('../../Icon/公用图标/ForwardWhite.png')}
                        style={{
                          width:20,
                          height:20,
                        }}
                    />
                </View>
            </TouchableOpacity>
            {/*点击其他空白消失*/}
            <TouchableOpacity
                style={{
                    flex:1,
                }}
                onPress={()=>Picker.hide()}
            >
            </TouchableOpacity>
        </View>
    );
  }
}

const styles = StyleSheet.create({

});
