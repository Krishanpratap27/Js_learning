let maindiv = document.querySelector("#main")

let crsr = document.querySelector(".cursor")

maindiv.addEventListener("mousemove",function(dets){

   crsr.style.left = dets.x+"px"
   crsr.style.top = dets.y+"px"


})

// ddets likhana jaruri h