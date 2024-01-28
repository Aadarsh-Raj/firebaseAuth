// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbVPI0-8b3PunGl4USqQyFbqdF_so4kEI",
  authDomain: "aadarsh-first-project.firebaseapp.com",
  projectId: "aadarsh-first-project",
  storageBucket: "aadarsh-first-project.appspot.com",
  messagingSenderId: "838373136441",
  appId: "1:838373136441:web:732a4eb49de0946ddd55e8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;