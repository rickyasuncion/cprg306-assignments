// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCePAIFAdejAVH0HrxL2PExVmFnHq5E8B0",
  authDomain: "cprg306-assignments-28fc0.firebaseapp.com",
  projectId: "cprg306-assignments-28fc0",
  storageBucket: "cprg306-assignments-28fc0.appspot.com",
  messagingSenderId: "527488498204",
  appId: "1:527488498204:web:7f09b7eccea09827403dd9"
};
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);