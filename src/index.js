import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyBF5eFk3pVirGAVC6Q-cqb0v1QnB3b4DXU",
    authDomain: "fir-dojo-a15b2.firebaseapp.com",
    projectId: "fir-dojo-a15b2",
    storageBucket: "fir-dojo-a15b2.appspot.com",
    messagingSenderId: "824838201987",
    appId: "1:824838201987:web:029a7d3aa02cae654e71b6"
  };

  // init Firebase 
  initializeApp(firebaseConfig);

  // init Firestore 
  const db = getFirestore();



