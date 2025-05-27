
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyARNFpBKxw0pQoz9vaAwBAwb5NW0CTGFAw",
  authDomain: "commshare-b31b9.firebaseapp.com",
  projectId: "commshare-b31b9",
  storageBucket: "commshare-b31b9.firebasestorage.app",
  messagingSenderId: "933680843002",
  appId: "1:933680843002:web:ad9107a6fe4ce784246143"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);