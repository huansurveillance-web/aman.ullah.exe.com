// ─────────────────────────────────────────────────────────────────────────
// Firebase setup — powers the shared "Customer Reviews" section.
//
// This site is deployed as a static site (GitHub Pages), so there is no
// server of our own to store data on. Firebase Firestore is a free,
// well-known service that lets a static site read/write shared data that
// every visitor can see — which is exactly what "reviews visible to all
// customers" needs.
//
// SETUP (one-time, ~5 minutes) — do this yourself, it needs your own
// Google account, no one else can do it for you:
//   1. Go to https://console.firebase.google.com and click "Add project".
//      Give it any name (e.g. "huan-surveillance") and finish creation.
//   2. In the left sidebar click "Build" → "Firestore Database" → "Create
//      database". Choose a region close to Pakistan (e.g. asia-south1) and
//      start in "Production mode".
//   3. Go to "Rules" tab of Firestore and paste this, then click Publish:
//
//        rules_version = '2';
//        service cloud.firestore {
//          match /databases/{database}/documents {
//            match /reviews/{reviewId} {
//              allow read: if true;
//              allow create: if request.resource.data.name is string
//                && request.resource.data.name.size() > 0
//                && request.resource.data.name.size() < 80
//                && request.resource.data.comment is string
//                && request.resource.data.comment.size() > 0
//                && request.resource.data.comment.size() < 1000
//                && request.resource.data.rating is int
//                && request.resource.data.rating >= 1
//                && request.resource.data.rating <= 5;
//              allow update, delete: if false;
//            }
//          }
//        }
//
//   4. Go to Project Settings (gear icon) → General → "Your apps" → click
//      the web icon (</>) → register the app (nickname anything) → copy the
//      firebaseConfig object it shows you → paste the values below.
//
// Until you fill in the real values below, the Reviews section will
// automatically fall back to showing sample reviews and disable the
// submit form, so the site keeps working fine either way.
// ─────────────────────────────────────────────────────────────────────────

import { initializeApp, type FirebaseOptions } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig: FirebaseOptions = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// True once someone has replaced the placeholder values above.
export const isFirebaseConfigured =
  firebaseConfig.apiKey !== "YOUR_API_KEY" &&
  !!firebaseConfig.apiKey &&
  !!firebaseConfig.projectId;

const app = isFirebaseConfigured ? initializeApp(firebaseConfig) : null;

export const db = app ? getFirestore(app) : null;
