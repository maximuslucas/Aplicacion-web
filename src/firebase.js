// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqlfYO8-DuZSWJv087EGI2i-ro-l1QIJE",
  authDomain: "aplicacion-web-8a71e.firebaseapp.com",
  projectId: "aplicacion-web-8a71e",
  storageBucket: "aplicacion-web-8a71e.appspot.com",
  messagingSenderId: "571791767097",
  appId: "1:571791767097:web:1d18a770388d9c0fc37fe8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

export {auth, db}
export default app;
