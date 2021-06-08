import "../css/style.scss";
import html from "../index.html";

let slider = document.querySelectorAll('.slider-item')
let prewBttn = document.querySelectorAll('.left-arrow')
let nextBttn = document.querySelectorAll('.right-arrow')


console.log(prewBttn);


let x = 0

prewBttn.forEach(el => {
    el.addEventListener('click', ()=>{
        getActiveEl()
        if(x==0) x = slider.length
        
        showSliderItem(x-1)
    })
})
nextBttn.forEach(el => {
    el.addEventListener('click', ()=>{
        getActiveEl()
        if(x==slider.length-1) x = -1
        
        showSliderItem(x+1)
    })
})

function showSliderItem(index){
    slider.forEach((el, i) => {
        if(i == index) {
            el.classList.add('active')
        }

    });
}

function getActiveEl(){
    Array.from(slider).filter((el, i)=>{
        if(el.classList.contains('active')) x = i
        el.classList.remove('active')
    })
}

setInterval(()=>{
    getActiveEl()
    if(x==slider.length-1) x = -1
    
    showSliderItem(x+1)
}, 3000)


let btn = document.querySelector("#mode");
let theme = document.querySelector("link");

// Listen for a click on the button
btn.addEventListener("click", function() {
  if (theme.getAttribute("href") == "style-light.css") {
    // ... then switch it to "dark-theme.css"
    theme.href = "style-dark.css";
  // Otherwise...
  } else {
    // ... switch it to "light-theme.css"
    theme.href = "style-light.css";
  }
});