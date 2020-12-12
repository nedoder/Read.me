document.getElementById('rangeButton').addEventListener('change', updateValue);
const alo = document.querySelector('.kolona2');


function updateValue(e) {
    prom = document.getElementById('textInput');
    prom.value = e.target.value;
}
// function for adding buttons 
function addButtons(queryType, numberOfBooks, printType) {
    let numberOfButtons = numberOfBooks / 4;
    if (numberOfButtons > 25) {
        numberOfButtons = 25;
    }
    for (var i = 0; i < numberOfButtons; i++) {
        var element = document.createElement("button");
        element.innerHTML = `${i + 1}`;
        element.id = `button${queryType}${printType}${i}`;
        element.classList.add("buttonPaginate");
        alo.append(element);
    }
    document.getElementById(`button${queryType}${printType}0`).click();
}
// PRO - programming, JAS - javascript , HTM - html
// function for dinamically adding  paginationListener function for  dinamically added buttons
//  over the name we get which button will get function

document.addEventListener('click', function(e) {
    let buttonElementName = e.target.id.toString();
    let queryTypeElement = buttonElementName.substring(6, 9);
    let printTypeElement = buttonElementName.substring(9, 12);
    switch (queryTypeElement) {
        case "PRO":
            queryType = "programming";
            break;
        case "HTM":
            queryType = "html";
            break;
        case "JAS":
            queryType = "javascript";
            break;
        default:
    }
    console.log("Tip:" + queryType);
    if (e.target && buttonElementName.includes("button")) {
        let pageNumber = parseInt(e.target.id.slice(-1));
        console.log(`HHH: ${e.target.id} PEJDZ NUMBER ${pageNumber}`);
        paginationListener(pageNumber, queryType, printTypeElement);
    }
});
const removeElements = (elms) => elms.forEach(el => el.remove());

//removing duplicating buttons 
function removeButtons() {
    removeElements(document.querySelectorAll(".buttonPaginate"));
}

// function to make pagination for 
function paginationListener(pageNumber, queryType, printType) {
    booksList.innerHTML = "";
    let index = pageNumber * 4;
    let printTypeArg = "";
    switch (printType) {
        case "ALL":
            printTypeArg = "&printType=books&printType=magazines";
            break;
        case "BUK":
            printTypeArg = "&printType=books";
            break;
        case "MAG":
            printTypeArg = "&printType=magazines";
            break;
        default:
    }
    const uri2 = `https://www.googlapis.com/books/v1/volumes?q=${queryType}${printTypeArg}&startIndex=${index}&maxResults=4&key=AIzaSyDguh-Hp8cUCGpm3KdOd6NtZ4oqX5O7RrQ`;
    const uri = `https://www.googleapis.com/books/v1/volumes?q=${queryType}${printTypeArg}&startIndex=${index}&maxResults=4&key=AIzaSyDguh-Hp8cUCGpm3KdOd6NtZ4oqX5O7RrQ`;
    fetch(uri)
        .then(resp => resp.json())
        .then(resp => {
            return resp.items.map(book => renderBooks(book))
        })
        .catch((err) => {
            console.log(`Fetch api error: ${err}`);
        });
    input.value = input.defaultValue;
}

//render Books

function renderBooks(book) {
    let li = document.createElement('li');
    let col = document.createElement('div');
    let singleBookRow = document.createElement('div');
    let bookTitle = document.createElement('h2');
    let bookAuthors = document.createElement('h3');
    let bookThumbnail = document.createElement('img');
    alo.classList.remove("DoNotDisplay");

    bookTitle.textContent = book.volumeInfo.title;
    bookAuthors.textContent = book.volumeInfo.authors;
    bookThumbnail.src = book.volumeInfo.imageLinks ?
        book.volumeInfo.imageLinks.thumbnail : "./img/nopicture.gif"

    col.appendChild(bookTitle);
    col.appendChild(bookAuthors);
    singleBookRow.appendChild(bookThumbnail);
    singleBookRow.appendChild(col);
    li.appendChild(singleBookRow);

    li.classList.add('list-group-item');
    singleBookRow.classList.add('row');
    col.classList.add('col-md-10');
    bookThumbnail.classList.add('col-md-2', 'rwd');

    booksList.appendChild(li);
}


