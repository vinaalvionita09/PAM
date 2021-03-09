import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Pangkat from './component/Pangkat';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Halo teman </Text>
      <Pangkat />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DEB887',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
