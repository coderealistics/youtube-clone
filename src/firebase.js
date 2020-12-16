// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAW8sT-P6Je6AfD_0gz6GFzaNTHBr8NfRQ",
    authDomain: "clone-e95a5.firebaseapp.com",
    projectId: "clone-e95a5",
    storageBucket: "clone-e95a5.appspot.com",
    messagingSenderId: "103685563257",
    appId: "1:103685563257:web:8462365705af9d451305a8",
    measurementId: "G-CPWD7JQBW5"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;