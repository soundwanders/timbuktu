// TIMBUKTU.JS //

// timbuktu is the library array
let timbuktu = [];

// Default data that is loaded into library each time page is opened
/*
const DEFAULT = [
  { civilization: 'Chinese', title: 'The China History Podcast', author: 'Laszlo Montgomery', format: 'podcast' },
  {
    civilization: 'Egyptians',
    title: 'The History of Egypt',
    author: 'Dominic Perry',
    format: 'podcast'
  },
  { civilization: 'Hittites', title: 'The Kingdom of the Hittites', author: 'Trevor Bryce', format: 'book' },
  { civilization: 'Mongols', title: 'The Wrath of the Khans', author: 'Dan Carlin', format: 'podcast' },
  { civilization: 'Persians', title: 'The History of Persia', author: 'Trevor Culley', format: 'podcast' },
  { civilization: 'Romans', title: 'The History of Rome', author: 'Mike Duncan', format: 'podcast' },
  { civilization: 'Sassanids', title: 'Sassanian Persia', author: 'Touraj Daryaee', format: 'book' }
];
*/

// Book properties
const civilization = document.querySelector('#civilization');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const format = document.querySelector('#format');
const tableBody = document.querySelector('#table-body');

// Create Object 'book' with parameters for civilization, title, author and format
class Book {
  constructor (civilization, title, author, format) {
    this.civilization = civilization;
    this.title = title;
    this.author = author;
    this.format = format;
  }
}

// On form submit => Add new book into array, render book to table, clear forms
// stopImmediatePropagation() method prevents other listeners of the same event from being called
const form = document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  e.stopImmediatePropagation();
  addBook();
  render();
  clearForm();
});

// Add Event Listener to table to listen for mouse click on Delete or format buttons.
const table = document.querySelector('table').addEventListener('click', (e) => {
  e.preventDefault();
  e.stopImmediatePropagation();

  // target the "title" field inside array
  const currentTarget = e.target.parentNode.parentNode.childNodes[3];

  if (e.target.innerHTML == 'x') {
    if (confirm(`Are you sure you want to delete ${currentTarget.innerText}`)) { deleteBook(getBook(timbuktu, currentTarget.innerText)); }
    console.log('Deleted book from library');
  }
  if (e.target.classList.contains('format-button')) {
    toggleFormat(getBook(timbuktu, currentTarget.innerText));
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
  const newBook = new Book(civilization.value, title.value, author.value, format.value);
  timbuktu.push(newBook);
  updateLocalStorage();
  console.log('Added new materials to your library.');
}

// Change format --> book or podcast
function toggleFormat (book) {
  if (timbuktu[book].format === 'book') {
    timbuktu[book].format = 'podcast';
  } else timbuktu[book].format = 'book';
}

// Splice to delete book from library
function deleteBook (currentBook) {
  timbuktu.splice(currentBook, currentBook + 1);
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
}

// Render table
function render () {
  tableBody.innerHTML = '';
  timbuktu.forEach((book) => {
    const htmlBook =
    `
      <tr>
        <td>${book.civilization}</td>
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td><button class="format-button">${book.format}</button></td>
        <td><button class="delete">x</button></td>
      </tr>
    `;
    tableBody.insertAdjacentHTML('afterbegin', htmlBook);
  });
}

render();

/// ////////////////////////////
// ________FIREBASE ________ //
/// ////////////////////////////

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
const rootRef = database.ref('/library/');
const autoId = rootRef.push().key;
const user = firebase.auth().currentUser;

// FIREBASE REALTIME DATABASE
// Save Data Button
const saveButton = document.getElementById('saveData').addEventListener('click', (e) => {
  e.preventDefault();
  e.stopImmediatePropagation();

  // if authorized user, remove old data before saving new data
  rootRef.child("timbuktu").remove();

  // save data under authorized user's id, else save under unique key if no uid
  rootRef.child("timbuktu").set({
  book: JSON.stringify(timbuktu) ,
  })
  console.log('Saved new data to database');
});

// LOAD database button
// Get snapshot of data from database and generate HTML elements to display library on page
const getData = document.getElementById('getData').addEventListener('click', (e) => {
  e.preventDefault;
  e.stopImmediatePropagation;

  rootRef.once('value', (snapshot) => {
    snapshot.forEach((childSnapshot) => {
      
      const childBooks = childSnapshot.val();
      const data = childSnapshot.exportVal();
      const newBook = new Book(childBooks.civilization , childBooks.title , childBooks.author , childBooks.format);
      console.log(newBook);
      
      timbuktu.splice(0, timbuktu.length);
      timbuktu.push(newBook);

      tableBody.innerHTML = '';
      timbuktu.forEach((newBook) => {
        const loadBook =
        `)
          <tr>  
            <td>${newBook.civilization}</td>
            <td>${newBook.title}</td>
            <td>${newBook.author}</td>
            <td><button class="format-button">${newBook.format}</button></td>
            <td><button class="delete">x</button></td>
          </tr>
        `;
        tableBody.insertAdjacentHTML('afterbegin', loadBook);
      });

      //timbuktu.slice(0, timbuktu.length);
      //timbuktu.push([childBooks]);

      console.log(childBooks);
      console.log(data);
      console.log(timbuktu);

    });
    console.log('Data loaded');
  });
});



// FIREBASE USER AUTHENTICATION
// Log in with Google
const logInGoogle = document.getElementById('loginGoogle').addEventListener('click', (e) => {
  e.preventDefault;
  e.stopImmediatePropagation;
  const google = new firebase.auth.GoogleAuthProvider();

  firebase.auth().signInWithPopup(google).then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    const credential = result.credential;
    // This gives you a Google Access Token.
    const token = credential.accessToken;
    // The signed-in user info
    const user = result.user;
    // Log user info and access token to console
    console.log('User', user, 'Token', token);
    console.log('Log-in successful');
    console.log('user id: ' + firebase.auth().currentUser.uid);
  })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('Error occurred on Google login', errorCode, errorMessage);
    });
});

// Log in with Github
const logInGithub = document.getElementById('loginGit').addEventListener('click', (e) => {
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
    console.log('User', user, 'Token', token);
    console.log('Log-in successful');
    console.log('user id: ' + firebase.auth().currentUser.uid);
  })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('Error occurred on Github login', errorCode, errorMessage);
    });
});

// Log out of the Timbuktu web app
const logout = document.getElementById('logOut').addEventListener('click', (e) => {
  e.preventDefault;
  e.stopImmediatePropagation;

  // Try to log out, else catch error on failure
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
