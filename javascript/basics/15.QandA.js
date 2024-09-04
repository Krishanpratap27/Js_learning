// **Question 1:- Create a function using the "function" keyword that takes a string as an 
// argument & returns the number of vowels in the string.

// step1-Jesa question m mentioned h ki pehele ek function bnao ""function countVowels(str){};____call kiya___ countVowels("KrishanPratapSingh");""


function countVowels(str){
    let count = 0;
    for(let char of str){
    if(char === "a" || char === "i" || char === "o" || char === "u" || char === "e"){
         count++
    }
}
   console.log(count) 
}

countVowels("KrishanPratapSingh");

// ese to kyi baar alag alag string value argument pass kra skte h

countVowels("bolo jai sree ram")



// **step2**-  jab mene function bna liya khali ......function countVowels(str){   }; ,,,or call kra with passing argument,,, countVowels("KrishanPratapSingh");....
// uske baad simple ek count naam ka variable bnaya jisko 0 pr rakha 
// fr for of loop lgayi 
// function countVowels(str){  
//     let count = 0;
//     for(let char of str){

//     }
//  };
//  countVowels("syxxx")

// yaad rkhna jo tune argument m value pass ki h vo str m stored hue h esliye for of loop m "for(let __ of str)"
// str ka use kiya h or char ko as a i ki tarah jese for loop m krte h i=0;i++ aese..

// **step3**-   baad m ek if condition add krdi jo har char ko compare krti h string a,e,i,o,u ko enhe aese hi likhna "a","e" kyuki ye string h 
// for(let char of str){
//     if(char === "a" || char === "i" || char === "o" || char === "u" || char === "e"){
//          count++
//     }
// }
//    console.log(count) 

// compare krke count ++ kr diya or count niche increase hone k baad print kr liya




// *****************Question 2:-  Same task ko perform krna h with use of Arrow function

let countVowels2 = (str2)=>{
    let counting = 0;
    for(let i of str2){
       if(i === "a" || i === "i" || i === "o" || i === "u" || i === "e"){
        counting++
       }
    //    agr yha console.log(counting) kra du to ye ajeeb sa kya output aya or kyu ???
    }
    console.log(counting)
}
countVowels2("Never you brosoooo")