import React, { Component } from 'react';
import { Linking, View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

export default class Footer extends Component<{}> {
  render() {
    return (
      <View style={styles.appFooter}>
        <Text styles={styles.appFooterText}>
          Copyright © 2011-2019, Doug Lowder, all rights reserved.
        </Text>
        <TouchableOpacity
          onPress={() => Linking.openURL('tel:+1-510-928-6373')}
        >
          <Text styles={styles.appFooterTextUrl}>(510) 928-6373</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Linking.openURL('mailto:douglowder@mac.com')}
        >
          <Text styles={styles.appFooterTextUrl}>douglowder@mac.com</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Linking.openURL('http://www.douglowder.com/')}
        >
          <Text styles={styles.appFooterTextUrl}>http://douglowder.com</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
