import "../css/style.scss";
import html from "../index.html";

let slider = document.querySelectorAll('.slider-item')
let prewBttn = document.querySelectorAll('.left-arrow')
let nextBttn = document.querySelectorAll('.right-arrow')


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

function detectColorScheme(){
    var theme="light";
    if(localStorage.getItem("theme")){
        if(localStorage.getItem("theme") == "dark"){
            var theme = "dark";
        }
    } else if(!window.matchMedia) {
        return false;
    } else if(window.matchMedia("(prefers-color-scheme: dark)").matches) {
        var theme = "dark";
    }
    if (theme=="dark") {
         document.documentElement.setAttribute("data-theme", "dark");
    }
}
detectColorScheme();

const toggleSwitch = document.querySelector('#mode');
let theme = 'light'
function switchTheme(theme) {
    if (theme=='dark') {
        localStorage.setItem('theme', 'dark');
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
        document.documentElement.setAttribute('data-theme', 'light');
        toggleSwitch.checked = false;
    }    
}
toggleSwitch.addEventListener('click', ()=>{

    if(theme=='light'){
        document.querySelectorAll('img').forEach((el)=>{
            console.log(el);
        })
        theme = 'dark'
    }else theme = 'light'
    switchTheme(theme)

});