//button 1
const booksList = document.getElementById('books-list');
const input = document.querySelector('input');
document.getElementById('buttonProgramming').addEventListener('click', (event) => {
    const performSearch = () => {
        booksList.innerHTML = "";
        const searchURI = `https://www.googleapis.com/books/v1/volumes?q=programming&printType=books&startIndex=0&maxResults=4&key=AIzaSyDguh-Hp8cUCGpm3KdOd6NtZ4oqX5O7RrQ`;

        fetch(searchURI)
            .then(resp => resp.json())
            .then(resp => {
                addButtons("PRO", resp.totalItems, "ALL");
            })
            .then(resp => {
                return resp.items.map(book => renderBooks(book))
            })
            .catch((err) => {
                console.log(`Fetch api error: ${err}`);
            });

        input.value = input.defaultValue;
        removeButtons();
        document.getElementById("buttonPRO0").click();
    }
    performSearch();
});

//button 2
document.getElementById('buttonHTML').addEventListener('click', (event) => {
    const performSearch = () => {
        booksList.innerHTML = "";
        const searchURI = `https://www.googleapis.com/books/v1/volumes?q=html&printType=books&startIndex=0&maxResults=4&key=AIzaSyDguh-Hp8cUCGpm3KdOd6NtZ4oqX5O7RrQ`;

        fetch(searchURI)
            .then(resp => resp.json())
            .then(resp => {
                addButtons("HTM", resp.totalItems, "ALL");
            })
            .then(resp => {
                return resp.items.map(book => renderBooks(book))
            })
            .catch((err) => {
                console.log(`Fetch api error: ${err}`);
            });

        input.value = input.defaultValue;
        removeButtons();
    }
    performSearch();
});

