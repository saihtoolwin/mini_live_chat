// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import firebase from "firebase/app"
import {  getAuth } from "firebase/auth";
import { getFirestore, serverTimestamp } from "firebase/firestore"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3aiTKCQ1YW1PYtPYysU6_jcfIpBXUYf4",
  authDomain: "vue-blog-system-850be.firebaseapp.com",
  projectId: "vue-blog-system-850be",
  storageBucket: "vue-blog-system-850be.appspot.com",
  messagingSenderId: "641746213461",
  appId: "1:641746213461:web:86b5b39dbf70a4efd992dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// firebase.app

// let db = firebase.firestore();
// let timestamp = firebase.firestore.FieldValue.serveTimestamp;

// export { db, timestamp}

const db = getFirestore(app);
const auth = getAuth(app);
const timestamp = serverTimestamp;

export { db, timestamp,auth };