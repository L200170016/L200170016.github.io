var icon= document.getElementById("icon");
    icon.onclick = function(){
        document.body.classList.toggle("dark-theme");
        if(document.body.classList.contains("dark-theme")){
            icon.src = "image/sun.png";
        }else{
            icon.src = "image/moon.png";
        }
    }

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    var navbar = document.getElementById("header");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        navbar.classList.add("shadow");
        if(document.body.classList.contains("dark-theme")){
            navbar.classList.add("bg-light");
        }else{
            navbar.classList.add("bg-white");
            navbar.classList.remove("bg-light");
        }
    } else {
        navbar.classList.remove("shadow");
        navbar.classList.remove("bg-white");
        navbar.classList.remove("bg-light");
    }
}