import {initializeApp} from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBRtcFJOQ11k1STAC3YfCQSAp1wSTFxpJc",
  authDomain: "book-store-e12a8.firebaseapp.com",
  projectId: "book-store-e12a8",
  storageBucket: "book-store-e12a8.appspot.com",
  messagingSenderId: "695389971984",
  appId: "1:695389971984:web:682a0433a256d956380c95"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);