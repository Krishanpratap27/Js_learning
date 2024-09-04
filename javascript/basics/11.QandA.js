 const obj = {
     name: "krishan",
     profile: "web dev",
     contact: 6397624041,
     address: {
         city: "Hathras",
         village: "Kanau",
         state:"UP"
    }
 }

 let disp = obj.address.village

 console.log(obj.address.village);


/*---- Q1- Agar mere pass ek fuction ho or uske andar ekor fun ho but mujhe khali andar wala hi chalana hai
Q2.- same aese hi parent function chalana ho tb? ------*/ 
function abc(){
    var a = 2;
    let g = 1;
    
    function ann(){
          var ab = 10;
          console.log(ab);
    }
    ann();
}

abc();


/* Quetion3. ----agar mere pass ek object hai usse m function m kese pass or use krta hu-------*/

let object1 = {
    name: "rinku",
    price: 297,
}
                      //yha hmare pass 2 object hai 
let object2 = {
    name: "rakesh",
    price: 2987,
}

function objHandle(anyObject){
    return `Buyer name is ${anyObject.name} and total ammount is ${anyObject.price} .`
}
let message = objHandle(object2); //eski jagah m direct obj bhi pass kr skta hu "objHandle({name:"fff", price: 444})" aese

console.log(message);     
 /*yha mene ek function bnaya jisme parameter diya 'anyObject' naam ka yaani call krte time jab mai 
koi bhi object pass krunga vo anyObject m apni values ka reference de dega. Return keyword m jaake ${} ka use krke values ko 
use kr skta hu. Jo bhi object mai argument m pass krunga vo anyObject naam ka obj bnake usme apni saari value pass kr dega
or fr mai unhe . lgake access kr lunga*/


/* Quetion4. ------ how to pass and use array in functions ------*/

let myArray = [10,5,400,80,0,0.5,550]
let myArray2 = [10,40,60.5,650]



function arrayHandle(newArray){
    return newArray[5];     //argument se array pass hoga parameter m or newArray m apni values de dega fr return krenge newArray[] ki values ki indexing
}

let answer = arrayHandle(myArray)   //yha array name jo bhi ho or direct bhi pass kr skte hai "arrayHandle([100,5,2])" aese
console.log(answer , ":it is");




