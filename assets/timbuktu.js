// JavaScript Library


<<<<<<< HEAD
// Default data that is loaded into library each time page is opened
const DEFAULT = [
  { civilization: 'Chinese', title: 'The China History Podcast', author: 'Laszlo Montgomery', medium: 'podcast' } ,
=======
// timbuktu is the library that will hold the books/podcasts
let timbuktu = [];


// Default data that is loaded into library each time page is opened
const DEFAULT = [
  { civilization: 'Chinese', title: 'The China History Podcast', author: 'Laszlo Montgomery', format: 'podcast' } ,
>>>>>>> 5b8ec48d6c7318db724806742e2ade364e337f03
  {
    civilization: 'Egyptians',
    title: 'The History of Egypt',
    author: 'Dominic Perry',
<<<<<<< HEAD
    medium: 'podcast'
  },
  { civilization: 'Hittites', title: 'The Kingdom of the Hittites', author: 'Trevor Bryce', medium: 'book' } ,
  { civilization: 'Mongols', title: 'The Wrath of the Khans', author: 'Dan Carlin', medium: 'podcast' } ,
  { civilization: 'Persians', title: 'The History of Persia', author: 'Trevor Culley', medium: 'podcast' } ,
  { civilization: 'Romans', title: 'The History of Rome', author: 'Mike Duncan', medium: 'podcast' } ,
  { civilization: 'Sassanids', title: 'Sassanian Persia', author: 'Touraj Daryaee', medium: 'book' } ,
=======
    format: 'podcast'
  },
  { civilization: 'Hittites', title: 'The Kingdom of the Hittites', author: 'Trevor Bryce', format: 'book' } ,
  { civilization: 'Mongols', title: 'The Wrath of the Khans', author: 'Dan Carlin', format: 'podcast' } ,
  { civilization: 'Persians', title: 'The History of Persia', author: 'Trevor Culley', format: 'podcast' } ,
  { civilization: 'Romans', title: 'The History of Rome', author: 'Mike Duncan', format: 'podcast' } ,
  { civilization: 'Sassanids', title: 'Sassanian Persia', author: 'Touraj Daryaee', format: 'book' } ,
>>>>>>> 5b8ec48d6c7318db724806742e2ade364e337f03
];

// Book properties
const civilization = document.querySelector('#civilization');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
<<<<<<< HEAD
const medium = document.querySelector('#medium');
const tableBody = document.querySelector('#table-body');

// Create Object 'book' with parameters for civilization, title, author and medium
class Book {
  constructor (civilization, title, author, medium) {
    this.civilization = civilization;
    this.title = title;
    this.author = author;
    this.medium = medium;
=======
const format = document.querySelector('#format');
const tableBody = document.querySelector('#table-body');

// Create Object 'book' with parameters for civilization, title, author and format
class Book {
  constructor (civilization, title, author, format) {
    this.civilization = civilization;
    this.title = title;
    this.author = author;
    this.format = format;
>>>>>>> 5b8ec48d6c7318db724806742e2ade364e337f03
  }
}

// On form submit => Add new book into array, render book to table, clear forms
   //stopImmediatePropagation() method prevents other listeners of the same event from being called 
const form = document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  e.stopImmediatePropagation();
  addBook();
  render();
  clearForm();
});

