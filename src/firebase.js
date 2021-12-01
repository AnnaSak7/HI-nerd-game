// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";

// import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDzW0Kv9OzwXdBOlekgMhUzKyxwckcU15Y",
//   authDomain: "nerd-invaders.firebaseapp.com",
//   projectId: "nerd-invaders",
//   storageBucket: "nerd-invaders.appspot.com",
//   messagingSenderId: "427561987199",
//   appId: "1:427561987199:web:fac688f1b45142c52ce34a",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

import Phaser from 'phaser';

//import { LeaderBoard } from 'phaser3-rex-plugins/plugins/firebase-components'

// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.2.0/firebase-app.js';
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  deleteDoc,
  getDocs,
} from 'https://www.gstatic.com/firebasejs/9.2.0/firebase-firestore.js';
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: 'AIzaSyDzW0Kv9OzwXdBOlekgMhUzKyxwckcU15Y',
  authDomain: 'nerd-invaders.firebaseapp.com',
  projectId: 'nerd-invaders',
  storageBucket: 'nerd-invaders.appspot.com',
  messagingSenderId: '427561987199',
  appId: '1:427561987199:web:fac688f1b45142c52ce34a',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// //ADD TO FIREBASE
// async function postScore() {
//   var score = readInput('score');
//   var name = readInput('name');
//   if (!score) return null;
//   try {
//     const docRef = await addDoc(collection(db, 'score'), {
//       score: score,
//       name: name,
//     });
//     clearInput('score');
//     clearInput('name');
//   } catch (e) {
//     console.error('Error adding document: ', e);
//   }
// }

export default class LeaderBoard extends Phaser.Scene {
    constructor(){
        super('leaderboard')
    }

    init()
}
