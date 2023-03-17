// Import the functions you need from the SDKs you need
import { initializeApp,getApp , getApps } from "firebase/app";
import {getFirestore}from 'firebase/firestore'
import {getStorage}from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "twitter-clone-7f63d.firebaseapp.com",
  projectId: "twitter-clone-7f63d",
  storageBucket: "twitter-clone-7f63d.appspot.com",
  messagingSenderId: "13271908705",
  appId: "1:13271908705:web:606808b31fd26dedf78520",
};

// Initialize Firebase
const app =!getApps().length ? initializeApp(firebaseConfig) :getApp()
const db = getFirestore();
const storage= getStorage();
export {app ,db,storage}
