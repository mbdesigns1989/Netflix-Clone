import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA5oHDB6jfFKk0Hivz8HoFTetl8TX7MQys",
  authDomain: "netflix-clone-aa100.firebaseapp.com",
  projectId: "netflix-clone-aa100",
  storageBucket: "netflix-clone-aa100.appspot.com",
  messagingSenderId: "946869691243",
  appId: "1:946869691243:web:37436956f45850b166222e"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { auth };
export { db };
export default app;

