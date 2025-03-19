// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCYKmNscZL-FHcoDR3t1-UQ-OhAv4xp-o4",
  authDomain: "fir-frontend-a9e09.firebaseapp.com",
  projectId: "fir-frontend-a9e09",
  storageBucket: "fir-frontend-a9e09.firebasestorage.app",
  messagingSenderId: "726855412935",
  appId: "1:726855412935:web:781d325dc3d595907fa2e2",
  databaseURL:
    "https://console.firebase.google.com/project/fir-frontend-a9e09/database/fir-frontend-a9e09-default-rtdb/data/~2F",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
