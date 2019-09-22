import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyB3YxiuQQJifGZ67Mi2d-lcbi0eXxzK_3I",
  authDomain: "anthropos-a9760.firebaseapp.com",
  databaseURL: "https://anthropos-a9760.firebaseio.com",
  projectId: "anthropos-a9760",
  storageBucket: "",
  messagingSenderId: "848568367323",
  appId: "1:848568367323:web:6e1d16883b3547d810b4fe"
};

// Initialize Firebase
export const firebaseApp = firebase.initializeApp(firebaseConfig);

