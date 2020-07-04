/**
 * @flow
 */

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Colors} from '../../Theme';

export const Tab1 = () => {
  return (
    <View style={style.container}>
      <Text style={style.text}>TAB 1</Text>
    </View>
  );
};

Tab1.options = {
  topBar: {
    title: {
      text: 'Tab 1',
    },
  },
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: Colors.textColor,
  },
});
