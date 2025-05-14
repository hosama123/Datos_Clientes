import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';

export default function Registro() {
  const [cedula, setCedula] = useState('');
  const [nombres, setNombres] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [fechaDeNacimiento, setFechaDeNacimiento] = useState('');
  const [sexo, setSexo] = useState('');

  const navigation = useNavigation();

  const Guardar = () => {
    if (!cedula || !nombres || !apellidos || !fechaDeNacimiento || !sexo) {
      Alert.alert('Error', 'Por favor complete todos los campos');
      return;
    }

    const cliente = {
      cedula,
      nombres,
      apellidos,
      fechaDeNacimiento,
      sexo,
    };

    navigation.navigate('GuardarCliente', { cliente });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Cédula</Text>
      <TextInput style={styles.input} value={cedula} onChangeText={setCedula} placeholder="121-300-400P" />

      <Text style={styles.label}>Nombres</Text>
      <TextInput style={styles.input} value={nombres} onChangeText={setNombres} placeholder="Hosama Molina" />

      <Text style={styles.label}>Apellidos</Text>
      <TextInput style={styles.input} value={apellidos} onChangeText={setApellidos} placeholder="López Jimenes" />

      <Text style={styles.label}>Fecha de Nacimiento</Text>
      <TextInput style={styles.input} value={fechaDeNacimiento} onChangeText={setFechaDeNacimiento} placeholder="2000-01-01" />

      <Text style={styles.label}>Sexo</Text>
      <Picker selectedValue={sexo} onValueChange={setSexo} style={styles.input}>
        <Picker.Item label="Seleccione..." value="" />
        <Picker.Item label="Masculino" value="masculino" />
        <Picker.Item label="Femenino" value="femenino" />
        <Picker.Item label="Otro" value="otro" />
      </Picker>

      <Button title="Guardar Cliente" onPress={Guardar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: 
  { flex: 1, padding: 20 },
  input: { borderWidth: 1, borderColor: '#000', padding: 10, marginBottom: 10, borderRadius: 5 },
  label: { fontSize: 16, marginBottom: 5 },
});