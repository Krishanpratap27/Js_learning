// This is a method :- 
// forEach ko array k har ek element k upper operation krne k liye use krte h,yani array ki har value k upper jab kuchh perform krna ho tb
//        xyz.forEach(esme ek function),,,,, xyz array ka naam hoga or function ()andar hoga jo kaam krna h array pr vo function m code krlo

let arr = [1,5,6,3,4,8]

arr.forEach(function valurPrint(val){
    console.log(val)
});

// *******in arrow function ******

let arr2 = ["run","never","kya"]  /*agr mene esme number or add kr diye to ["run","never","kya",5,8] to kya hoga*/

arr2.forEach((itm)=>{
    console.log(itm.toUpperCase())
})




/*  Ek or tarika h likhne ka */

let newArr = [55,65,99,87]

let calcSquare = (num)=>{
    console.log(num**2)
}

newArr.forEach(calcSquare);
// yaani forEach m pura function likhne ki jagah use bahar kisi variable m store kraya or variable ka naam .forEach() m,,(xyz)likh diya 




/* -------------QUESTION---------------*/

// For a given array of numbers,print the square of each value using the forEach loop???

let myArray = [3,5,8,4,11,13]

myArray.forEach((num,index)=>{
    console.log(num*num,index)
})
