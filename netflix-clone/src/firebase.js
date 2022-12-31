import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBDrbHWR0Yr8r0AituRH9DlzlL5dgwwi74",
  authDomain: "netflix-clone-6a30b.firebaseapp.com",
  projectId: "netflix-clone-6a30b",
  storageBucket: "netflix-clone-6a30b.appspot.com",
  messagingSenderId: "1042381325911",
  appId: "1:1042381325911:web:273b02babf7004288b0512",
  measurementId: "G-T3EPRPC6D7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { auth };
export default db;