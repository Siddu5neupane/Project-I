import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

import {
    getAuth,
    GoogleAuthProvider
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

import {
    getFirestore
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyB2MWrPbOduBGvz4XI5o0Xg7n4K5VgHf3s",
  authDomain: "smartfit-5a2c6.firebaseapp.com",
  projectId: "smartfit-5a2c6",
  storageBucket: "smartfit-5a2c6.firebasestorage.app",
  messagingSenderId: "1089005802536",
  appId: "1:1089005802536:web:d46e9289215001f39ed11d"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();

export const db = getFirestore(app);