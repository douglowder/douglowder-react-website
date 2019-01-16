import React, { Component } from 'react';
import { Linking, View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

export default class Footer extends Component<{}> {
  render() {
    return (
      <View style={styles.appFooter}>
        <Text styles={styles.appFooterText}>
          Copyright 2011-2019 Douglas Lowder
        </Text>
        <Text styles={styles.appFooterText}>(510) 928-6373</Text>
        <TouchableOpacity
          onPress={() => Linking.openURL('mailto:douglowder@mac.com')}
        >
          <Text styles={styles.appFooterTextUrl}>douglowder@mac.com</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Linking.openURL('http://douglowder.com/')}
        >
          <Text styles={styles.appFooterTextUrl}>http://douglowder.com</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
