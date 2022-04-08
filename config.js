import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyCSjG1L9jMHhp82NOVVRaqHZvR_9JCp7-k",
  authDomain: "project-71-d1636.firebaseapp.com",
  projectId: "project-71-d1636",
  storageBucket: "project-71-d1636.appspot.com",
  messagingSenderId: "872499530954",
  appId: "1:872499530954:web:c55778180ab5d1f9fd3833"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
