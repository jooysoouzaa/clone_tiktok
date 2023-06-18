import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyAaqgWnRXnWJTUbQH3Hfx9f0BoiibVhJ4A",
  authDomain: "tiktok---jornada-fd568.firebaseapp.com",
  projectId: "tiktok---jornada-fd568",
  storageBucket: "tiktok---jornada-fd568.appspot.com",
  messagingSenderId: "97070989687",
  appId: "1:97070989687:web:7a984b1c38bffbc7eb6172"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;