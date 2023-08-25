// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZ-6CRirIegJ-1DgJtX8drKxkLoY9bzwk",
  authDomain: "transcript-system-dcbaa.firebaseapp.com",
  projectId: "transcript-system-dcbaa",
  storageBucket: "transcript-system-dcbaa.appspot.com",
  messagingSenderId: "269074107374",
  appId: "1:269074107374:web:2a6d8300be62af9fbfdcff",
  measurementId: "G-D5HQY240JC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);