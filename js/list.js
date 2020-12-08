//button 1
document.getElementById('button1').addEventListener('click', (event) => {
    const input = document.querySelector('input');

    const booksList = document.getElementById('books-list');

    const renderBooks = (book) => {
        let li = document.createElement('li');
        let col = document.createElement('div');
        let singleBookRow = document.createElement('div');
        let bookTitle = document.createElement('h2');
        let bookAuthors = document.createElement('h3');
        let bookDescription = document.createElement('p');
        let bookThumbnail = document.createElement('img');

        bookTitle.textContent = book.volumeInfo.title;
        bookAuthors.textContent = book.volumeInfo.authors;
        //bookDescription.textContent = book.volumeInfo.description ? book.volumeInfo.description : " Sorry no description";
        bookThumbnail.src = book.volumeInfo.imageLinks ?
            book.volumeInfo.imageLinks.thumbnail : "./img/nopicture.gif"

        col.appendChild(bookTitle);
        col.appendChild(bookAuthors);
        //col.appendChild(bookDescription);
        singleBookRow.appendChild(bookThumbnail);
        singleBookRow.appendChild(col);
        li.appendChild(singleBookRow);

        li.classList.add('list-group-item');
        singleBookRow.classList.add('row');
        col.classList.add('col-md-10');
        bookThumbnail.classList.add('col-md-2', 'rwd');

        booksList.appendChild(li);

    }

    const prefomSearch = () => {

        booksList.innerHTML = "";
        const searchURI = `https://www.googleapis.com/books/v1/volumes?q=subject:drama&filter=ebooks&key=AIzaSyDguh-Hp8cUCGpm3KdOd6NtZ4oqX5O7RrQ`;

        fetch(searchURI)
            .then(resp => resp.json())
            .then(resp => {
                return resp.items.map(book => renderBooks(book))
            })
            .catch((err) => {
                console.log(`Fetch api error: ${err}`);
            });

        input.value = input.defaultValue;
    }

    prefomSearch();

});

//button2
document.getElementById('button2').addEventListener('click', (event) => {
    const input = document.querySelector('input');
    // const button = document.getElementById('button1');
    const booksList = document.getElementById('books-list');

    const renderBooks = (book) => {
        let li = document.createElement('li');
        let col = document.createElement('div');
        let singleBookRow = document.createElement('div');
        let bookTitle = document.createElement('h2');
        let bookAuthors = document.createElement('h3');
        let bookDescription = document.createElement('p');
        let bookThumbnail = document.createElement('img');

        bookTitle.textContent = book.volumeInfo.title;
        bookAuthors.textContent = book.volumeInfo.authors;
        //bookDescription.textContent = book.volumeInfo.description ? book.volumeInfo.description : " Sorry no description";
        bookThumbnail.src = book.volumeInfo.imageLinks ?
            book.volumeInfo.imageLinks.thumbnail : "./img/nopicture.gif"

        col.appendChild(bookTitle);
        col.appendChild(bookAuthors);
        //col.appendChild(bookDescription);
        singleBookRow.appendChild(bookThumbnail);
        singleBookRow.appendChild(col);
        li.appendChild(singleBookRow);

        li.classList.add('list-group-item');
        singleBookRow.classList.add('row');
        col.classList.add('col-md-10');
        bookThumbnail.classList.add('col-md-2', 'rwd');

        booksList.appendChild(li);
    }

    const prefomSearch = () => {

        booksList.innerHTML = "";
        const searchURI = `https://www.googleapis.com/books/v1/volumes?q=subject:humor&filter=ebooks&key=AIzaSyDguh-Hp8cUCGpm3KdOd6NtZ4oqX5O7RrQ`;
        fetch(searchURI)
            .then(resp => resp.json())
            .then(resp => {
                return resp.items.map(book => renderBooks(book))
            })
            .catch((err) => {
                console.log(`Fetch api error: ${err}`);
            });

        input.value = input.defaultValue;
    }

    prefomSearch();


});

