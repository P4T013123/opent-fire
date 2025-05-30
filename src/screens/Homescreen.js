import React from 'react';
import { View, Button, StyleSheet, Alert } from 'react-native';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/firebaseConfig';

export default function Homescreen({ navigation }) {
  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigation.replace('Login');
    } catch (error) {
      Alert.alert('Error al cerrar sesión', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Listar Preguntas" onPress={() => navigation.navigate('Lista')} />
      <View style={styles.spacer} />

      <Button title="Usuario" onPress={() => navigation.navigate('User')} />
      <View style={styles.spacer} />

      <Button title="Funcionalidad Original (Trivia)" onPress={() => navigation.navigate('Trivia')} />
      <View style={styles.spacer} />

      <Button title="Cerrar Sesión" color="red" onPress={handleLogout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  spacer: { height: 20 }
});
