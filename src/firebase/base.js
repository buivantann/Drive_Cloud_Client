import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyBshP6Kv0RjGJkYZsfxPp6BaGLk1wR1RW0',
  authDomain: 'file-storage-4cd95.firebaseapp.com',
  projectId: 'file-storage-4cd95',
  storageBucket: 'file-storage-4cd95.appspot.com',
  messagingSenderId: '928665384527',
  appId: '1:928665384527:web:8e70ffe8e54e4c4dc19c3a',
  measurementId: 'G-7R2PGK4F6G',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
