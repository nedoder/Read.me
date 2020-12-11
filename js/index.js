// fetching top 10 latest books
fetch("https://www.googleapis.com/books/v1/volumes?q=programming&orderBy=newest&maxResults=20&startIndex=5&key=AIzaSyDguh-Hp8cUCGpm3KdOd6NtZ4oqX5O7RrQ")
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
    if (x >= row.length) { current = 1 };
    if (x < 1) { current = row.length };
    for (let i = 0; i < row.length; i++) {
        row[i].style.display = "none";
    }

    if (window.innerWidth > 992) {
        row[current].style.display = "block";
        row[current + 1].style.display = "block";
        row[current + 2].style.display = "block";

    } else if (window.innerWidth >= 768) {
        row[current].style.display = "block";
        row[current + 1].style.display = "block";

    } else if (window.innerWidth < 768) {
        row[current].style.display = "block";
    }


}

setInterval(nextSlide, 3000);

// showing next slide when arrow clicked
function nextSlide(x) {
    if (window.innerWidth > 992) {
        showSlide(current += 3);
    } else if (window.innerWidth <= 768) {
        showSlide(current += 1);
    }
    if (window.innerWidth > 768) {
        showSlide(current += 2);
    }

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
fetch("https://www.googleapis.com/books/v1/volumes?q=html&orderBy=relevance&maxResults=30&startIndex=10&key=AIzaSyDguh-Hp8cUCGpm3KdOd6NtZ4oqX5O7RrQ")
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
        imgBest = document.getElementsByClassName("imageBest");

        for (let i = 0; i < result.items.length; i++) {
            title = result.items[i].volumeInfo.title;
            author = result.items[i].volumeInfo.authors;
            image = result.items[i].volumeInfo.imageLinks.thumbnail;
            subtitleBest = result.items[i].volumeInfo.publishedDate;
            describe = result.items[i].volumeInfo.description;
            if (image === undefined) {
                imgBest[i].src = "#";
            } else {
                imgBest[i].src = image;
            }
            topHeading[i].innerHTML = title;
            bookAuthor[i].innerHTML = author;
            booksDiv[i].style.backgroundImage = "url(" + image + ")";
            subBest[i].innerHTML = subtitleBest;
            descBest[i].innerHTML = describe;


        }

    }),
    function(error) {
        console.log(error);
    };

//loading more content
loadBtn = document.getElementsByClassName("load-more")[0];
loadBtn.addEventListener("click", loadMore);
topRated = document.getElementsByClassName("top-rated")[0];
helper = 0;
helper2 = 2
helper3 = 3;

function loadMore() {
    helper++;
    helper2 += 2;
    helper3 += 3;
    for (let i = 0; i < booksDiv.length; i++) {

        if (window.innerWidth <= 768) {
            booksDiv[helper].style.display = "block";
            booksDiv[helper].style.height = "50vh";
            if (helper === booksDiv.length - 1) {
                loadBtn.style.display = "none";
            }
        } else if (window.innerWidth <= 992) {
            booksDiv[helper2].style.display = "block";
            booksDiv[helper2].style.height = "50vh";
            booksDiv[helper2 + 1].style.display = "block";
            booksDiv[helper2 + 1].style.height = "50vh";
            if (helper2 === booksDiv.length - 2) {
                loadBtn.style.display = "none";
            }
        } else {
            booksDiv[helper3].style.display = "block";
            booksDiv[helper3].style.height = "50vh";
            if ((helper3 + 1) <= booksDiv.length - 1) {
                booksDiv[helper3 + 1].style.display = "block";
                booksDiv[helper3 + 1].style.height = "50vh";
            } else {
                loadBtn.style.display = "none";
            }
            if ((helper3 + 2) <= booksDiv.length - 2) {
                booksDiv[helper3 + 2].style.display = "block";
                booksDiv[helper3 + 2].style.height = "50vh";
            } else {
                loadBtn.style.display = "none";
            }


        }

    }
}