import "../css/style.scss";
import html from "../index.html";





let slides = document.getElementsByClassName("slider-item");

let slideIndex = 1;
showSlides(slideIndex);


function showSlides(n) {
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  
  slides[slideIndex-1].style.display = "flex";
}

document.querySelectorAll(".left-arrow").forEach(el=>{
    el.addEventListener('click', ()=>{
        showSlides(slideIndex -=1)
    })
})
document.querySelectorAll(".right-arrow").forEach(el=>{
    el.addEventListener('click', ()=>{
        showSlides(slideIndex +=1)
    })
})


setInterval(() => {
    showSlides(slideIndex +=1)
}, 10000)





function detectColorScheme() {
    var theme = "light";
    if (localStorage.getItem("theme")) {
        if (localStorage.getItem("theme") == "dark") {
            var theme = "dark";
        }
    } else if (!window.matchMedia) {
        return false;
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        var theme = "dark";
    }
    if (theme == "dark") {
        document.documentElement.setAttribute("data-theme", "dark");
    }
}
detectColorScheme();

const toggleSwitch = document.querySelectorAll('.mode');
let theme = 'light'
function switchTheme(theme) {
    if (theme == 'dark') {
        localStorage.setItem('theme', 'dark');
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
        document.documentElement.setAttribute('data-theme', 'light');
    }
}
toggleSwitch.forEach(el => {
    el.addEventListener('click', () => {

        if (theme == 'light') {
            theme = 'dark'
        } else theme = 'light'
        switchTheme(theme)

    });
})
