import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './component/Header'
import Mid from "./component/Mid";
import Body from "./component/Body"

export default class App extends React.Component {
  render() {
    return (
        <View style={styles.container}>
          <Header/>
          <Mid/>
          <Body/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
