import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Navegacion from './assets/Componentes/navegacion';

export default function App() {
  return (
    <View style={styles.container}>
      <Navegacion />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
