// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBhTOwAEeJBaIGsQ7l3dIzEBRvpEMx1wAU",
    authDomain: "electronics-warehouse-bf875.firebaseapp.com",
    projectId: "electronics-warehouse-bf875",
    storageBucket: "electronics-warehouse-bf875.appspot.com",
    messagingSenderId: "91639140017",
    appId: "1:91639140017:web:6efc2cb1a17eda69c71c90"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;