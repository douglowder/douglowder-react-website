import React, { Component } from 'react';
import { Image, View, Text } from 'react-native';
import Header from './Header';
import Footer from './Footer';
import styles from './styles';

export default class App extends Component {
  render() {
    return (
      <View style={styles.app}>
        <Header />
        <View style={styles.appBody}>
          <Image
            accessibilityLabel="Douglas Lowder"
            style={{ width: 567, height: 140 }}
            resizeMode="contain"
            source={{
              uri: 'http://www.douglowder.com/images/douglaslowder.png'
            }}
          />
          <Text style={styles.appIntro}>
            Mobile app developer and Irish traditional musician
          </Text>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            <Image
              style={styles.imageHomePage}
              resizeMode="contain"
              source={{
                uri: 'http://www.douglowder.com/images/frontpagepic1.jpg'
              }}
            />
            <Image
              style={styles.imageHomePage}
              resizeMode="contain"
              source={{
                uri: 'http://www.douglowder.com/images/frontpagepic2.jpg'
              }}
            />
          </View>
        </View>
        <Footer />
      </View>
    );
  }
}
