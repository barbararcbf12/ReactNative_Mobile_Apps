'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  TouchableOpacity,
  Text,
  Image,
  View,
  StyleSheet,
  Dimensions,
  TouchableHighlight,
  Navigator
} from 'react-native';

var ContentDetail = React.createClass({

  getInitialState() {
        return {
            x: '',
            y: '',
            width: '',
            height: '',
            viewHeight: 100
        }
    },

  measureView(event) {
    console.log('event peroperties: ', event);
    this.setState({
            x: event.nativeEvent.layout.x,
            y: event.nativeEvent.layout.y,
            width: event.nativeEvent.layout.width,
            height: event.nativeEvent.layout.height
        })
    },

    changeHeight() {
        this.setState({
        viewHeight: 200
      })
    },

  render: function() {
    return (
      <View >
       <View onLayout={(event) => this.measureView(event)}  style={{height:this.state.viewHeight, marginTop:120, backgroundColor: 'orange'}}>
                <Text >The outer view of this text is being measured!</Text>
            <Text>x: {this.state.x}</Text>
            <Text>y: {this.state.y}</Text>
            <Text>width: {this.state.width}</Text>
            <Text>height: {this.state.height}</Text>
        </View>

        <TouchableHighlight style={{flexDirection:'row', alignItems: 'center', justifyContent: 'center', padding:15, backgroundColor: '#ddd', marginTop:10}} onPress={() => this.changeHeight() }>
              <Text style={{fontSize:18}}>Change height of container</Text>
        </TouchableHighlight>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 28,
    textAlign: 'center',
    margin: 10,
  }
});

AppRegistry.registerComponent('ContentDetail', () => ContentDetail);