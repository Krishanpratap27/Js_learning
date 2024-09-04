/*----- this keyword -----*/

//ye traditional function m this ka use h
let object1 = {
    name: "krishan",
    price: 122,

    message: function (){
        console.log(this); //esse ye object1 ko refer krega 
        console.log(`hello ${this.name} ji`) 
    }
}
object1.message(); //ye call krne k liye


//ye arrow function m

let object2 = {
    name: "krishan",
    price: 122,

    message:  () => {
        console.log(this); //esse ye window object ko refer krega blank object yaani wdindow object
        console.log(" arrow fun m this kyu nhi use krte? niche wali line padh comment kr rakhi h jo ")
        console.log(`hello ${this.name} ji`)  //esse undefined dega kyuki ye k {} enhe apna scope maan lega or esse bahar nhi jaega or undifined bol dega
    }
}
object2.message(); 




