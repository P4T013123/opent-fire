import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';

export default function Triviascreen() {
  const [pregunta, setPregunta] = useState(null);
  const [opciones, setOpciones] = useState([]);
  const [respuestaSeleccionada, setRespuestaSeleccionada] = useState(null);
  const [resultado, setResultado] = useState(null);
  const [loading, setLoading] = useState(false);

  const obtenerPregunta = async () => {
    setLoading(true);
    setResultado(null);
    setRespuestaSeleccionada(null);

    try {
      const res = await fetch('https://opentdb.com/api.php?amount=1&type=multiple');
      const data = await res.json();
      const preguntaAPI = data.results[0];

      const respuestas = [...preguntaAPI.incorrect_answers];
      const randomIndex = Math.floor(Math.random() * 4);
      respuestas.splice(randomIndex, 0, preguntaAPI.correct_answer);

      setPregunta({
        texto: preguntaAPI.question,
        correcta: preguntaAPI.correct_answer
      });

      setOpciones(respuestas);
    } catch (error) {
      console.error('Error al obtener pregunta:', error);
    }

    setLoading(false);
  };

  useEffect(() => {
    obtenerPregunta();
  }, []);

  const manejarRespuesta = (opcion) => {
    setRespuestaSeleccionada(opcion);
    setResultado(opcion === pregunta.correcta ? '✅ ¡Correcto!' : `❌ Incorrecto. Era: ${pregunta.correcta}`);
  };

  if (loading || !pregunta) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#000" />
        <Text>Cargando pregunta...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.pregunta}>{decodeURIComponent(pregunta.texto)}</Text>
      {opciones.map((op, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.opcion,
            respuestaSeleccionada === op && styles.opcionSeleccionada
          ]}
          onPress={() => manejarRespuesta(op)}
          disabled={respuestaSeleccionada !== null}
        >
          <Text>{decodeURIComponent(op)}</Text>
        </TouchableOpacity>
      ))}
      {resultado && <Text style={styles.resultado}>{resultado}</Text>}
      <View style={styles.espacio} />
      <Button title="Otra pregunta" onPress={obtenerPregunta} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  pregunta: { fontSize: 18, marginBottom: 20 },
  opcion: {
    padding: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#eee'
  },
  opcionSeleccionada: {
    backgroundColor: '#ddd'
  },
  resultado: { marginTop: 20, fontSize: 16, fontWeight: 'bold' },
  espacio: { height: 20 }
});
