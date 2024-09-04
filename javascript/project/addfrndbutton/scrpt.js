 let istatus = document.querySelector("h2") 

 let addfrnd = document.querySelector("#add")

 let check = 0

 addfrnd.addEventListener("click",function(){
    if(check == 0){
    istatus.innerHTML = "Friends"
    istatus.style.color = "green"

    addfrnd.innerHTML = "Remove friend"

    check = 1
    }else{
        istatus.innerHTML = "Stranger"
        istatus.style.color = "red"

        addfrnd.innerHTML = "Add friend"

        check = 0
    }
 })


















//  let removefrnd = document.querySelector("#remove")
 
 
//  removefrnd.addEventListener("click",function(){
//     istatus.innerHTML = "Stranger"
//     istatus.style.color = "red"
//  })