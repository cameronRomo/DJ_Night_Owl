import React, {Component} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomePage = () => {
  return (
    <SafeAreaView>
      {/* <Image
        source={require('../../assets/img/DJ Night owl.png')}
        style={styles.image}
      /> */}
      <Text>Hello World</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    height: 190,
    width: 140,
    resizeMode: 'contain',
  }
})

export default HomePage
