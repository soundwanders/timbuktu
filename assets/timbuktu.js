// JavaScript Library

// timbuktu is the library
let timbuktu;

// construct an object 'book' with properties for title, author, publishing date, subject, and status
class book {
    constructor(title, author, published, subject, status) {
        this.title = title;
        this.author = author;
        this.published = published;
        this.subject = subject;
        this.status = status;
    }
};

function newBook() {
    if (title.value.length === 0 || author.value.length === 0 || published.value.length === 0 || subject.value.length === 0) {
    confirm("Some fields are still empty, add the new book anyway?");
        if (confirm) { 
            const newBook = new book(title.value, author.value, published.value, subject.value, status.value);
            timbuktu.push(newBook);
            updateLocalStorage();
            console.log("New book added to library.");
        } else {
            return;
        }
    }
};

function updateLocalStorage() {
    localStorage.setItem(timbuktu);
}