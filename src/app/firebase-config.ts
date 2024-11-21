// Import necessary Firebase functions
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';  // Import Firebase Authentication for handling user auth
import { getDatabase } from 'firebase/database';  // Import Firebase Realtime Database

// Your Firebase configuration object (replace with your own credentials)
const firebaseConfig = {
  apiKey: "AIzaSyBCs1p4KoRof1YVlthsEhUkq0HQIBlGAqc",
  authDomain: "jobmarket-1c73e.firebaseapp.com",
  databaseURL: "https://jobmarket-1c73e-default-rtdb.firebaseio.com",
  projectId: "jobmarket-1c73e",
  storageBucket: "jobmarket-1c73e.firebasestorage.app",
  messagingSenderId: "945818168578",
  appId: "1:945818168578:web:f783454e9c56ce402da61b",
  measurementId: "G-LK2HSQNJ0V"
};

// Initialize Firebase with the provided configuration
const app = initializeApp(firebaseConfig);

// Initialize Firebase Analytics
const analytics = getAnalytics(app);

// Initialize Firebase Authentication
const auth = getAuth(app);

// Initialize Firebase Realtime Database
const database = getDatabase(app);  // If you're using Realtime Database
// If you're using Firestore, uncomment the next line
// const firestore = getFirestore(app);  // If using Firestore

// Export the Firebase services
export { app, auth, database, analytics };
