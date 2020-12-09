function updateTextInput(val) {
    document.getElementById('textInput').value = val;
}

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
        const searchURI = `https://www.googleapis.com/books/v1/volumes?q=programming&orderBy=newest&key=AIzaSyDguh-Hp8cUCGpm3KdOd6NtZ4oqX5O7RrQ`;

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
//button 2
document.getElementById('button2').addEventListener('click', (event) => {
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
        const searchURI = `https://www.googleapis.com/books/v1/volumes?q=html&orderBy=relevance&key=AIzaSyDguh-Hp8cUCGpm3KdOd6NtZ4oqX5O7RrQ`;

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
//button 3
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
        const searchURI = `https://www.googleapis.com/books/v1/volumes?q=javascript&orderBy=relevance&key=AIzaSyDguh-Hp8cUCGpm3KdOd6NtZ4oqX5O7RrQ`;

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


//drama button - get all books radio button
document.getElementById('dramaButton').addEventListener('click', (event) => {
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

        function updateTextInput(val) {
            document.getElementById('textInput').value = val;
        }

        let range = document.getElementById('textInput').value;
        let range2 = document.getElementById('rangeButton').value;
        updateTextInput(range);
        booksList.innerHTML = "";
        const searchURI = `https://www.googleapis.com/books/v1/volumes?q=programming&printType=books&maxResults=${range || range2}&key=AIzaSyDguh-Hp8cUCGpm3KdOd6NtZ4oqX5O7RrQ`;
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

//humor button - get all magazines radio button
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

        function updateTextInput(val) {
            document.getElementById('textInput').value = val;
        }

        let range = document.getElementById('textInput').value;
        let range2 = document.getElementById('rangeButton').value;
        updateTextInput(range);

        booksList.innerHTML = "";
        const searchURI = `https://www.googleapis.com/books/v1/volumes?q=programming&printType=magazines&maxResults=${range || range2}&key=AIzaSyDguh-Hp8cUCGpm3KdOd6NtZ4oqX5O7RrQ`;

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
                function updateTextInput(val) {
                    document.getElementById('textInput').value = val;
                }

                let range = document.getElementById('textInput').value;
                let range2 = document.getElementById('rangeButton').value;
                updateTextInput(range);

                const searchURI = `https://www.googleapis.com/books/v1/volumes?q=programming${serachBook}&printType=books&maxResults=${range || range2}`;
                fetch(searchURI)
                    .then(resp => resp.json())
                    .then(resp => {
                        return resp.items.map(book => renderBooks(book))
                    })
                    .catch((err) => {
                        console.log(`Fetch api error: ${err}`);
                    });
            } else if (document.getElementById("humorButton").checked == true && document.getElementById("dramaButton").checked == false && document.getElementById("nameButton").checked == false) {
                function updateTextInput(val) {
                    document.getElementById('textInput').value = val;
                }

                let range = document.getElementById('textInput').value;
                let range2 = document.getElementById('rangeButton').value;
                updateTextInput(range);

                const searchURI = `https://www.googleapis.com/books/v1/volumes?q=programming${serachBook}&printType=magazines&maxResults=${range || range2}`;
                fetch(searchURI)
                    .then(resp => resp.json())
                    .then(resp => {
                        return resp.items.map(book => renderBooks(book))
                    })
                    .catch((err) => {
                        console.log(`Fetch api error: ${err}`);
                    });
            } else if (document.getElementById("nameButton").checked == true && document.getElementById("humorButton").checked == false && document.getElementById("dramaButton").checked == false) {
                function updateTextInput(val) {
                    document.getElementById('textInput').value = val;
                }

                let range = document.getElementById('textInput').value;
                let range2 = document.getElementById('rangeButton').value;
                updateTextInput(range);

                const searchURI = `https://www.googleapis.com/books/v1/volumes?q=programming${serachBook}&printType=all&maxResults=${range || range2}`;
                fetch(searchURI)
                    .then(resp => resp.json())
                    .then(resp => {
                        return resp.items.map(book => renderBooks(book))
                    })
                    .catch((err) => {
                        console.log(`Fetch api error: ${err}`);
                    });
            }
            //   fetch(searchURI)
            //   .then(resp => resp.json())
            //   .then(resp => {
            //       return resp.items.map(book => renderBooks(book))   
            //   } )   
            //   .catch((err) => {
            //       console.log(`Fetch api error: ${err}`);       
            //   }); 
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