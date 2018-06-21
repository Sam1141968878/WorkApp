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
  View,
} from 'react-native';

import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';

export default class PublicTopTab extends PureComponent{
  render() {
    return (
        <View
            style={{flex:1}}
        >
            {
                this.props.Type===3
                ?
                    <ScrollableTabView
                      style={{
                        height:20,
                      }}
                      initialPage={0}
                      tabBarUnderlineStyle={{
                        height:2,
                        width:70,
                        backgroundColor:'#3487ea',
                        marginLeft:25
                      }}
                      tabBarActiveTextColor='#3487ea'
                      tabBarInactiveTextColor='#666666'
                      prerenderingSiblingsNumber={0}
                    >
                            <View tabLabel={this.props.OneTitle}>
                                {this.props.OnePage}
                            </View>
                            <View tabLabel={this.props.TwoTitle}>
                                {this.props.TwoPage}
                            </View>
                            <View tabLabel={this.props.ThirdTitle}>
                                {this.props.ThirdPage}
                            </View>
                    </ScrollableTabView>
                :
                    <ScrollableTabView
                      style={{
                        height:20,
                      }}
                      initialPage={0}
                      tabBarUnderlineStyle={{
                        height:2,
                        width:60,
                        backgroundColor:'dodgerblue',
                        marginLeft:15
                      }}
                      scrollWithoutAnimation={false}
                      tabBarActiveTextColor='dodgerblue'
                      tabBarInactiveTextColor='#666666'
                      prerenderingSiblingsNumber={0}
                    >
                            <View tabLabel={this.props.OneTitle}>
                                {this.props.OnePage}
                            </View>
                            <View tabLabel={this.props.TwoTitle}>
                                {this.props.TwoPage}
                            </View>
                            <View tabLabel={this.props.ThirdTitle}>
                                {this.props.ThirdPage}
                            </View>
                            <View tabLabel={this.props.FourTitle}>
                                {this.props.FourPage}
                            </View>
                    </ScrollableTabView>
            }

        </View>

    );
  }
}

const styles = StyleSheet.create({

});
