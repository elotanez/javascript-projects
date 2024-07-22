// Define your Book class here:
class Book {
    constructor(title, author, copyright, isbn, pages, checked, discarded) {
        this.title = title;
        this.author = author;
        this.copyright = copyright;
        this.isbn = isbn;
        this.pages = pages;
        this.checked = checked;
        this.discarded = discarded;
    }
    checkout(uses=1) {
        this.checked += uses;
        return this.checked
    }
}

// Define your Manual and Novel classes here:
class Manual extends Book {
    constructor(title, author, copyright, isbn, pages, checked, discarded) {
        super(title, author, copyright, isbn, pages, checked, discarded);
    }
    throwOut(currentYear) {
        if (currentYear - this.copyright > 5) {
            this.discarded = 'Yes';
        }
        return this.discarded
    }
}

class Novel extends Book {
    constructor(title, author, copyright, isbn, pages, checked, discarded) {
        super(title, author, copyright, isbn, pages, checked, discarded);
    }
    throwOut() {
        if (this.checked > 100) {
            this.discarded = 'Yes';
        }
        return this.discarded
    }
}

// Declare the objects for exercises 2 and 3 here:
let manual = new Manual('Top Secret Shuttle Building Manual', 'Redacted', 2013, '0000000000000', 1147, 1, 'No');
let novel = new Novel('Pride and Prejudice', 'Jane Austen', 1813, '1111111111111', 432, 32, 'No')


// Code exercises 4 & 5 here:
console.log(manual.throwOut(2024));
console.log(novel.throwOut());
console.log(novel.checkout(5));
