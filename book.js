const myLibrary = [];

function Book(name, author, pages, read){
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read
}

myLibrary.push(new Book("The Metamorphosis", "Franz Kafka", 80, true));
myLibrary.push(new Book("White Nights", "Fyodor Dostoevsky", 82, true));
myLibrary.push(new Book("The Plague", "Albert Camus", 368, false));


function displayBooks() {
    const bookList = document.getElementById('bookList');
    bookList.innerHTML = `
        <table>
            <tr>
                <th>Serial no.</th>
                <th>Book Name</th>
                <th>Author</th>
                <th>No. Pages</th>
                <th>Read Status</th>
                <th>Remove Book</th>
            </tr>
        </table>
    `; // Reset table header

    myLibrary.forEach((book, index) => {
        const bookInfo = `
            <tr>
                <td id="bookIndex-${index}">${index + 1}</td>
                <td>${book.name}</td>
                <td>${book.author}</td>
                <td>${book.pages}</td>
                <td>
                    <input type="checkbox" id="readStatus-${index}" onclick="toggleReadStatus(${index})" ${book.read ? 'checked' : ''}>
                </td>
                <td><button onclick="removeBook(${index})" id="removeBook" class="removeButton">Remove Book</button></td>
            </tr>
        `;
        bookList.querySelector('table').innerHTML += bookInfo;
    });
}

function addBookToLibrary(){
    event.preventDefault();
    
    let bookName = document.getElementById("bname").value;
    let authorName = document.getElementById("aname").value;
    let numberOfPages = document.getElementById("numpages").value;
    let readStatus = document.getElementById("readStatus").checked;
    
    
    myLibrary.push(new Book(bookName, authorName, numberOfPages, readStatus));
    
    console.log("_______________________");
    
    for (let i = 0; i < myLibrary.length; i++) {
        console.log(myLibrary[i]);
    }

    document.getElementById("bname").value = '';
    document.getElementById("aname").value = '';
    document.getElementById("numpages").value = '';
    document.getElementById("readStatus").checked = false;

    togglePopup();
    
    displayBooks();
}

function toggleReadStatus(index) {
    const checkbox = document.getElementById(`readStatus-${index}`);
    myLibrary[index].read = checkbox.checked;
    console.log(`Book ${index + 1} read status: ${checkbox.checked}`);

    for (let i = 0; i < myLibrary.length; i++) {
        console.log(myLibrary[i]);
    }
}

function removeBook(index){
    myLibrary.splice(index, 1);
    displayBooks();
}

function togglePopup(){
    document.getElementById('addForm').classList.toggle("active");
}


displayBooks();
