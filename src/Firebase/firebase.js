import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/functions";
import "firebase/database";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAJW8moDO2VG6RYmkdoVRJTl-Q2v0fIHkc",
    authDomain: "ugoing-b5ec8.firebaseapp.com",
    projectId: "ugoing-b5ec8",
    storageBucket: "ugoing-b5ec8.appspot.com",
    messagingSenderId: "439130869314",
    appId: "1:439130869314:web:3d4dfcb32f155c7ddfa7db",
    measurementId: "G-T0NHSL04C8",
};

let fb;

if (firebase && firebase.apps && !firebase.apps.length) {
    fb = firebase.initializeApp(firebaseConfig);
} else {
    fb = firebase.app(); // if already initialized, use that one
}

// fb = firebase.initializeApp(firebaseConfig);

const fs = fb.firestore();

const db = fb.database();

const ff = fb.functions();

const fv = firebase.firestore.FieldValue;

export { fb, fs, db, ff, fv };
