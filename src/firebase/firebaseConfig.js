// firebase/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
apiKey: "AIzaSyCeo1hXbqDcdpBdOfPJJJpJDGc_-ut5V5Q",
authDomain: "opent-db.firebaseapp.com",
projectId: "opent-db",
storageBucket: "opent-db.firebasestorage.app",
messagingSenderId: "158980030807",
appId: "1:158980030807:web:faf193074bb8fb44217e12"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export { auth};