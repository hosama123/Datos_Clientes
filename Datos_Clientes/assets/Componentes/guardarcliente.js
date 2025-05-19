import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function GuardarCliente() {
  const [nombre, setNombre] = useState('');
  const [clientes, setClientes] = useState([]);
  const [apellido, setApellido] = useState(''); 

  const navigation = useNavigation();
  const route = useRoute();
  const agregarNuevo = route.params?.agregarNuevo;

  const guardarNuevo = () => {
    if (!nombre.trim()) {
      Alert.alert('Error', 'Ingrese un nombre para el cliente');
      return;
    }

    const nuevoCliente = { nombre , apellido,};
    agregarNuevo(nuevoCliente);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nombre del Cliente</Text>
      <TextInput style={styles.input} value={nombre} onChangeText={setNombre} placeholder="Ej. Juan Pérez" />
      <Text style={styles.label}>Nombre del Cliente</Text>
      <TextInput style={styles.input} value={apellido} onChangeText={setApellido} placeholder="Ej. Juan Pérez" />
      <Text style={styles.label}>Nombre del Cliente</Text>
      <TextInput style={styles.input} value={cedula} onChangeText={setClientes} placeholder="Ej. Juan Pérez" />
      
      
      <Button title="Guardar Cliente" onPress={guardarNuevo} />
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  input: {
    borderWidth: 1,
    borderColor: '#000',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  label: { fontSize: 16, marginBottom: 5 },
});
