// Task 1 - Create a Book Class
class Book {
    constructor(title, author, ISBN) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this._isAvailable = true;
    }

    getDetails() {
        return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.ISBN}`;
    }
    
    get isAvailable() {
        return this._isAvailable;
    }

    set isAvailable(status) {
        this._isAvailable = status;
    }
}
// Task 2 
class Section {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    getAvailableBooks() {
        return this.books.filter(book => book.isAvailable).length;
    }

    listBooks() {
        return this.books.map(book => `${book.title} - ${book.isAvailable ? 'Available' : 'Borrowed'}`)
    }
    
    calculateTotalBooksAvailable() {
        return this.getAvailableBooks();
    }
}
// Task 3 
class Patron {
    constructor(name) {
        this.name = name;
        this.borrowedBooks = [];
    }

    borrowBook(book) {
        if (book.isAvailable) {
            book.isAvailable = false;
            this.borrowedBooks.push(book);
        } else {
            console.log(`${book.title} is not available to borrow.`);
        }
    }

    returnBook(book) {
        const index = this.borrowedBooks.indexOf(book);
        if (index > -1) {
            book.isAvailable = true;
            this.borrowedBooks.splice(index, 1);
        }
    }
}
// Task 4 
class VIPPatron extends Patron {
    constructor(name) {
        super(name);
        this.priority = true;
    }

    borrowBook(book) {
        if (book.isAvailable) {
            book.isAvailable = false;
            this.borrowedBooks.push(book);
        } else {
            console.log(`${book.title} is not available to borrow.`);
        }
    }
}

// Task 6
const fictionSection = new Section("Fiction");
const scienceSection = new Section("Science");

const book1 = new Book("1984", "George Orwell", "123456789");
const book2 = new Book("Brave New World", "Aldous Huxley", "987654321");
const book3 = new Book("The Great Gatsby", "F. Scott Fitzgerald", "123123123");

fictionSection.addBook(book1);
fictionSection.addBook(book2);
scienceSection.addBook(book3);

const patron1 = new Patron("John Smith");
const vipPatron1 = new VIPPatron("Janet Jackson");

patron1.borrowBook(book1);
vipPatron1.borrowBook(book2);

console.log(fictionSection.calculateTotalBooksAvailable()); // 1
console.log(scienceSection.calculateTotalBooksAvailable()); // 1

patron1.returnBook(book1);
console.log(fictionSection.calculateTotalBooksAvailable()); // 2