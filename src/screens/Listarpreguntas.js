import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator, Button } from 'react-native';

export default function Listapreguntas() {
  const [preguntas, setPreguntas] = useState([]);
  const [cargando, setCargando] = useState(true);

  const obtenerPreguntas = async () => {
    setCargando(true);
    try {
      const res = await fetch('https://opentdb.com/api.php?amount=5&type=multiple');
      const data = await res.json();
      setPreguntas(data.results);
    } catch (error) {
      console.error('Error al obtener preguntas:', error);
    }
    setCargando(false);
  };

  useEffect(() => {
    obtenerPreguntas();
  }, []);

  if (cargando) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#000" />
        <Text>Cargando preguntas...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={preguntas}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.card}>
            <Text style={styles.numero}>Pregunta {index + 1}</Text>
            <Text style={styles.texto}>{decodeURIComponent(item.question)}</Text>
          </View>
        )}
      />
      <Button title="Recargar Preguntas" onPress={obtenerPreguntas} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  card: {
    backgroundColor: '#f0f0f0',
    marginBottom: 15,
    padding: 15,
    borderRadius: 8
  },
  numero: { fontWeight: 'bold', marginBottom: 5 },
  texto: { fontSize: 16 }
});
