// timbuktu is the library
let timbuktu;

// Default library data
const DEFAULT_DATA = [
  { civilization: 'Roman', title: 'Agricola and Germanica', author: 'Tacitus', status: 'read' },
  {
    civilization: 'Japanese',
    title: 'Hagakure',
    author: 'Yamamoto Tsunetomo',
    status: 'read'
  },
  { civilization: 'Hittite (Anatolian)', title: 'The Kingdom of the Hittites', author: 'Trevor Bryce', status: 'not read' },
  { civilization: 'Sassanids', title: 'Sassanian Persia', author: 'Touraj Daryaee', status: 'not read' }
];

// Book properties
const civilization = document.querySelector('#civilization');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const status = document.querySelector('#status');
const tableBody = document.querySelector('#book-table-body');

// Create Object 'book' with parameters for civilization, title, author and status
class Book {
  constructor (civilization, title, author, status) {
    this.civilization = civilization;
    this.title = title;
    this.author = author;
    this.status = status;
  }
}

// On form submit => Add new book into array, render book to table, clear forms
const form = document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  addBook();
  render();
  clearForm();
});

// Add Event Listener to table to listen for mouse click on Delete or Status buttons.
const table = document.querySelector('table').addEventListener('click', (e) => {
  // target the "title" field inside array
  const currentTarget = e.target.parentNode.parentNode.childNodes[3];

  if (e.target.innerHTML == 'delete') {
    if (confirm(`Are you sure you want to delete ${currentTarget.innerText}`)) { deleteBook(findBook(timbuktu, currentTarget.innerText)); }
    console.log('Deleted book from library');
  }
  if (e.target.classList.contains('status-button')) {
    toggleStatus(findBook(timbuktu, currentTarget.innerText));
  }
  updateLocalStorage();
  render();
});

// Add new book into the library
function addBook () {
  if (civilization.value.length === 0 || title.value.length === 0 || author.value.length === 0) {
    alert('Please fill all fields.');
    return;
  }
  const newBook = new Book(civilization.value, title.value, author.value, status.value);
  timbuktu.push(newBook);
  updateLocalStorage();
  console.log('New book has been added to the library.');
}

// Change status on book, Read or not read
// this may get replaced to hold links to books and other resources

function toggleStatus (book) {
  if (timbuktu[book].status === 'read') {
    timbuktu[book].status = 'not read';
  } else timbuktu[book].status = 'read';
}

// Splice to delete book from library
function deleteBook (currentBook) {
  timbuktu.splice(currentBook, currentBook + 1);
}

// Loop through array to find book
function findBook (timbuktuArray, title) {
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

function checkLocalStorage () {
  if (localStorage.getItem('timbuktuData')) {
    timbuktu = JSON.parse(localStorage.getItem('timbuktuData'));
  } else timbuktu = DEFAULT_DATA;
}

function render () {
  checkLocalStorage();
  tableBody.innerHTML = '';
  timbuktu.forEach((book) => {
    const htmlBook =
    `
      <tr>
        <td>${book.civilization}</td>
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td><button class="status-button">${book.status}</button></td>
        <td><button class="delete">delete</button></td>
      </tr>
    `;

    tableBody.insertAdjacentHTML('afterbegin', htmlBook);
  });
}

render();

// _______ firebase database ________ //

const database = firebase.database();
const rootRef = database.ref('timbuktu');

saveBtn.addEventListener('click' , (e) => {
  e.preventDefault;

  const autoId = rootRef.push().key;
  rootRef.child(autoId).set({
    civ: Book[civilization] ,
    title: Book[title] ,
    author: Book[author] ,
    status: Book[status]
  })
});