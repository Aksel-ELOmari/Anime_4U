
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAtxMMHXCApK15w67sd6bLuOgp7C2xeUMo",
  authDomain: "movies-app-196f6.firebaseapp.com",
  projectId: "movies-app-196f6",
  storageBucket: "movies-app-196f6.appspot.com",
  messagingSenderId: "1028699259925",
  appId: "1:1028699259925:web:924093d0d0472068b47a1c",
  measurementId: "G-RYNCLSM3HS"
};

// Initialize Firebase
export const firebaseApp = firebase.initializeApp(firebaseConfig);