//button3
document.getElementById('button3').addEventListener('click', (event) => {
    const input = document.querySelector('input');
    const button = document.getElementById('button3');
    const booksList = document.getElementById('books-list');

    const renderBooks = (book) => {
        let li = document.createElement('li');
        let col = document.createElement('div');
        let singleBookRow = document.createElement('div');
        let bookTitle = document.createElement('h2');
        let bookAuthors = document.createElement('h3');
        let bookDescription = document.createElement('p');
        let bookThumbnail = document.createElement('img');

        bookTitle.textContent = book.volumeInfo.title;
        bookAuthors.textContent = book.volumeInfo.authors;
        //bookDescription.textContent = book.volumeInfo.description ? book.volumeInfo.description : " Sorry no description";
        bookThumbnail.src = book.volumeInfo.imageLinks ?
            book.volumeInfo.imageLinks.thumbnail : "./img/nopicture.gif"

        col.appendChild(bookTitle);
        col.appendChild(bookAuthors);
        //col.appendChild(bookDescription);
        singleBookRow.appendChild(bookThumbnail);
        singleBookRow.appendChild(col);
        li.appendChild(singleBookRow);

        li.classList.add('list-group-item');
        singleBookRow.classList.add('row');
        col.classList.add('col-md-10');
        bookThumbnail.classList.add('col-md-2', 'rwd');

        booksList.appendChild(li);
    }

    const prefomSearch = () => {

        booksList.innerHTML = "";
        const searchURI = `https://www.googleapis.com/books/v1/volumes?q=subject:travel&filter=ebooks&key=AIzaSyDguh-Hp8cUCGpm3KdOd6NtZ4oqX5O7RrQ`;
        fetch(searchURI)
            .then(resp => resp.json())
            .then(resp => {
                return resp.items.map(book => renderBooks(book))
            })
            .catch((err) => {
                console.log(`Fetch api error: ${err}`);
            });

        input.value = input.defaultValue;
    }

    prefomSearch();


});

//drama
document.getElementById('dramaButton').addEventListener('click', (event) => {
    const input = document.querySelector('input');
    // const button = document.getElementById('button2');
    const booksList = document.getElementById('books-list');

    const renderBooks = (book) => {
        let li = document.createElement('li');
        let col = document.createElement('div');
        let singleBookRow = document.createElement('div');
        let bookTitle = document.createElement('h2');
        let bookAuthors = document.createElement('h3');
        let bookDescription = document.createElement('p');
        let bookThumbnail = document.createElement('img');

        bookTitle.textContent = book.volumeInfo.title;
        bookAuthors.textContent = book.volumeInfo.authors;
        //bookDescription.textContent = book.volumeInfo.description ? book.volumeInfo.description : " Sorry no description";
        bookThumbnail.src = book.volumeInfo.imageLinks ?
            book.volumeInfo.imageLinks.thumbnail : "./img/nopicture.gif"

        col.appendChild(bookTitle);
        col.appendChild(bookAuthors);
        //col.appendChild(bookDescription);
        singleBookRow.appendChild(bookThumbnail);
        singleBookRow.appendChild(col);
        li.appendChild(singleBookRow);

        li.classList.add('list-group-item');
        singleBookRow.classList.add('row');
        col.classList.add('col-md-10');
        bookThumbnail.classList.add('col-md-2', 'rwd');

        booksList.appendChild(li);
    }

    const prefomSearch = () => {

        booksList.innerHTML = "";
        const searchURI = 'https://www.googleapis.com/books/v1/volumes?q=time&printType=books&maxResults=40&key=AIzaSyDguh-Hp8cUCGpm3KdOd6NtZ4oqX5O7RrQ';

        fetch(searchURI)
            .then(resp => resp.json())
            .then(resp => {
                return resp.items.map(book => renderBooks(book))
            })
            .catch((err) => {
                console.log(`Fetch api error: ${err}`);
            });

        input.value = input.defaultValue;
    }

    prefomSearch();


});
//humor button
document.getElementById('humorButton').addEventListener('click', (event) => {
    const input = document.querySelector('input');
    const button = document.getElementById('button3');
    const booksList = document.getElementById('books-list');

    const renderBooks = (book) => {
        let li = document.createElement('li');
        let col = document.createElement('div');
        let singleBookRow = document.createElement('div');
        let bookTitle = document.createElement('h2');
        let bookAuthors = document.createElement('h3');
        let bookDescription = document.createElement('p');
        let bookThumbnail = document.createElement('img');

        bookTitle.textContent = book.volumeInfo.title;
        bookAuthors.textContent = book.volumeInfo.authors;
        //bookDescription.textContent = book.volumeInfo.description ? book.volumeInfo.description : " Sorry no description";
        bookThumbnail.src = book.volumeInfo.imageLinks ?
            book.volumeInfo.imageLinks.thumbnail : "./img/nopicture.gif"

        col.appendChild(bookTitle);
        col.appendChild(bookAuthors);
        //col.appendChild(bookDescription);
        singleBookRow.appendChild(bookThumbnail);
        singleBookRow.appendChild(col);
        li.appendChild(singleBookRow);

        li.classList.add('list-group-item');
        singleBookRow.classList.add('row');
        col.classList.add('col-md-10');
        bookThumbnail.classList.add('col-md-2', 'rwd');

        booksList.appendChild(li);
    }

    const prefomSearch = () => {

        booksList.innerHTML = "";
        const searchURI = 'https://www.googleapis.com/books/v1/volumes?q=time&printType=magazines&maxResults=40&key=AIzaSyDguh-Hp8cUCGpm3KdOd6NtZ4oqX5O7RrQ';

        fetch(searchURI)
            .then(resp => resp.json())
            .then(resp => {
                return resp.items.map(book => renderBooks(book))
            })
            .catch((err) => {
                console.log(`Fetch api error: ${err}`);
            });

        input.value = input.defaultValue;
    }

    prefomSearch();


});






