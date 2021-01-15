import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/messaging";

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
