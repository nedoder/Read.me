// fetching top 10 latest books
fetch("https://www.googleapis.com/books/v1/volumes?q=programming&orderBy=newest&key=AIzaSyDguh-Hp8cUCGpm3KdOd6NtZ4oqX5O7RrQ")
    .then(function(res) {
        return res.json();
    })
    .then(function(result) {
        titles = document.getElementsByClassName("title");
        authors = document.getElementsByClassName("author");
        row = document.getElementsByClassName("row");
        subt = document.getElementsByClassName("latest-subtitle");
        descrp = document.getElementsByClassName("latest-description");
        img = document.getElementsByClassName("latest-image");
        button = document.getElementsByClassName("button");
        for (let i = 0; i < 10; i++) {
            title = result.items[i].volumeInfo.title;
            author = result.items[i].volumeInfo.authors;
            image = result.items[i].volumeInfo.imageLinks.thumbnail;
            sub = result.items[i].volumeInfo.subtitle;
            descr = result.items[i].volumeInfo.description;
            titles[i].innerHTML = title;
            authors[i].innerHTML = author;
            row[i].style.backgroundImage = "url(" + image + ")";
            descrp[i].innerHTML = descr;
            img[i].src = image;
            subt[i].innerHTML = sub;
        }

    }),
    function(error) {
        console.log(error);
    };



previous = document.getElementById("previous");
next = document.getElementById("next");
previous.addEventListener("click", previousSlide);
next.addEventListener("click", nextSlide);
document.addEventListener('keydown', nextKeySlide);
document.addEventListener('keydown', previousKeySlide);
current = 1;


// showing current slide
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

// showing next slide when arrow clicked
function nextSlide(x) {
    showSlide(current += 1);
}

// showing previous slide when arrow clicked
function previousSlide(x) {
    showSlide(current -= 1);
}

//showing next slide when keyboard key pressed
function nextKeySlide(e) {
    e.preventDefault();
    if (e.keyCode === 39) {
        nextSlide(e);
    }

}

//showing previous slide when keyboard key pressed
function previousKeySlide(e) {
    e.preventDefault();
    if (e.keyCode === 37) {
        previousSlide(e);
    }
}

// fetching top 3 best books
fetch("https://www.googleapis.com/books/v1/volumes?q=javascript&orderBy=relevance&key=AIzaSyDguh-Hp8cUCGpm3KdOd6NtZ4oqX5O7RrQ")
    .then(function(res) {
        return res.json();
    })
    .then(function(result) {
        topTitle = document.getElementsByClassName("title-top");
        topAuthor = document.getElementsByClassName("author-top");
        topDescription = document.getElementsByClassName("description-top");
        bookImage = document.getElementsByClassName("book")
        subTop = document.getElementsByClassName("subtitleTop");
        descTop = document.getElementsByClassName("descriptionTop");
        for (let i = 0; i < 3; i++) {
            title = result.items[i].volumeInfo.title;
            author = result.items[i].volumeInfo.authors;
            image = result.items[i].volumeInfo.imageLinks.thumbnail;
            description = result.items[i].volumeInfo.publisher;
            sub = result.items[i].volumeInfo.subtitle;
            publishes = result.items[i].volumeInfo.publishedDate;
            desc = result.items[i].volumeInfo.description;
            topTitle[i].innerHTML = title;
            topAuthor[i].innerHTML = author;
            topDescription[i].innerHTML = description;
            bookImage[i].src = image;
            subTop[i].innerHTML = sub;
            descTop[i].innerHTML = desc;
        }

    }),
    function(error) {
        console.log(error);
    };



// fetching top rated books
fetch("https://www.googleapis.com/books/v1/volumes?q=html&orderBy=relevance&key=AIzaSyDguh-Hp8cUCGpm3KdOd6NtZ4oqX5O7RrQ")
    .then(function(res) {
        return res.json();
    })
    .then(function(result) {
        topHeading = document.getElementsByClassName("topheading");
        bookAuthor = document.getElementsByClassName("book-author");
        descriptionBook = document.getElementsByClassName("description");
        booksDiv = document.getElementsByClassName("books");
        subBest = document.getElementsByClassName("subtitleBest");
        descBest = document.getElementsByClassName("descriptionBest");
        imgBest = document.getElementsByClassName("imageBest")
        for (let i = 0; i < result.items.length; i++) {
            title = result.items[i].volumeInfo.title;
            author = result.items[i].volumeInfo.authors;
            image = result.items[i].volumeInfo.imageLinks.thumbnail;
            description = result.items[i].volumeInfo.publisher;
            subtitleBest = result.items[i].volumeInfo.publishedDate;
            describe = result.items[i].volumeInfo.description;
            if (description === undefined) {
                descriptionBook[i].innerHTML = "";
            } else {
                descriptionBook[i].innerHTML = description;
            }
            topHeading[i].innerHTML = title;
            bookAuthor[i].innerHTML = author;
            booksDiv[i].style.backgroundImage = "url(" + image + ")";
            subBest[i].innerHTML = subtitleBest;
            descBest[i].innerHTML = describe;
            imgBest[i].src = image;

        }

    }),
    function(error) {
        console.log(error);
    };

loadBtn = document.getElementsByClassName("load-more")[0];
loadBtn.addEventListener("click", loadMore);
topRated = document.getElementsByClassName("top-rated")[0];

function loadMore() {
    for (let i = 6; i < booksDiv.length; i++) {
        topRated.style.height = "130vh";
        booksDiv[i].style.display = "block";
        loadBtn.style.display = "none";
    }
}