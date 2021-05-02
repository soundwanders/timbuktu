// TIMBUKTU.JS //

// timbuktu is the library array
let timbuktu = [];


// Default data that is loaded into library each time page is opened
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


// Book properties
const civilization = document.querySelector('#civilization');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const format = document.querySelector('#format');
const tableBody = document.querySelector('#table-body');

// Construct object with class book
class Book {
  constructor (civilization, title, author, format) {
    this.civilization = civilization;
    this.title = title;
    this.author = author;
    this.format = format;
  }
};

// On form submit => Add new book into array, render book to table, clear forms
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

  // target "title" field inside array
  const currentTarget = e.target.parentNode.parentNode.childNodes[3];
  if (e.target.innerHTML == 'x') {
    if (confirm(`Are you sure you want to delete ${currentTarget.innerText}`)) { deleteBook(getBook(timbuktu, currentTarget.innerText)); }
    console.log('Deleted book from library');
  }
  if (e.target.classList.contains('format-button')) {
    toggleFormat(getBook(timbuktu, currentTarget.innerText));
  }
  updateLocalStorage();
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
  console.log(`Successfully added ${title.value} to your library.`);
  console.log(timbuktu);
}

// Change format
function toggleFormat (book) {
  if (timbuktu[book].format === 'book') {
    timbuktu[book].format = 'podcast';
  } else timbuktu[book].format = 'book';
};

function deleteBook (currentBook) {
  timbuktu.splice(currentBook, currentBook + 1);
};

// Loop through array to find book title
function getBook (timbuktuArray, title) {
  if (timbuktuArray.length === 0 || timbuktuArray === null) {
    return;
  }
  for (book of timbuktuArray) {
    if (book.title === title) {
      return timbuktuArray.indexOf(book);
    }
  }
};

// Clear input forms whenever new book/podcast is submitted
function clearForm () {
  civilization.value = '';
  title.value = '';
  author.value = '';
};

