

'use strict';

var React = require('react');
var ReactNative = require('react-native');
var {
    StyleSheet,
    TabBarIOS,
    Text,
    View,
    } = ReactNative;

var QdaiHome = React.createClass({
    render: function () {
      return (
        <View >
          <Text>
          测试页面
          </Text>
        </View>
      );
    }
});

var styles = StyleSheet.create({
    viewStyle: {
      backgroundColor: '#0092dd'
    }

});

module.exports = QdaiHome;
