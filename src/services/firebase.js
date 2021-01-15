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
  apiKey: "AIzaSyAUktM68L1HtOX4ai-BfqevBg3bXOjHEww",
  authDomain: "stayaliveshoot.firebaseapp.com",
  projectId: "stayaliveshoot",
  storageBucket: "stayaliveshoot.appspot.com",
  messagingSenderId: "160680141890",
  appId: "1:160680141890:web:911745986a3605d564f9db"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();
messaging.usePublicVapidKey(
  // Project Settings => Cloud Messaging => Web Push certificates
  "BMlyBf8pSUnwjo9-Ov8vDxb10SMFeYn8ETJ6i8JPIinabAH5LljK928KmzXzQBk9x_p1ehf0_a_Jyczub4uD3kc"
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
