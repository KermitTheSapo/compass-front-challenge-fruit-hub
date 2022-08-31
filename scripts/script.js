const home = document.querySelector(".home")
const start = document.querySelector(".start")

setTimeout(() => {
    home.setAttribute('style', 'display: none')  
    start.setAttribute('style', 'display: flex')  
}, 5000) 