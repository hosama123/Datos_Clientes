import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export default function ListarClientes() {
  const [clientes, setClientes] = useState([]);
  const navigation = useNavigation();

  const eliminarCliente = (index) => {
    Alert.alert(
      'Confirmar eliminación',
      '¿Está seguro que desea eliminar este cliente?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Eliminar',
          style: 'destructive',
          onPress: () => {
            const nuevos = [...clientes];
            nuevos.splice(index, 1);
            setClientes(nuevos);
          },
        },
      ]
    );
  };

  const agregarNuevo = (nuevoCliente) => {
    setClientes([...clientes, nuevoCliente]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista de Clientes</Text>
      <ScrollView>
        {clientes.map((cliente, index) => (
          <View key={index} style={styles.clienteContainer}>
            <Text>{cliente.nombre}</Text>
            <TouchableOpacity onPress={() => eliminarCliente(index)}>
              <Ionicons name="trash" size={24} color="red" />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
      <TouchableOpacity
        style={styles.boton}
        onPress={() => navigation.navigate('GuardarCliente', { agregarNuevo })}
      >
        <Text style={styles.botonTexto}>Agregar Cliente</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  titulo: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  clienteContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
  },
  boton: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  botonTexto: { color: 'white', fontSize: 16 },
});