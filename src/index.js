import { initializeApp } from 'firebase/app'
import { 
    getFirestore, collection, onSnapshot,
    addDoc, deleteDoc, doc, serverTimestamp, query, orderBy
} from 'firebase/firestore'
import { getAuth, createUserWithEmailAndPassword, signOut } from 'firebase/auth';


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

  // init service 
  const db = getFirestore();
  const auth = getAuth();

  // Collection Referance 
  const colRef = collection(db, 'books');

  // query 
  const q = query(colRef, orderBy('createdAt'));

  // collection data

    onSnapshot(q, (snapshot) => {
        let books = [];

        snapshot.docs.forEach((doc) => {
            books.push({ ...doc.data(), id : doc.id })
        })
        console.log(books);
    })



// adding the document 
const addBookForm = document.querySelector('.add');
addBookForm.addEventListener('submit', (e) => {
    e.preventDefault();
    addDoc(colRef, {
        title: addBookForm.title.value,
        author: addBookForm.author.value,
        createdAt : serverTimestamp()
    })
    .then(() => {
        addBookForm.reset();
    })
})


// delete the document 
const deleteBookForm = document.querySelector('.delete');
deleteBookForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const docRef = doc(db, 'books', deleteBookForm.id.value);

    deleteDoc(docRef)
    .then(() => {
        deleteBookForm.reset();
    })

})

// signup form
const signupForm = document.querySelector('.signup');
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email     = signupForm.email.value;
    const password  = signupForm.password.value; 

    createUserWithEmailAndPassword(auth, email, password)
    .then((cred) => { 
        console.log(' user credentials : ',cred.user);
    })
    .catch((err) => {
        console.log(err.message);
    })
})


// login form
const loginForm = document.querySelector('.login');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

})


// logout button 

const logoutButton = document.querySelector('.logout');
logoutButton.addEventListener('submit', (e) => { 
    e.preventDefault();
}) 