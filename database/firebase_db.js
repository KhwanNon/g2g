// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAnalytics} from 'firebase/analytics';
import {getFirestore} from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAYflrlpRLCGZcKrBPzzCgJITIg3muEPL4',
  authDomain: 'g2g-progect.firebaseapp.com',
  projectId: 'g2g-progect',
  storageBucket: 'g2g-progect.appspot.com',
  messagingSenderId: '282797196703',
  appId: '1:282797196703:web:21c8aaafee333c4c68e9aa',
  measurementId: 'G-X15SSL937L',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore;