//glavni
window.addEventListener('DOMContentLoaded', (event) => {
    const input = document.querySelector('#searchMe');
    const button = document.querySelector('button');
    const booksList = document.getElementById('books-list');

    const renderBooks = (book) => {
        let li = document.createElement('li');
        let col = document.createElement('div');
        let singleBookRow = document.createElement('div');
        let bookTitle = document.createElement('h2');
        let bookAuthors = document.createElement('h3');
        let bookDescription = document.createElement('p');
        let bookThumbnail = document.createElement('img');

        bookTitle.textContent = book.volumeInfo.title;
        bookAuthors.textContent = book.volumeInfo.authors;
        //bookDescription.textContent = book.volumeInfo.description ? book.volumeInfo.description : " Sorry no description";
        bookThumbnail.src = book.volumeInfo.imageLinks ?
            book.volumeInfo.imageLinks.thumbnail : "./img/nopicture.gif"

        col.appendChild(bookTitle);
        col.appendChild(bookAuthors);
        //col.appendChild(bookDescription);
        singleBookRow.appendChild(bookThumbnail);
        singleBookRow.appendChild(col);
        li.appendChild(singleBookRow);

        li.classList.add('list-group-item');
        singleBookRow.classList.add('row');
        col.classList.add('col-md-10');
        bookThumbnail.classList.add('col-md-2', 'rwd');

        booksList.appendChild(li);
    }

    const prefomSearch = () => {
        if (input.value.length === 0) {
            alert('Please enter some book');
        } else {
            booksList.innerHTML = "";
            const serachBook = input.value;
            if (document.getElementById("dramaButton").checked == true && document.getElementById("humorButton").checked == false && document.getElementById("nameButton").checked == false) {
                const searchURI = `https://www.googleapis.com/books/v1/volumes?q=${serachBook}&maxResults=40&printType=books`;
                fetch(searchURI)
                    .then(resp => resp.json())
                    .then(resp => {
                        return resp.items.map(book => renderBooks(book))
                    })
                    .catch((err) => {
                        console.log(`Fetch api error: ${err}`);
                    });
            } else if (document.getElementById("humorButton").checked == true && document.getElementById("dramaButton").checked == false && document.getElementById("nameButton").checked == false) {
                const searchURI = `https://www.googleapis.com/books/v1/volumes?q=${serachBook}&maxResults=40&printType=magazines`;
                fetch(searchURI)
                    .then(resp => resp.json())
                    .then(resp => {
                        return resp.items.map(book => renderBooks(book))
                    })
                    .catch((err) => {
                        console.log(`Fetch api error: ${err}`);
                    });
            } else if (document.getElementById("nameButton").checked == true && document.getElementById("humorButton").checked == false && document.getElementById("dramaButton").checked == false) {
                const searchURI = `https://www.googleapis.com/books/v1/volumes?q=${serachBook}&maxResults=40&printType=all`;
                fetch(searchURI)
                    .then(resp => resp.json())
                    .then(resp => {
                        return resp.items.map(book => renderBooks(book))
                    })
                    .catch((err) => {
                        console.log(`Fetch api error: ${err}`);
                    });
            }

        }
        input.value = input.defaultValue;
    }

    button.addEventListener("click", () => {
        prefomSearch();
    });

    input.addEventListener("keyup", (e => {
        if (e.keyCode === 13) {
            prefomSearch();
        }
    }));
});