
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyCXyL6cMGjE8AquDcAMK-wxAxMrbTf_c4w",
  authDomain: "intt-leisure.firebaseapp.com",
  projectId: "intt-leisure",
  storageBucket: "intt-leisure.appspot.com",
  messagingSenderId: "31754191258",
  appId: "1:31754191258:web:a2ed6eb5b7f4ba35da7a23",
  measurementId: "G-EH4JPS6XHL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);