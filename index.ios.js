
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  TabBarIOS,
  Text
} from 'react-native';

var TabBarExample=require('./TabBarExample')

var HomePage =React.createClass({
    render: function () {
      return (
        <View style={styles.emptyPage}>
        <Text style={styles.emptyPageText}>
          首页哦
        </Text>
        </View>
      );
    }
});

class RNQdai extends Component {
  
  render() {
    return (
      <TabBarExample />
      // <TabBarIOS selectedTab={this.state.selectedTab}>
      //   <TabBarIOS.Item
      //     title="首页"
      //     name="home"
      //     selected={this.state.selectedTab === 'home'}
      //     onKeyPress={() => {
      //       this.setState({
      //                 selectedTab: 'home'
      //               });
      //     }}>
      //   <HomePage />
      //   </TabBarIOS.Item>
      //
      //   <TabBarIOS.Item
      //     title="产品"
      //     name="pro"
      //     selected={this.state.selectedTab === 'pro'}
      //     onKeyPress={() => {
      //       this.setState({
      //                 selectedTab: 'pro'
      //               });
      //     }}>
      //     <View>
      //     <Text >qweqw;e,qwe,qwle,l;qw</Text>
      //     </View>
      //   </TabBarIOS.Item>
      //
      //   <TabBarIOS.Item
      //   title="订单"
      //   name="order"
      //   selected={this.state.selectedTab === 'order'}>
      //     <View>
      //     <Text >qweqw;e,qwe,qwle,l;qw</Text>
      //     </View>
      //   </TabBarIOS.Item>
      //
      //   <TabBarIOS.Item title="我的"
      //   name="my"
      //   selected={this.state.selectedTab === 'my'}>
      //     <View>
      //     <Text>qweqw;e,qwe,qwle,l;qw</Text>
      //     </View>
      //   </TabBarIOS.Item>
      // </TabBarIOS>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  customWrapperStyle: {
    backgroundColor: '#bbdddd',
  },
  emptyPage: {
    flex: 1,
    paddingTop: 64,
  },
  emptyPageText: {
    margin: 10,
  },
  list: {
    backgroundColor: '#eeeeee',
    marginTop: 10,
  },
  group: {
    backgroundColor: 'white',
  },
  groupSpace: {
    height: 15,
  },
  line: {
    backgroundColor: '#bbbbbb',
    height: StyleSheet.hairlineWidth,
  },
  row: {
    backgroundColor: 'white',
    justifyContent: 'center',
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#bbbbbb',
    marginLeft: 15,
  },
  rowNote: {
    fontSize: 17,
  },
  rowText: {
    fontSize: 17,
    fontWeight: '500',
  },
});


AppRegistry.registerComponent('RNQdai', () => RNQdai);