//button 3
document.getElementById('buttonJavaScript').addEventListener('click', (event) => {
    const performSearch = () => {
        booksList.innerHTML = "";
        const searchURI = `https://www.googleapis.com/books/v1/volumes?q=javascript&printType=books&startIndex=0&maxResults=4&key=AIzaSyDguh-Hp8cUCGpm3KdOd6NtZ4oqX5O7RrQ`;

        fetch(searchURI)
            .then(resp => resp.json())
            .then(resp => {
                addButtons("JAS", resp.totalItems, "ALL");
            })
            .then(resp => {
                return resp.items.map(book => renderBooks(book))
            })
            .catch((err) => {
                console.log(`Fetch api error: ${err}`);
            });

        input.value = input.defaultValue;
        removeButtons();
    }
    performSearch();
});
//book button - get all books radio button
document.getElementById('bookButton').addEventListener('click', (event) => {
    const input = document.querySelector('input');
    const booksList = document.getElementById('books-list');
    document.getElementById('rangeButton').value = document.getElementById('rangeButton').defaultValue;
    document.getElementById('textInput').value = "";
    const renderBooks = (book) => {
        let li = document.createElement('li');
        let col = document.createElement('div');
        let singleBookRow = document.createElement('div');
        let bookTitle = document.createElement('h2');
        let bookAuthors = document.createElement('h3');
        let bookThumbnail = document.createElement('img');

        bookTitle.textContent = book.volumeInfo.title;
        bookAuthors.textContent = book.volumeInfo.authors;
        bookThumbnail.src = book.volumeInfo.imageLinks ?
            book.volumeInfo.imageLinks.thumbnail : "./img/nopicture.gif"

        col.appendChild(bookTitle);
        col.appendChild(bookAuthors);
        singleBookRow.appendChild(bookThumbnail);
        singleBookRow.appendChild(col);
        li.appendChild(singleBookRow);

        li.classList.add('list-group-item');
        singleBookRow.classList.add('row');
        col.classList.add('col-md-10');
        bookThumbnail.classList.add('col-md-2', 'rwd');
        booksList.appendChild(li);
    }

    const performSearch = () => {
        let range2 = document.getElementById('rangeButton').value;;
        booksList.innerHTML = "";
        const searchURI = `https://www.googleapis.com/books/v1/volumes?q=programming&printType=books&maxResults=${range2}&key=AIzaSyDguh-Hp8cUCGpm3KdOd6NtZ4oqX5O7RrQ`;
        fetch(searchURI)
            .then(resp => resp.json())
            .then(resp => addButtons("PRO", resp.totalItems, "BUK"))
            .then(resp => {
                return resp.items.map(book => renderBooks(book))
            })
            .catch((err) => {
                console.log(`Fetch api error: ${err}`);
            });

        input.value = input.defaultValue;
        removeButtons();
    }

    performSearch();

});
//magazine button - get all magazines radio button
document.getElementById('magazineButton').addEventListener('click', (event) => {
    const input = document.querySelector('input');
    const booksList = document.getElementById('books-list');
    document.getElementById('rangeButton').value = document.getElementById('rangeButton').defaultValue;
    document.getElementById('textInput').value = "";
    const renderBooks = (book) => {
        let li = document.createElement('li');
        let col = document.createElement('div');
        let singleBookRow = document.createElement('div');
        let bookTitle = document.createElement('h2');
        let bookAuthors = document.createElement('h3');
        let bookThumbnail = document.createElement('img');

        bookTitle.textContent = book.volumeInfo.title;
        bookAuthors.textContent = book.volumeInfo.authors;
        bookThumbnail.src = book.volumeInfo.imageLinks ?
            book.volumeInfo.imageLinks.thumbnail : "./img/nopicture.gif"

        col.appendChild(bookTitle);
        col.appendChild(bookAuthors);
        singleBookRow.appendChild(bookThumbnail);
        singleBookRow.appendChild(col);
        li.appendChild(singleBookRow);

        li.classList.add('list-group-item');
        singleBookRow.classList.add('row');
        col.classList.add('col-md-10');
        bookThumbnail.classList.add('col-md-2', 'rwd');
        booksList.appendChild(li);
    }
    const performSearch = () => {
        let range2 = document.getElementById('rangeButton').value;
        booksList.innerHTML = "";
        // new kljuc - AIzaSyBLEm7rthP1M-tjYOzDABQ3_ReLkY4SlvQ
        // old kljuc - AIzaSyDguh-Hp8cUCGpm3KdOd6NtZ4oqX5O7RrQ
        const searchURI = `https://www.googleapis.com/books/v1/volumes?q=programming&printType=magazines&maxResults=${range2}&key=AIzaSyDguh-Hp8cUCGpm3KdOd6NtZ4oqX5O7RrQ`;
        fetch(searchURI)
            .then(resp => resp.json())
            .then(resp => addButtons("PRO", resp.totalItems, "MAG"))
            .then(resp => {
                return resp.items.map(book => renderBooks(book))
            })
            .catch((err) => {
                console.log(`Fetch api error: ${err}`);
            });

        input.value = input.defaultValue;
        removeButtons();
    }
    performSearch();

});

//range button, changing number of books
document.getElementById('rangeButton').addEventListener('change', function() {

    const input = document.querySelector('input');
    const booksList = document.getElementById('books-list');

    const renderBooks = (book) => {
        let li = document.createElement('li');
        let col = document.createElement('div');
        let singleBookRow = document.createElement('div');
        let bookTitle = document.createElement('h2');
        let bookAuthors = document.createElement('h3');
        let bookThumbnail = document.createElement('img');

        bookTitle.textContent = book.volumeInfo.title;
        bookAuthors.textContent = book.volumeInfo.authors;
        bookThumbnail.src = book.volumeInfo.imageLinks ?
            book.volumeInfo.imageLinks.thumbnail : "./img/nopicture.gif"

        col.appendChild(bookTitle);
        col.appendChild(bookAuthors);
        singleBookRow.appendChild(bookThumbnail);
        singleBookRow.appendChild(col);
        li.appendChild(singleBookRow);

        li.classList.add('list-group-item');
        singleBookRow.classList.add('row');
        col.classList.add('col-md-10');
        bookThumbnail.classList.add('col-md-2', 'rwd');

        booksList.appendChild(li);
    }

    const performSearch = () => {
        let range2 = document.getElementById('rangeButton').value;
        booksList.innerHTML = "";
        const searchURI = `https://www.googleapis.com/books/v1/volumes?q=programming&printType=books&maxResults=${range2}&key=AIzaSyDguh-Hp8cUCGpm3KdOd6NtZ4oqX5O7RrQ`;
        const searchURI2 = `https://www.googleapis.com/books/v1/volumes?q=programming&printType=magazines&maxResults=${range2}&key=AIzaSyDguh-Hp8cUCGpm3KdOd6NtZ4oqX5O7RrQ`;

        if (document.getElementById('bookButton').checked) {
            fetch(searchURI)
                .then(resp => resp.json())
                .then(resp => {
                    return resp.items.map(book => renderBooks(book))
                })
                .catch((err) => {
                    console.log(`Fetch api error: ${err}`);
                });
            input.value = input.defaultValue;
        } else if (document.getElementById('magazineButton').checked) {
            fetch(searchURI2)
                .then(resp => resp.json())
                .then(resp => {
                    return resp.items.map(book => renderBooks(book))
                })
                .catch((err) => {
                    console.log(`Fetch api error: ${err}`);
                });
            input.value = input.defaultValue;
        }
        removeButtons();
    }
    performSearch();
})

