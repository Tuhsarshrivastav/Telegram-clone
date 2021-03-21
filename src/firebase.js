import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCQaaMOGVR_JTpDoKwd6VVLPnJJIRlxyys",
  authDomain: "telegram-clone-4a266.firebaseapp.com",
  projectId: "telegram-clone-4a266",
  storageBucket: "telegram-clone-4a266.appspot.com",
  messagingSenderId: "1000631560891",
  appId: "1:1000631560891:web:1790fbaa875abb76c3179e",
  measurementId: "G-BVR8JVKY3V",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };

export default db;
