import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Loginscreen from './screens/Loginscreen';
import Registerscreen from './screens/Registerscreen';
import Homescreen from './screens/Homescreen';
import Triviascreen from './screens/Triviascreen';
import Userscreen from './screens/Userscreen';
import Listarpreguntas from './screens/Listarpreguntas';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Loginscreen} />
      <Stack.Screen name="Register" component={Registerscreen} />
      <Stack.Screen name="Home" component={Homescreen} />
      <Stack.Screen name="Trivia" component={Triviascreen} />
      <Stack.Screen name="User" component={Userscreen} />
      <Stack.Screen name="Lista" component={Listarpreguntas} />
      <Stack.Screen name="Lista" component={Listarpreguntas} />
    </Stack.Navigator>
  );
}
