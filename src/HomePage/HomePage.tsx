import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const HomePage = () => {
  return (
    <SafeAreaView>
      <Image source={require('../../assets/img/logo.png')} style={styles.image} />
      <View>
        <TouchableOpacity style={styles.enterButton}>
          <Text style={styles.buttonText}>Bump the Base!</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    color: 'white',
  },
  enterButton: {
    backgroundColor: 'royalblue',
    position: 'absolute',
    alignSelf: 'center',
    top: -200,
    width: 200,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  image: {
    alignSelf: 'center',
    justifyContent: 'flex-end',
    height: 760,
    width: 540,
    marginTop: -50,
    resizeMode: 'stretch',
  },
});

export default HomePage;
