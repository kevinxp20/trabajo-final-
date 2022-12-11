// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmE5hUth0vDyouauzBJ9roWS7sDfgH52k",
  authDomain: "ea3-app-restaurantes.firebaseapp.com",
  projectId: "ea3-app-restaurantes",
  storageBucket: "ea3-app-restaurantes.appspot.com",
  messagingSenderId: "177038776769",
  appId: "1:177038776769:web:4d09187c297e8ee08cb740"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const FirebaseFirestore = getFirestore(app);

export{
    FirebaseFirestore
}