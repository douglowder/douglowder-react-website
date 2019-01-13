import React, { Component } from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';
export default class App extends Component {
  render() {
    return (
      <View style={styles.app}>
        <View style={styles.appHeader}>
          <Text style={styles.appTitle}>Welcome!</Text>
        </View>
        <View style={styles.appBody}>
          <Image
            accessibilityLabel="Douglas Lowder"
            style={styles.images}
            resizeMode="contain"
            source={{
              uri: 'http://www.douglowder.com/images/douglaslowder.png'
            }}
          />
          <Text style={styles.appIntro}>
            Mobile app developer and Irish traditional musician
          </Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  app: {
    flex: 1,
    minHeight: 1000
  },
  appHeader: {
    height: 100,
    backgroundColor: '#00496c',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  appTitle: {
    fontSize: 16,
    color: 'white'
  },
  appBody: {
    backgroundColor: '#eaeaea',
    flex: 1
  },
  appIntro: {
    flex: 2,
    fontSize: 30,
    textAlign: 'center'
  },
  images: {
    height: 200
  }
});
