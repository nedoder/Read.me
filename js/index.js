titles = document.getElementsByClassName("title");
authors = document.getElementsByClassName("author");
row = document.getElementsByClassName("row")
button = document.getElementsByClassName("button");






// fetching top 10 latest books
fetch("https://www.googleapis.com/books/v1/volumes?q=programming&orderBy=newest&key=AIzaSyDguh-Hp8cUCGpm3KdOd6NtZ4oqX5O7RrQ")
    .then(function(res) {
        return res.json();
    })
    .then(function(result) {
        for (let i = 0; i < 10; i++) {
            title = result.items[i].volumeInfo.title;
            author = result.items[i].volumeInfo.authors;
            image = result.items[i].volumeInfo.imageLinks.thumbnail;
            titles[i].innerHTML = title;
            authors[i].innerHTML = author;
            row[i].style.backgroundImage = "url(" + image + ")";
        }

    }),
    function(error) {
        console.log(error);
    };



previous = document.getElementById("previous");
next = document.getElementById("next");
previous.addEventListener("click", previousSlide);
next.addEventListener("click", nextSlide);
current = 1;
// for (let i = 0; i < row.length; i++) {

// }


function showSlide(x) {
    if (x > row.length) { current = 1 };
    if (x < 1) { current = row.length };
    for (let i = 0; i < row.length; i++) {
        row[i].style.display = "none";
    }
    row[current - 1].style.display = "block";
    row[current].style.display = "block";
    row[current + 1].style.display = "block";

}

// setInterval(nextSlide, 3000);

function nextSlide(x) {
    showSlide(current += 1);


}

function previousSlide(x) {
    showSlide(current -= 1);
}


// fetching top 3 best books
topTitle = document.getElementsByClassName("title-top");
topAuthor = document.getElementsByClassName("author-top");
topDescription = document.getElementsByClassName("description-top");
bookImage = document.getElementsByClassName("book")


fetch("https://www.googleapis.com/books/v1/volumes?q=javascript&orderBy=relevance&key=AIzaSyDguh-Hp8cUCGpm3KdOd6NtZ4oqX5O7RrQ")
    .then(function(res) {
        return res.json();
    })
    .then(function(result) {
        for (let i = 0; i < 3; i++) {
            title = result.items[i].volumeInfo.title;
            author = result.items[i].volumeInfo.authors;
            image = result.items[i].volumeInfo.imageLinks.thumbnail;
            description = result.items[i].volumeInfo.publisher;
            topTitle[i].innerHTML = title;
            topAuthor[i].innerHTML = author;
            topDescription[i].innerHTML = description;
            bookImage[i].src = image;
            // console.log(image)
            // console.log(title)
            // console.log(author)
            // console.log(bookImage[i].src)
        }

    }),
    function(error) {
        console.log(error);
    };



topHeading = document.getElementsByClassName("topheading");
bookAuthor = document.getElementsByClassName("book-author");
descriptionBook = document.getElementsByClassName("description");
booksDiv = document.getElementsByClassName("books");

fetch("https://www.googleapis.com/books/v1/volumes?q=programming&orderBy=relevance&key=AIzaSyDguh-Hp8cUCGpm3KdOd6NtZ4oqX5O7RrQ")
    .then(function(res) {
        return res.json();
    })
    .then(function(result) {
        for (let i = 0; i < result.items.length; i++) {
            title = result.items[i].volumeInfo.title;
            author = result.items[i].volumeInfo.authors;
            image = result.items[i].volumeInfo.imageLinks.thumbnail;
            description = result.items[i].volumeInfo.publisher;
            if (description === undefined) {
                descriptionBook[i].innerHTML = "";
            } else {
                descriptionBook[i].innerHTML = description;
            }
            topHeading[i].innerHTML = title;
            bookAuthor[i].innerHTML = author;
            booksDiv[i].style.backgroundImage = "url(" + image + ")";
        }


    }),
    function(error) {
        console.log(error);
    };