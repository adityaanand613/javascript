let rightDiv = document.getElementById('rightDiv');
let headerBtn = document.getElementById('headerBtn');


async function getBooks() {
    let data = await fetch('https://books-backend.p.goit.global/books/top-books');
    let result = await data.json();
    return result;
}

function displayBooks(books) {
    rightDiv.innerHTML = '';  

    books.forEach(element => {
        let container = document.createElement('div');
        container.id = 'book_container';
        let mainDiv = document.createElement('div');
        mainDiv.id = 'books-cont';
        let bookType = document.createElement('p');
        bookType.className = "dlText";
        bookType.id = 'bookType'; 
        bookType.innerText = element.list_name;
        container.appendChild(bookType);

        element.books.forEach(ele => {
            let bookCon = document.createElement('div');
            bookCon.id = "bookInner";
            let img = document.createElement('img');
            img.src = ele.book_image;
            let nameBook = document.createElement('p');
            nameBook.id ="nameBook";
            nameBook.innerHTML = ele.title;
            let author = document.createElement('p')
            author.id ="author";
            author.innerText = ele.author;
            bookCon.appendChild(img);
            bookCon.appendChild(nameBook);
            bookCon.appendChild(author);
            mainDiv.appendChild(bookCon);
        });

        let showMoreBtn = document.createElement('button')
        showMoreBtn.id = "showMore";
        showMoreBtn.innerText= 'More';
        mainDiv.appendChild(showMoreBtn);
        container.appendChild(mainDiv);
        rightDiv.appendChild(container);
    });
}


async function showBooks() {
    let listOfBooks = await getBooks();
    displayBooks(listOfBooks);

    let categories = document.querySelectorAll('.category');
    categories.forEach(category => {
        category.addEventListener('click', () => {
            let categoryBooks = listOfBooks.filter(book => book.list_name === category.innerText);
            if (category.id === 'items-1') {
                displayBooks(listOfBooks);
            } else {
                displayBooks(categoryBooks);
            }
        });
    });
}

function toggleDarkMode() {
    let isDarkMode = document.body.classList.toggle('dark-mode');
    headerBtn.innerText = isDarkMode ? 'Light Mode' : 'Dark Mode';
}

headerBtn.addEventListener('click', toggleDarkMode);

window.onload = showBooks;