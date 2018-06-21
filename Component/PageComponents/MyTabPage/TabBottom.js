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
 *     2018/5/3.
 */

import React, { Component,PureComponent } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';


export default class TabBottom extends PureComponent{
  render() {
    return (
      <View
          style={{
            flexDirection: 'row',
            height: 50,
            backgroundColor:'#fff'
          }}
      >
          {
            this.props.tabNames.map((item,index)=>
                <View
                    style={{
                        width:'30%'
                    }}
                    key={index}
                >
                    <Text>{index}</Text>
                </View>

            )
          }

      </View>
    );
  }
}

const styles = StyleSheet.create({

});
