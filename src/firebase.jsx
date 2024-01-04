
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyACxx0shlteaQr3UDndUexYS4w5-6KWurk",
  authDomain: "chatsphere-2a024.firebaseapp.com",
  projectId: "chatsphere-2a024",
  storageBucket: "chatsphere-2a024.appspot.com",
  messagingSenderId: "654733125948",
  appId: "1:654733125948:web:40a4118c062e809a415639"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
