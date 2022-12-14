
/*const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Who are you?', name => {
    console.log(`Hey there ${name}!`);
    readline.close();
  });
*/
let num; //This is the variable that will limit the loop.
let myLibrary = [];
let i;
let myBookName;
let myObject;

function Book(bookName) {
    this.bookName = bookName;
}

function addBookToLibrary() {
    // do stuff here
    num = numberOfBooksToAdd(); 
    
    i = 0;
    while ( i < num) {
        myBookName = myInputFunc();
        myObject = myBookName;
        myLibrary.push(myObject.bookName);
        i++;
    }
    console.log(`The books you have in your library are: ${myLibrary}`);
}

function numberOfBooksToAdd() {
    let booksNumber;
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
      });
    
      readline.question('How many books do you want to add to your library? ', numOfBooks => {
        booksNumber = numOfBooks;
        readline.close();
      });
    return booksNumber;
}

function myInputFunc() {
    let myCurrentBook;
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });
    
    readline.question('Add a book name? ', name => {
        console.log(`Hey there ${name}!`);
        myCurrentBook = name;
        readline.close();
    });
    return myCurrentBook;
}

addBookToLibrary();