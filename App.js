/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  SafeAreaView
} from 'react-native';
import Header from './ui-components/Header';
import AlbumsList from './ui-components/AlbumsList';

export default class App extends Component {
  render() {
    const { container, content } = styles;

    return (
      <SafeAreaView style={ container }>
        <Header title={ 'Albums' }/>
        <View style={ content }>
          <AlbumsList />
        </View>  
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#786DF4',
    paddingLeft: 10,
    paddingRight: 10,
  },
  content: {
    flex: 1,
    backgroundColor: '#F2F5F8'
  }
});
