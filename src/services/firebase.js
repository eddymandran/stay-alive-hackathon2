import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/messaging";

// const api_key = `${process.env.FIREBASE_APIKEY}`;
// const auth_domain = `${process.env.FIREBASE_AUTHDOMAIN}`;
// const db_url = `${process.env.FIREBASE_DATABASEURL}`;
// const project_id = `${process.env.FIREBASE_PROJECTID}`;
// const storage_bucket = `${process.env.FIREBASE_STORAGEBUCKET}`;
// const messaging_sender_id = `${process.env.FIREBASE_MESSAGINGSENDERID}`;
// const app_id = `${process.env.FIREBASE_APPID}`;

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



// const firebaseConfig = {
//   apiKey: api_key,
//   authDomain: auth_domain,
//   databaseURL:
//     db_url,
//   projectId: project_id,
//   storageBucket: storage_bucket,
//   messagingSenderId: messaging_sender_id,
//   appId: app_id,
// };

// firebase.initializeApp(firebaseConfig);

// const messageCertificates = `${process.env.MESSAGING_CERTIFICATES}`;

// const messaging = firebase.messaging();
// messaging.usePublicVapidKey(
//   // Project Settings => Cloud Messaging => Web Push certificates
//   messageCertificates
// );

// export { firebase, messaging };
