// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"; 


const firebaseConfig = {
  apiKey: "AIzaSyBs5nyYq-bVlr5RqZ76axLtrlYS2WqFVUA",
  authDomain: "chat-app-ebb2c.firebaseapp.com",
  projectId: "chat-app-ebb2c",
  storageBucket: "chat-app-ebb2c.appspot.com",
  messagingSenderId: "2919797494",
  appId: "1:2919797494:web:c47e5fa5907eac8dd152d7",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db=getFirestore();
