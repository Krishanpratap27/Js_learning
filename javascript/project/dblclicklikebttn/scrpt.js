let cantnr = document.querySelector("#cantainer")

let love = document.querySelector("i")

cantnr.addEventListener("dblclick", function(){
    love.style.transform = 'scale(1 )'

    setTimeout( function() {
        love.style.transform = 'scale(0 )';
    },1000);
    
}) 