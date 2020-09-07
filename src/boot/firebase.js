import * as firebase from 'firebase/app'

import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {

  apiKey: "AIzaSyDMHDOpKDymFH_i9eVZjGj_-6ArJrNAwu8",
    authDomain: "soucriativo-4ffe4.firebaseapp.com",
    databaseURL: "https://soucriativo-4ffe4.firebaseio.com",
    projectId: "soucriativo-4ffe4",
    storageBucket: "soucriativo-4ffe4.appspot.com",
    messagingSenderId: "189507148791",
    appId: "1:189507148791:web:6a4ee6c0f2b5c09150ecf2",
    measurementId: "G-XJMMLYWWE0"
};

let firebaseApp = firebase.initializeApp(firebaseConfig)

// ==== Firebase auth
export const firebaseAuth = firebaseApp.auth();


// ==== Firebase firestore db
export const db = firebaseApp.firestore();


export const dbUsers = db.collection("users");
export const dbRoles = db.collection("roles");



export const fbStorage = firebase.storage
export const storageRef = firebase.storage().ref()
export const imagesUsers = firebase.storage().ref().child('usersImages');