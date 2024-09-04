let head1 = document.querySelector("h1") //ese hamne ek variable m store kr diya h 
//console.log(head1)      //eski vjah se ham live server m jaake console m dekh skte hai


/*head1.innerHTML = "le bhai change kr diyo" // live server m change ho 

head1.style.backgroundColor = "green" //ye css change krne k liye
head1.style.color = "red"

*/

head1.addEventListener("click",function(){
  head1.innerHTML  = "frse badla gya h mujhe"

    head1.style.color = "yellow"
    head1.style.backgroundColor = "#000"
})

let slider = document.createElement('input');
slider.type = 'range'
slider.value = '0'
slider.max = '8'
document.body.appendChild(slider);

let div = document.createElement('div')
document.body.appendChild(div)

slider.oninput = addStar;


function addStar(){
  div.innerHTML = "";
  for(i=0; i < this.value; i++){
    div.append("🫡");
  }
}
