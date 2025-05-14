import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PantallaListarClientes from './listarclientes';
import PantallaGuardarCliente from './guardarcliente';

const Stack = createNativeStackNavigator();

export default function Navegacion() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ListarClientes">
        <Stack.Screen name="ListarClientes" component={PantallaListarClientes} />
        <Stack.Screen name="GuardarCliente" component={PantallaGuardarCliente} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}