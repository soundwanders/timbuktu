// JavaScript Library

// timbuktu is the library
let timbuktu;

// Default data that is loaded into library each time page is opened
const DEFAULT = [
  { civilization: 'Chinese', title: 'The China History Podcast', author: 'Laszlo Montgomery', format: 'podcast' } ,
  {
    civilization: 'Egyptians',
    title: 'The History of Egypt',
    author: 'Dominic Perry',
    format: 'podcast'
  },
  { civilization: 'Hittites', title: 'The Kingdom of the Hittites', author: 'Trevor Bryce', format: 'book' } ,
  { civilization: 'Mongols', title: 'The Wrath of the Khans', author: 'Dan Carlin', format: 'podcast' } ,
  { civilization: 'Persians', title: 'The History of Persia', author: 'Trevor Culley', format: 'podcast' } ,
  { civilization: 'Romans', title: 'The History of Rome', author: 'Mike Duncan', format: 'podcast' } ,
  { civilization: 'Sassanids', title: 'Sassanian Persia', author: 'Touraj Daryaee', format: 'book' } ,
];

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
const form = document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  addBook();
  renderTable();
  clearForm();
});

// Add Event Listener to table to listen for mouse click on Delete or format buttons.
const table = document.querySelector('table').addEventListener('click', (e) => {
  // target the "title" field inside array
  const currentTarget = e.target.parentNode.parentNode.childNodes[3];

  if (e.target.innerHTML == 'X') {
    if (confirm(`Are you sure you want to delete ${currentTarget.innerText}`)) { deleteBook(getBook(timbuktu, currentTarget.innerText)); }
    console.log('Deleted book from library');
  }
  if (e.target.classList.contains('format-button')) {
    toggleFormat(getBook(timbuktu, currentTarget.innerText));
  }
  updateLocalStorage();
  renderTable();
});

// Add new book into the library
function addBook () {
  if (civilization.value.length === 0 || title.value.length === 0 || author.value.length === 0) {
    alert('Please fill all fields.');
    return;
  }
  const newBook = new Book(civilization.value, title.value, author.value, format.value);
  timbuktu.push(newBook);
  updateLocalStorage();
  console.log('Completed new addition to your library.');
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
  localStorage.setItem('timbuktuData', JSON.stringify(timbuktu))
  console.log(localStorage.getItem('timbuktuData'));
}

function checkLocalStorage () {
  if (localStorage.getItem('timbuktuData')) {
    timbuktu = JSON.parse(localStorage.getItem('timbuktuData'));
  } else {
    timbuktu = DEFAULT;
    timbuktu.sort().reverse();
  }
}

function sortArray () {
  timbuktu.sort();
}

// Render function checks then updates local storage if data != null
// htmlBook variable is created for UI display
function renderTable () {
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
        <td><button class="format-button">${book.format}</button></td>
        <td><button class="button-primary" id="delete">X</button></td>
      </tr>
    `
    tableBody.insertAdjacentHTML('afterbegin', htmlBook);
})};

renderTable();
sortArray();