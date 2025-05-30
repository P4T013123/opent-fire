// src/firebase/firebaseConfig.js
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCeo1hXbqDcdpBdOfPJJJpJDGc_-ut5V5Q",
  authDomain: "opent-db.firebaseapp.com",
  projectId: "opent-db",
  storageBucket: "opent-db.appspot.com", // ⚠️ CORREGIDO: antes tenías `.firebasestorage.app` (no válido)
  messagingSenderId: "158980030807",
  appId: "1:158980030807:web:faf193074bb8fb44217e12"
};

// Previene re-inicialización en modo desarrollo
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);

export { auth };
