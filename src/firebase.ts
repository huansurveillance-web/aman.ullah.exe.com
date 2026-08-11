// ─────────────────────────────────────────────────────────────────────────
// Firebase setup — powers the shared "Customer Reviews" section.
// Uses Firebase Realtime Database (free Spark plan, no billing needed).
// ─────────────────────────────────────────────────────────────────────────

import { initializeApp, type FirebaseOptions } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig: FirebaseOptions = {
  apiKey: "AIzaSyCwLMDaCgKKkpjqy7Do49HQtmgJ2WHF5GQ",
  authDomain: "huan-surveillance.firebaseapp.com",
  databaseURL: "https://huan-surveillance-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "huan-surveillance",
  storageBucket: "huan-surveillance.firebasestorage.app",
  messagingSenderId: "689189344323",
  appId: "1:689189344323:web:2502fa6eb9f1d8739b70f6"
};

// True once someone has replaced the placeholder values above.
export const isFirebaseConfigured =
  firebaseConfig.apiKey !== "YOUR_API_KEY" &&
  !!firebaseConfig.apiKey &&
  !!firebaseConfig.projectId;

const app = isFirebaseConfigured ? initializeApp(firebaseConfig) : null;

export const rtdb = app ? getDatabase(app) : null;
