import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { auth } from '../firebase/firebaseConfig';

export default function Userscreen({ navigation }) {
  const user = auth.currentUser;

  if (!user) {
    return (
      <View style={styles.container}>
        <Text>No hay usuario autenticado</Text>
        <Button title="Volver" onPress={() => navigation.goBack()} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Información del Usuario</Text>
      <Text style={styles.info}>📧 Correo: {user.email}</Text>
      <Text style={styles.info}>🆔 UID: {user.uid}</Text>
      <View style={styles.space} />
      <Button title="Volver al menú" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 24, marginBottom: 20, textAlign: 'center' },
  info: { fontSize: 16, marginBottom: 10 },
  space: { height: 20 }
});
