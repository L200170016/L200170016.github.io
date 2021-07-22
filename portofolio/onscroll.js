window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    var navbar = document.getElementsByClassName(".navbar");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        navbar.classList.add("shadow");
    } else {
        navbar.classList.remove("shadow");
    }
}