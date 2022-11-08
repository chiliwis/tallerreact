import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDNzyJ2iS5I661MczmmKr69kW5q-7ftrB8",
  authDomain: "taller-recuperacion-bc808.firebaseapp.com",
  projectId: "taller-recuperacion-bc808",
  storageBucket: "taller-recuperacion-bc808.appspot.com",
  messagingSenderId: "767256384303",
  appId: "1:767256384303:web:b1319fe80df93cd1fcc7da"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)