class Bookshelf {
  constructor() {
    this.favoriteBooks = [];
  }
  addBooks(singleBook) {
    if (!singleBook.includes('Great')) {
      this.favoriteBooks.push(singleBook);
    }
  }
  
  showBooks() {
    console.log(`Numbers of books: ${this.favoriteBooks.length}`);
    for (let book of this.favoriteBooks) {
      console.log(book);
    }
  }
}

function loadBooks(bookshelfInstance) {
  fakeAjax(BOOK_API, function onBooks(booksArray) {
    for (let book of booksArray) {
      bookshelfInstance.addBooks(book);
    }
    bookshelfInstance.showBooks();
  })
}

var BOOK_API = 'https://some.url/api';

var bookshelfInstance = new Bookshelf();

loadBooks(bookshelfInstance);

// ***********************

// NOTE: don't modify this function at all
function fakeAjax(url, cb) {
  setTimeout(function fakeLoadingDelay() {
    cb([
      'A Song of Ice and Fire',
      'The Great Gatsby',
      'Crime & Punishment',
      'Great Expectations',
      "You Don't Know JS",
    ]);
  }, 500);
}
