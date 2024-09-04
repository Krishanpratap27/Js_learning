const head = document.querySelector("h1")

head.addEventListener("click",function(){
    head.innerHTML = "Krishna tera bhai"
    head.style.fontFamily = "sans-serif"
    head.style.fontSize = "30px"
    head.style.color = "white"
})

let div = document.querySelector('.div1')

div.addEventListener("dblclick",function(){
    div.style.background = "orange"
    div.style.width = "400px"
    div.style.height = "500px";
    div.style.borderRadius = "10px"
    
    div.style.boxShadow = "3px 3px 2px 1px #222 "

})