<<<<<<< HEAD
// Add Event Listener to table to listen for mouse click on Delete or Medium buttons.
=======
// Add Event Listener to table to listen for mouse click on Delete or format buttons.
>>>>>>> 5b8ec48d6c7318db724806742e2ade364e337f03
const table = document.querySelector('table').addEventListener('click', (e) => {
  e.preventDefault();
  e.stopImmediatePropagation();

  // target the "title" field inside array
  const currentTarget = e.target.parentNode.parentNode.childNodes[3];

  if (e.target.innerHTML == 'x') {
    if (confirm(`Are you sure you want to delete ${currentTarget.innerText}`)) { deleteBook(getBook(timbuktu, currentTarget.innerText)); }
    console.log('Deleted book from library');
  }
<<<<<<< HEAD
  if (e.target.classList.contains('medium-button')) {
    toggleMedium(getBook(timbuktu, currentTarget.innerText));
=======
  if (e.target.classList.contains('format-button')) {
    toggleformat(getBook(timbuktu, currentTarget.innerText));
>>>>>>> 5b8ec48d6c7318db724806742e2ade364e337f03
  }
  updateLocalStorage();
  render();
});

// Add new book into the library
function addBook () {
  if (civilization.value.length === 0 || title.value.length === 0 || author.value.length === 0) {
    alert('Please fill all input fields.');
    return;
  }
<<<<<<< HEAD
  const newBook = new Book(civilization.value, title.value, author.value, medium.value);
  timbuktu.push(newBook);
  updateLocalStorage();
  console.log('Completed new addition to your library.');
}

// Change medium --> book or podcast

function toggleMedium (book) {
  if (timbuktu[book].medium === 'book') {
    timbuktu[book].medium = 'podcast';
  } else timbuktu[book].medium = 'book';
=======
  const newBook = new Book(civilization.value, title.value, author.value, format.value);
  timbuktu.push(newBook);
  updateLocalStorage();
  console.log('Added new materials to your library.');
}

// Change format --> book or podcast

function toggleformat (book) {
  if (timbuktu[book].format === 'book') {
    timbuktu[book].format = 'podcast';
  } else timbuktu[book].format = 'book';
>>>>>>> 5b8ec48d6c7318db724806742e2ade364e337f03
}

// Splice to delete book from library
function deleteBook (currentBook) {
  timbuktu.splice(currentBook, currentBook +1);
}

// Loop through array to find book
function getBook (timbuktuArray, title) {
  if (timbuktuArray.length === 0 || timbuktuArray === null) {
    return;
  }
  for (book of timbuktuArray) {
    if (book.title === title) {
      return timbuktuArray.indexOf(book);
    }
  }
}

// Clear input form on new book submission
function clearForm () {
  civilization.value = '';
  title.value = '';
  author.value = '';
}

// Local Storage
function updateLocalStorage () {
  localStorage.setItem('timbuktuData', JSON.stringify(timbuktu));
  console.log(localStorage.getItem('timbuktuData'));
}

function checkLocalStorage () {
  if (localStorage.getItem('timbuktuData')) {
    timbuktu = JSON.parse(localStorage.getItem('timbuktuData'));
  } else timbuktu = DEFAULT;
}

<<<<<<< HEAD
// RENDER checks then updates local storage, sorts array alphabetically
// htmlBook variable is created for each book in the timbuktu library
=======
// Render table
>>>>>>> 5b8ec48d6c7318db724806742e2ade364e337f03
function render () {
  checkLocalStorage();
  updateLocalStorage();
  tableBody.innerHTML = '';
  timbuktu.forEach((book) => {
    const htmlBook =
    `
      <tr>
        <td>${book.civilization}</td>
        <td>${book.title}</td>
        <td>${book.author}</td>
<<<<<<< HEAD
        <td><button class="medium-button">${book.medium}</button></td>
=======
        <td><button class="format-button">${book.format}</button></td>
>>>>>>> 5b8ec48d6c7318db724806742e2ade364e337f03
        <td><button class="delete">x</button></td>
      </tr>
    `
    tableBody.insertAdjacentHTML('afterbegin', htmlBook);
})};

render();
<<<<<<< HEAD
// Sort array's default data on page load
DEFAULT.sort().reverse();
=======

// ________FIREBASE ________ //
const firebaseConfig = {
  apiKey: 'AIzaSyBu5GPmyVRdvrxiRIw6mJ49pVzyp83BOyI',
  authDomain: 'timbuktu-42c57.firebaseapp.com',
  databaseURL: 'https://timbuktu-42c57-default-rtdb.firebaseio.com',
  projectId: 'timbuktu-42c57',
  storageBucket: 'timbuktu-42c57.appspot.com',
  messagingSenderId: '236099030702',
  appId: '1:236099030702:web:8c0faef690b95ae62a273f',
  measurementId: 'G-HJ19RV4GR2'
};

const database = firebase.database();
const rootRef = database.ref('/timbuktu/');
const autoId = rootRef.push().key;
const userId = firebase.auth().currentUser;

// FIREBASE REALTIME DATABASE
// Delete old data, Create new database entry
const saveButton = document.getElementById('saveData').addEventListener('click', (e) => {
  e.preventDefault();
  e.stopImmediatePropagation();

  // REMOVE old data
  rootRef.child(autoId).remove();
  // SAVE new data
  rootRef.child(autoId).set({
    timbuktu: JSON.stringify(timbuktu)
  })
  console.log('Saved new data to database');
});

// LOAD database (takes a snapshot of the referenced data, then parse to timbuktu array);
const getData = document.getElementById('getData').addEventListener('click', (e) => {
  e.preventDefault;
  e.stopImmediatePropagation;

  rootRef.once('value', (snapshot) => {
    snapshot.forEach((childSnapshot) => {
      const childBooks = childSnapshot.val();
      const bookData = JSON.stringify(childBooks);

      timbuktu.push(bookData);
      console.log(childBooks);
      console.log(bookData);
    })
    console.log("Data loaded")
  })
});


// FIREBASE USER AUTHENTICATION
// Log in with Google
const logInGoogle = document.getElementById("loginGoogle").addEventListener('click', (e) => {
  e.preventDefault;
  e.stopImmediatePropagation;
  const google = new firebase.auth.GoogleAuthProvider();

  firebase.auth().signInWithPopup(google).then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    const credential = result.credential;
    // This gives you a GitHub Access Token.
    const token = credential.accessToken;
    // The signed-in user info
    const user = result.user;
    // Log user info and access token to console
    console.log("User" , user , "Token" , token);
  })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("Error occurred on Google login" , errorCode , errorMessage);
  })
});

// Log in with Github
const logInGithub = document.getElementById("loginGit").addEventListener('click', (e) => {
  e.preventDefault;
  e.stopImmediatePropagation;
  const github = new firebase.auth.GithubAuthProvider();
  
  firebase.auth().signInWithPopup(github).then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    const credential = result.credential;
    // This gives you a GitHub Access Token.
    const token = credential.accessToken;
    // The signed-in user info
    const user = result.user;
    // Log user info and access token to console
    console.log("User" , user , "Token" , token);
  })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("Error occurred on Github login" , errorCode , errorMessage);
  })
});

// Log out
  const logout = document.getElementById('logOut').addEventListener('click', (e) => {
    e.preventDefault;
    e.stopImmediatePropagation;

    // Try to log out of Google
    try {
      firebase.auth().signOut().then(() => {
        console.log('Signed out successfully');
      });
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('Error occurred on logout', errorCode, errorMessage);
    }
  }); 
>>>>>>> 5b8ec48d6c7318db724806742e2ade364e337f03
