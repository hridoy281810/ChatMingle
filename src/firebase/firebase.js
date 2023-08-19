
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCO6ajNjNH6CX2rV9dcvHB6QMzLG3ruLe8",
  authDomain: "chatmingle-54777.firebaseapp.com",
  projectId: "chatmingle-54777",
  storageBucket: "chatmingle-54777.appspot.com",
  messagingSenderId: "881778335825",
  appId: "1:881778335825:web:005a1c9a3810f0359c1870"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();