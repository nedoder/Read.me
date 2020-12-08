modalBtn = document.getElementsByClassName("close-modal")[0];
modalBtn.addEventListener("click", closeModal);

modalWindow = document.getElementsByClassName("modal")[0];
modalTitle = document.getElementsByClassName("modal-title")[0];
modalAuthor = document.getElementsByClassName("modal-author")[0];
modalSubtitle = document.getElementsByClassName("modal-subtitle")[0];
modalDesc = document.getElementsByClassName("modal-description")[0];
modalImg = document.getElementsByClassName("modal-image")[0];

sliderBtn = document.getElementsByClassName("button");


// opening modal window for latest books
for (let i = 0; i < sliderBtn.length; i++) {
    sliderBtn[i].addEventListener("click", function() {
        titles = document.getElementsByClassName("title");
        authors = document.getElementsByClassName("author");
        row = document.getElementsByClassName("row");
        subtitle = document.getElementsByClassName("latest-subtitle");
        desc = document.getElementsByClassName("latest-description");
        img = document.getElementsByClassName("latest-image");
        modalTitle.innerHTML = titles[i].textContent;
        modalAuthor.innerHTML = authors[i].textContent;
        modalSubtitle.innerHTML = subtitle[i].textContent;
        modalDesc.innerHTML = desc[i].textContent;
        modalImg.src = img[i].src;
        modalWindow.style.display = "block";
        modalWindow.style.top -= window.pageYOffset + "px";
    });
}




// opening modal window for top 3 books
imageLink = document.getElementsByClassName("book");
titleLink = document.getElementsByClassName("title-top");
for (let i = 0; i < imageLink.length; i++) {
    titleLink[i].addEventListener("click", function() {
        topTitle = document.getElementsByClassName("title-top");
        topAuthor = document.getElementsByClassName("author-top");
        bookImage = document.getElementsByClassName("book")
        subTop = document.getElementsByClassName("subtitleTop");
        descTop = document.getElementsByClassName("descriptionTop");
        modalTitle.innerHTML = topTitle[i].textContent;
        modalAuthor.innerHTML = topAuthor[i].textContent;
        modalSubtitle.innerHTML = subTop[i].textContent;
        modalDesc.innerHTML = descTop[i].textContent;
        modalImg.src = bookImage[i].src;
        modalWindow.style.display = "block";
        modalWindow.style.top -= window.pageYOffset + "px";
    });
    imageLink[i].addEventListener("click", function() {
        topTitle = document.getElementsByClassName("title-top");
        topAuthor = document.getElementsByClassName("author-top");
        bookImage = document.getElementsByClassName("book")
        subTop = document.getElementsByClassName("subtitleTop");
        descTop = document.getElementsByClassName("descriptionTop");
        modalTitle.innerHTML = topTitle[i].textContent;
        modalAuthor.innerHTML = topAuthor[i].textContent;
        modalSubtitle.innerHTML = subTop[i].textContent;
        modalDesc.innerHTML = descTop[i].textContent;
        modalImg.src = bookImage[i].src;
        modalWindow.style.display = "block";
        modalWindow.style.top -= window.pageYOffset + "px";
    });
}


//opening modal window for best books
books = document.getElementsByClassName("books");
for (let i = 0; i < books.length; i++) {
    books[i].addEventListener("click", function() {
        topHeading = document.getElementsByClassName("topheading");
        bookAuthor = document.getElementsByClassName("book-author");
        subBest = document.getElementsByClassName("subtitleBest");
        descBest = document.getElementsByClassName("descriptionBest");
        imgBest = document.getElementsByClassName("imageBest");
        modalTitle.innerHTML = topHeading[i].textContent;
        modalAuthor.innerHTML = bookAuthor[i].textContent;
        modalSubtitle.innerHTML = subBest[i].textContent;
        modalDesc.innerHTML = descBest[i].textContent;
        modalImg.src = imgBest[i].src;
        modalWindow.style.display = "block";
        modalWindow.style.top -= window.pageYOffset + "px";
    });
}



//closing modal window
function closeModal() {
    modalWindow.style.display = "none";
}