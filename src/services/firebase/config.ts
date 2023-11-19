// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDGdrKAw2Aia-djw2TG6PEdLxZebMs0Bgk",
    authDomain: "next-crud-dev-neto.firebaseapp.com",
    projectId: "next-crud-dev-neto",
    storageBucket: "next-crud-dev-neto.appspot.com",
    messagingSenderId: "241596422946",
    appId: "1:241596422946:web:248824243c30abf311a37b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

