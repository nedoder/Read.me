titles = document.getElementsByClassName("title");
authors = document.getElementsByClassName("author");
left = document.getElementsByClassName("left")[0];
center = document.getElementsByClassName("center")[0];
right = document.getElementsByClassName("right")[0];
desc = document.getElementsByClassName("description");
button = document.getElementsByClassName("button");

fetch("https://www.googleapis.com/books/v1/volumes?q=flowers&orderBy=newest&key=AIzaSyDguh-Hp8cUCGpm3KdOd6NtZ4oqX5O7RrQ")
    .then(function(res) {
        return res.json();
    })
    .then(function(result) {
        for (let i = 0; i < 10; i++) {
            title = result.items[i].volumeInfo.title;
            author = result.items[i].volumeInfo.authors;
            image = result.items[i].volumeInfo.imageLinks.thumbnail;
            description = result.items[i].volumeInfo.subtitle;

            titles[i].innerHTML = title;
            authors[i].innerHTML = author;
            desc[i].innerHTML = description;
            left.style.backgroundImage = "url(" + image + ")";
            center.style.backgroundImage = "url(" + image + ")";
            right.style.backgroundImage = "url(" + image + ")";
            // console.log(image)
            // console.log(title)
            // console.log(author)
        }

    }),
    function(error) {
        console.log(error);
    };






















// fetching top 3 rated books
topTitle = document.getElementsByClassName("title-top");
topAuthor = document.getElementsByClassName("author-top");
topDescription = document.getElementsByClassName("description-top");
bookImage = document.getElementsByClassName("book")

fetch("https://www.googleapis.com/books/v1/volumes?q=flowers&orderBy=relevance&key=AIzaSyDguh-Hp8cUCGpm3KdOd6NtZ4oqX5O7RrQ")
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
            console.log(image)
            console.log(title)
            console.log(author)
            console.log(bookImage[i].src)
        }

    }),
    function(error) {
        console.log(error);
    };