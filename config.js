import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyCQTa711I8xCc1uIcgvgr4C8MaFFoVjBNs",
    authDomain: "book-santa-85166.firebaseapp.com",
    databaseURL: "https://book-santa-85166-default-rtdb.firebaseio.com",
    projectId: "book-santa-85166",
    storageBucket: "book-santa-85166.appspot.com",
    messagingSenderId: "232493846762",
    appId: "1:232493846762:web:93748c4c91c5d7f9054793"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
