import firebase from "firebase/compat/app"
import "firebase/compat/firestore"
import "firebase/compat/auth"

const firebaseConfig = {
    apiKey: "AIzaSyDynX9VRDhx-6IU2S7YWVHAShb2aeuIB0Q",
    authDomain: "our-blog-system-project.firebaseapp.com",
    projectId: "our-blog-system-project",
    storageBucket: "our-blog-system-project.appspot.com",
    messagingSenderId: "425962068236",
    appId: "1:425962068236:web:e643569cf4c84d7d9e9129"
  };

  firebase.initializeApp(firebaseConfig)
  let db = firebase.firestore();
  let timestamp = firebase.firestore.FieldValue.serverTimestamp;
  let auth = firebase.auth();

  export {db,timestamp,auth}