// Local Storage
function updateLocalStorage () {
  localStorage.setItem('timbuktuData', JSON.stringify(timbuktu));
};

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
    `
    tableBody.insertAdjacentHTML('afterbegin', htmlBook);
  })
};

/////////////////////////////////
// ________ FIREBASE ________ ///
/////////////////////////////////

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
const rootRef = database.ref('/data/');
const user = firebase.auth().currentUser;
// const autoId = rootRef.push().key;

// FIREBASE REALTIME DATABASE
// Save Data Button
const saveButton = document.getElementById('saveData').addEventListener('click', (e) => {
  e.preventDefault();
  e.stopImmediatePropagation();

  rootRef.child("library").remove();

  // save data allowed if authorized user logged in (see database.rules)
    rootRef.child("library").set ({
      book: JSON.stringify(timbuktu) ,  
    })
    .catch ((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('Error occurred' , errorCode , errorMessage);
    })
  console.log('Saved new data to database');
});

// Load Data Button


// Load Data Button
const getData = document.getElementById('getData').addEventListener('click', (e) => {
  e.preventDefault;
  e.stopImmediatePropagation;

 rootRef.once('value', (snapshot) => {
     snapshot.forEach((childSnapshot) => {
      const snap = snapshot.exportVal();
      const stringifyData = JSON.stringify(childSnapshot.exportVal());
      const reload = JSON.parse(stringifyData);

      const newArray = [];
      newArray.push(reload);
      
      
      console.log("-------newArray------")
      console.log(newArray);
      console.log("------snap------")
      console.log(snap);

        tableBody.innerHTML = '';

        newArray.forEach((book) => {
          const htmlBook =
          `
            <tr>
              <td>${book.civilization}</td>
              <td>${book.title}</td>
              <td>${book.author}</td>
              <td><button class="format-button">${book.format}</button></td>
              <td><button class="delete">x</button></td>
            </tr>
          `
          tableBody.insertAdjacentHTML('afterbegin', htmlBook);
        })
      })
    console.log('Loaded data from the Firebase database');
  }) 
});


/**
// FIREBASE LOAD ARRAY example ... 
var events = [];
var databaseRef = database.ref("events").orderByChild("date");

databaseRef.on('child_added', function(snapshot) {
  var event = snapshot.val(); 

  // add the event to the UI
  var elm = document.createElement('li');
  elm.id = 'event-'+snapshot.key;
  elm.innerText = event.title;
  document.querySelector('#event-list').appendChild(elm);

  // add the event to our list
  events.push({
    title: event.title, 
    content: event.content
  });

  // update/recalculate our avg event duration
  calculateAverageEventDuration(events);
});

*/

/**
const getData = document.getElementById('getData').addEventListener('click', (e) => {
  e.preventDefault;
  e.stopImmediatePropagation;

 rootRef.once('value', (snapshot) => {
     snapshot.forEach((childSnapshot) => {
      const stringifyData = JSON.stringify(childSnapshot.val());
      const loadLibrary = JSON.parse(stringifyData);

      timbuktu.push(loadLibrary);

        for (let i = 0; i < timbuktu[0].length; i++) {
          const htmlBook =
          `
            <tr>
              <td>${timbuktu[0].civilization}</td>
              <td>${timbuktu[0].title}</td>
              <td>${timbuktu[0].author}</td>
              <td><button class="format-button">${timbuktu[0].format}</button></td>
              <td><button class="delete">x</button></td>
            </tr>
          `
          tableBody.insertAdjacentHTML('afterbegin', htmlBook);
        }

      console.log("-----timbuktu-----")
      console.log(timbuktu);

       tableBody.innerHTML = '';

      const keys = timbuktuArray.keys(childSnapshot.val());

      console.log("-----keys-----");
      console.log(keys);

      timbuktuArray.forEach((object) => {

        const htmlBook =
        `)
          <tr>
            <td>${book.civilization}</td>
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td><button class="format-button">${book.format}</button></td>
            <td><button class="delete">x</button></td>
          </tr>
        `
        tableBody.insertAdjacentHTML('afterbegin', htmlBook);
      }) 

      timbuktuArray.forEach((key, index) => {
        console.log(`${key}: ${timbuktuArray[key]}`);

        const htmlBook =
        `)
          <tr>
            <td>${key.civilization}</td>
            <td>${key.title}</td>
            <td>${key.author}</td>
            <td><button class="format-button">${key.format}</button></td>
            <td><button class="delete">x</button></td>
          </tr>
        `
        tableBody.insertAdjacentHTML('afterbegin', htmlBook);
      })
    })
    console.log('Loaded user data from the Firebase database');
  })
});

*/


// FIREBASE USER AUTHENTICATION
// Log in with Google
const loginGoogle = document.getElementById('loginGoogle').addEventListener('click', (e) => {
  e.preventDefault;
  e.stopImmediatePropagation;

  const google = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(google).then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    // get firebase Auth credential
    const credential = result.credential;
    // get Google Access Token.
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
    })
  document.getElementById('loginGoogle').innerHTML = '';
  document.getElementById('loginGoogle').value = 'Signed In';
});

// Log in with Github
const loginGithub = document.getElementById('loginGithub').addEventListener('click', (e) => {
  e.preventDefault;
  e.stopImmediatePropagation;

  const github = new firebase.auth.GithubAuthProvider();
  firebase.auth().signInWithPopup(github).then((result) => {
    /** @type {firebase.auth.OAuthCredential} */

    const credential = result.credential;
    const token = credential.accessToken;
    const user = result.user;
    console.log('User', user, 'Token', token);
    console.log('Log-in successful');
    console.log('user id: ' + firebase.auth().currentUser.uid);
  })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('Error occurred on Github login', errorCode, errorMessage);
    })
    document.getElementById('loginGithub').innerHTML = '';
    document.getElementById('loginGithub').value = 'Signed In';
});

// Log out of the Timbuktu web app
const logout = document.getElementById('logOut').addEventListener('click', (e) => {
  e.preventDefault;
  e.stopImmediatePropagation;

  try {
    firebase.auth().signOut().then(() => {
      console.log('Signed out successfully');
    });
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log('Error occurred on logout', errorCode, errorMessage);
  }
  document.getElementById('loginGoogle').innerHTML = '';
  document.getElementById('loginGithub').innerHTML = '';
  document.getElementById('loginGoogle').value = 'Sign in to Google';
  document.getElementById('loginGithub').value = 'Sign in to Github';
});