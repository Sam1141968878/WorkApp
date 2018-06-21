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
 *     2018/4/17.
 */

import React, { Component,PureComponent } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';



//本组件有几种形式,且方法可以通过外部传入,满足基本头部需求,外部可以传入Title,RightText等;
export default class PublicHeader extends PureComponent{
  render() {
    const {title,goBack}=this.props;
    if(this.props.type==='one'){
        return (
            //右缀带搜索的带标题的头部
            <View
                style={{
                    height:60,
                    width:'100%',
                    backgroundColor:'#2250a9',
                }}>
                <View
                    style={{
                      marginRight:'5%',
                      flexDirection:'row',
                      justifyContent:'space-between',
                      alignItems:'center',
                      marginTop:15,
                    }}>
                    <TouchableOpacity
                        onPress={goBack}
                        style={{
                            width:60,
                            height:45,
                            justifyContent:'center',
                            paddingLeft:'3%',
                        }}
                    >
                      <Image
                          style={{
                            width:20,
                            height:20,
                          }}
                          source={require('../../Icon/公用图标/BackWhite.png')}
                      />
                    </TouchableOpacity>
                    <Text
                        numberOfLines={1}
                        style={{
                          fontSize:16,
                          color:'#FFF',
                          marginTop:2,
                          marginLeft:-15,
                        }}>{this.props.Title}</Text>
                    <TouchableOpacity
                        onPress={this.props.fn}
                    >
                      <Image
                          style={{
                            width:20,
                            height:20,
                          }}
                          source={require('../../Icon/公用图标/SearchWhite.png')}
                      />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }else if(this.props.type==='two'){
        return(
            //右缀带加号的带标题的头部
            <View
                style={{
                    height:60,
                    width:'100%',
                    backgroundColor:'#2250a9',
                }}>
                <View
                    style={{
                      marginRight:'5%',
                      flexDirection:'row',
                      justifyContent:'space-between',
                      alignItems:'center',
                      marginTop:15,
                    }}>
                    <TouchableOpacity
                        onPress={goBack}
                        style={{
                            width:60,
                            height:45,
                            justifyContent:'center',
                            paddingLeft:'4%'
                        }}
                    >
                      <Image
                          style={{
                            width:20,
                            height:20,
                          }}
                          source={require('../../Icon/公用图标/BackWhite.png')}
                      />
                    </TouchableOpacity>
                    <Text
                        numberOfLines={1}
                        style={{
                          fontSize:16,
                          color:'#FFF',
                          marginTop:2,
                          marginLeft:-10,
                        }}>{this.props.Title}</Text>
                    <TouchableOpacity>
                      <Image
                          style={{
                            width:20,
                            height:20,
                          }}
                          source={require('../../Icon/公用图标/AddWhite.png')}
                      />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }else if(this.props.type==='third'){
        return(
            //右缀什么都不带的带标题的头部
            <View
                style={{
                    height:60,
                    width:'100%',
                    backgroundColor:'#2250a9',
                }}>
                <View
                    style={{
                      marginRight:'5%',
                      flexDirection:'row',
                      justifyContent:'space-between',
                      alignItems:'center',
                      marginTop:15,
                    }}>
                    <TouchableOpacity
                        onPress={goBack}
                        style={{
                            width:60,
                            height:45,
                            justifyContent:'center',
                            paddingLeft:'4%',
                        }}
                    >
                      <Image
                          style={{
                            width:20,
                            height:20,
                          }}
                          source={require('../../Icon/公用图标/BackWhite.png')}
                      />
                    </TouchableOpacity>
                    <Text
                        numberOfLines={1}
                        style={{
                          fontSize:16,
                          color:'#FFF',
                          marginTop:2,
                        }}>{this.props.Title}</Text>
                    <View style={{width:40,height:20}}/>
                </View>
            </View>
        )
    }else if(this.props.type==='four'){
        //右缀什么都不带的带标题的待我处理超长头部
        return(
            //右缀什么都不带的带标题的头部
            <View
                style={{
                    height:60,
                    width:'100%',
                    backgroundColor:'#2250a9',
                }}>
                <View
                    style={{
                      marginRight:'5%',
                      flexDirection:'row',
                      justifyContent:'space-between',
                      alignItems:'center',
                      marginTop:15,
                    }}>
                    <TouchableOpacity
                        onPress={goBack}
                        style={{
                            width:60,
                            height:45,
                            justifyContent:'center',
                            paddingLeft:'4%',
                        }}
                    >
                      <Image
                          style={{
                            width:20,
                            height:20,
                          }}
                          source={require('../../Icon/公用图标/BackWhite.png')}
                      />
                    </TouchableOpacity>
                    <Text
                        numberOfLines={1}
                        style={{
                          width:200,
                          fontSize:16,
                          color:'#FFF',
                          marginTop:2,
                        }}>{this.props.Title}</Text>
                    <View style={{width:40,height:20}}/>
                </View>
            </View>
        )
    } else{
        return(
            //右缀带文字(文字带回调方法)的带标题的头部
            <View
                style={{
                    height:60,
                    width:'100%',
                    backgroundColor:'#2250a9',
                }}>
                <View
                    style={{
                      marginRight:'5%',
                      flexDirection:'row',
                      justifyContent:'space-between',
                      alignItems:'center',
                      marginTop:15,
                    }}>
                    <TouchableOpacity
                        onPress={goBack}
                        style={{
                            width:60,
                            height:45,
                            justifyContent:'center',
                            paddingLeft:'4%',
                        }}
                    >
                      <Image
                          style={{
                            width:20,
                            height:20,
                          }}
                          source={require('../../Icon/公用图标/BackWhite.png')}
                      />
                    </TouchableOpacity>
                    <Text
                        numberOfLines={1}
                        style={{
                          fontSize:16,
                          color:'#FFF',
                          marginLeft:-10,
                        }}>{this.props.Title}</Text>
                    <TouchableOpacity
                        onPress={this.props.function}
                    >
                        <Text
                            numberOfLines={1}
                            style={{
                                fontSize:15,
                                color:'#FFF',
                                marginTop:3,
                            }}
                        >{this.props.RightText}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

  }
}

const styles = StyleSheet.create({

});
