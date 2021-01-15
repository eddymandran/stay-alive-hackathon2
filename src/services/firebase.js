import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyCIgXdXEDZyEs1btn7Nzs3cng00Rbu2bS0",
  authDomain: "stayalivefinal.firebaseapp.com",
  projectId: "stayalivefinal",
  storageBucket: "stayalivefinal.appspot.com",
  messagingSenderId: "927797523693",
  appId: "1:927797523693:web:8012595dd15d7a32f708e4"
};
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();
messaging.usePublicVapidKey(
  // Project Settings => Cloud Messaging => Web Push certificates
  "BBh6XtpQdsdc_KohE6hkZ5ZL4wfIb-Olo72Z1PkgDfLTkciEp-E6JJNPm1itOobjzufqKk6xvi6fvQsl42jf3fU"
);

export { firebase, messaging };
