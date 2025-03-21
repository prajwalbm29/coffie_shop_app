import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function App() {
  return (
    <View>
      <Text style={styles.text}>App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "white",
  }
})