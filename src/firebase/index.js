import * as firebase from "firebase/app";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAuVvdNHxezUbVXmzihOPZzfFWxZ8Ewpjo",
  authDomain: "andres-n-rubio-photography.firebaseapp.com",
  projectId: "andres-n-rubio-photography",
  storageBucket: "andres-n-rubio-photography.appspot.com",
  messagingSenderId: "1019791551456",
  appId: "1:1019791551456:web:dd38d6b1e46eb4ec371985",
};

const app = firebase.initializeApp(firebaseConfig);
export const getFirebase = () => app;
export { getFirestore };
