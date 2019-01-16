import React, { Component } from 'react';
import { View, Text, Linking, TouchableOpacity } from 'react-native';
import styles from './styles';

export default class Header extends Component<{
  tabs: ?(Object[]),
  activeTabIndex: ?number
}> {
  render() {
    const tabs = this.props.tabs || [
      { name: 'Home', url: '/' },
      { name: 'Work', url: '/Work.html' },
      { name: 'Music', url: '/Music.html' }
    ];
    const activeIndex = this.props.activeTabIndex || 0;
    return (
      <View style={styles.appHeader}>
        {tabs.map((s, i) => {
          return i === activeIndex ? (
            <Text style={styles.appHeaderText}>{s.name}</Text>
          ) : (
            <TouchableOpacity onPress={() => Linking.openURL(s.url)}>
              <Text style={styles.appHeaderTextLink}>{s.name}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }
}