//main
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
        let bookThumbnail = document.createElement('img');

        bookTitle.textContent = book.volumeInfo.title;
        bookAuthors.textContent = book.volumeInfo.authors;
        bookThumbnail.src = book.volumeInfo.imageLinks ?
            book.volumeInfo.imageLinks.thumbnail : "./img/nopicture.gif"

        col.appendChild(bookTitle);
        col.appendChild(bookAuthors);
        singleBookRow.appendChild(bookThumbnail);
        singleBookRow.appendChild(col);
        li.appendChild(singleBookRow);

        li.classList.add('list-group-item');
        singleBookRow.classList.add('row');
        col.classList.add('col-md-10');
        bookThumbnail.classList.add('col-md-2', 'rwd');

        booksList.appendChild(li);
    }
    const performSearch = () => {
        if (input.value.length === 0) {
            alert('Please enter some book');
        } else {
            booksList.innerHTML = "";
            const searchBook = input.value;
            if (document.getElementById("bookButton").checked == true) {

                let range = document.getElementById('textInput').value;
                let range2 = document.getElementById('rangeButton').value;
                const searchURI = `https://www.googleapis.com/books/v1/volumes?q=programming+${searchBook}&printType=books&maxResults=${range2}&key=AIzaSyDguh-Hp8cUCGpm3KdOd6NtZ4oqX5O7RrQ`;
                console.log("MOJ URI ZA KNJIGE: " + searchURI);
                fetch(searchURI)
                    .then(resp => resp.json())
                    .then(resp => {
                        return resp.items.map(book => renderBooks(book))
                    })
                    .catch((err) => {
                        console.log(`Fetch api error: ${err}`);
                    });
            } else if (document.getElementById("magazineButton").checked == true) {
                let range = document.getElementById('textInput').value;
                let range2 = document.getElementById('rangeButton').value;


                const searchURI = `https://www.googleapis.com/books/v1/volumes?q=programming+${searchBook}&printType=magazines&maxResults=${range2}&key=AIzaSyDguh-Hp8cUCGpm3KdOd6NtZ4oqX5O7RrQ`;
                console.log("MOJ URI ZA MAGAZINE: " + searchURI);
                fetch(searchURI)
                    .then(resp => resp.json())
                    .then(resp => {
                        return resp.items.map(book => renderBooks(book))
                    })
                    .catch((err) => {
                        console.log(`Fetch api error: ${err}`);
                    });
            } else if (document.getElementById("nameButton").checked == true) {
                let range = document.getElementById('textInput').value;
                let range2 = document.getElementById('rangeButton').value;

                const searchURI = `https://www.googleapis.com/books/v1/volumes?q=programming+${searchBook}&printType=all&maxResults=${range2}&key=AIzaSyDguh-Hp8cUCGpm3KdOd6NtZ4oqX5O7RrQ`;
                console.log("MOJ URI: " + searchURI);
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
        performSearch();
    });

    input.addEventListener("keyup", (e => {
        if (e.keyCode === 13) {
            performSearch();
        }
    }));
});