// JavaScript Library

// timbuktu is the library
let timbuktu;

// Default data that is loaded into library each time page is opened
const DEFAULT = [
  { civilization: 'Chinese', title: 'The China History Podcast', author: 'Laszlo Montgomery', medium: 'podcast' } ,
  {
    civilization: 'Egyptians',
    title: 'The History of Egypt',
    author: 'Dominic Perry',
    medium: 'podcast'
  },
  { civilization: 'Hittites', title: 'The Kingdom of the Hittites', author: 'Trevor Bryce', medium: 'book' } ,
  { civilization: 'Mongols', title: 'The Wrath of the Khans', author: 'Dan Carlin', medium: 'podcast' } ,
  { civilization: 'Persians', title: 'The History of Persia', author: 'Trevor Culley', medium: 'podcast' } ,
  { civilization: 'Romans', title: 'The History of Rome', author: 'Mike Duncan', medium: 'podcast' } ,
  { civilization: 'Sassanids', title: 'Sassanian Persia', author: 'Touraj Daryaee', medium: 'book' } ,
];

// Book properties
const civilization = document.querySelector('#civilization');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const medium = document.querySelector('#medium');
const tableBody = document.querySelector('#table-body');

// Create Object 'book' with parameters for civilization, title, author and medium
class Book {
  constructor (civilization, title, author, medium) {
    this.civilization = civilization;
    this.title = title;
    this.author = author;
    this.medium = medium;
  }
}

// On form submit => Add new book into array, render book to table, clear forms
const form = document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  addBook();
  render();
  clearForm();
});

// Add Event Listener to table to listen for mouse click on Delete or Medium buttons.
const table = document.querySelector('table').addEventListener('click', (e) => {
  // target the "title" field inside array
  const currentTarget = e.target.parentNode.parentNode.childNodes[3];

  if (e.target.innerHTML == 'x') {
    if (confirm(`Are you sure you want to delete ${currentTarget.innerText}`)) { deleteBook(findBook(timbuktu, currentTarget.innerText)); }
    console.log('Deleted book from library');
  }
  if (e.target.classList.contains('medium-button')) {
    toggleMedium(findBook(timbuktu, currentTarget.innerText));
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
  console.log(localStorage.getItem('timbuktuData'));
}

function checkLocalStorage () {
  if (localStorage.getItem('timbuktuData')) {
    timbuktu = JSON.parse(localStorage.getItem('timbuktuData'));
  } else timbuktu = DEFAULT;
}

// RENDER checks then updates local storage, sorts array alphabetically
// htmlBook variable is created for each book in the timbuktu library
function render () {
  checkLocalStorage();
  updateLocalStorage();
  timbuktu.sort().reverse();
  tableBody.innerHTML = '';
  timbuktu.forEach((book) => {
    const htmlBook =
    `
      <tr>
        <td>${book.civilization}</td>
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td><button class="medium-button">${book.medium}</button></td>
        <td><button class="delete">x</button></td>
      </tr>
    `
    tableBody.insertAdjacentHTML('afterbegin', htmlBook);
})};

render();