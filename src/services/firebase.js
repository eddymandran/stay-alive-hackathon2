import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyBP5P7XpfVdmbn7lGVagGbbFzNC5C13i-k",
  authDomain: "stayalive-58f5e.firebaseapp.com",
  databaseURL:
    "https://stayalive-58f5e-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "stayalive-58f5e",
  storageBucket: "stayalive-58f5e.appspot.com",
  messagingSenderId: "594990641454",
  appId: "1:594990641454:web:667bf9241834e8564f0abf",
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();
messaging.usePublicVapidKey(
  // Project Settings => Cloud Messaging => Web Push certificates
  "BOityaS8GQid8Ey4X0HS5IUm_TbVGTpquC8q_2OnGAKXob6fJxMOVIXdaHPfkt6IHKgD300sA5wPMObc4RLUxRo"
);

export { firebase, messaging };
