//OOP in Javascript

//Creating Factory
function createBook(title, author, pages) {
    const crazy = {
        title: title,
        author: author,
        pages: pages,
        printBook: function() {
            console.log("Printing")
        }
    }
    return crazy
}

//Creating using class
class CreateNewBook {
    constructor(title, author, pages) {
        this.title = title
        this.author = author
        this.pages = pages
    }

    get title(){
        return this.title
    }

    set title(title) {
        this.title = title
    }
}


//Creating an object
let book = {
    title: 'Atomic Habits',
    author: 'James Clear',
    pages: 256,
    //Creating function
    printBook: function() {
        console.log("Printing")
    }
}

//Using factory
const newBook = createBook('Whatever', 'Napolean', 222)

//adding more properties
newBook.color = "Black"

console.log(newBook)

//Object string

let message = 'Hey, my name is Jeff'

console.log(message.endsWith("f"))