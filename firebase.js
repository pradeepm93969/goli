// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from 'firebase/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAAK_esyK7KylfMdqN6baCHRsM4S7w7dok',
  authDomain: 'goli-coming-soon.firebaseapp.com',
  projectId: 'goli-coming-soon',
  storageBucket: 'goli-coming-soon.appspot.com',
  messagingSenderId: '918429398591',
  appId: '1:918429398591:web:b4df07ccd1e03af9aeea8a',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
export { db };
