showBtn = document.getElementsByClassName("menu")[0];
closeBtn = document.getElementsByClassName("close")[0];
link = document.getElementsByClassName("links");
smallMenu = document.getElementsByClassName("menu-dropdown")[0];
showBtn.addEventListener('click', showLinks);
closeBtn.addEventListener('click', hideLinks);
bigLinks = document.getElementsByClassName("big-links")



function showLinks(e) {
    for (let i = 0; i < link.length; i++) {
        link[i].style.display = "block";
    }
    smallMenu.className = "menu-dropdown animate__animated animate__fadeInRight";
    closeBtn.style.display = "block";
    showBtn.style.display = "none";
}


function hideLinks(e) {
    smallMenu.className = "menu-dropdown animate__animated animate__fadeOutRight";
    closeBtn.style.display = "none";
    showBtn.style.display = "block";
}