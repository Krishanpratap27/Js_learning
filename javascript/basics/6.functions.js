function addNumber (num1, num2, num5){
    console.log(num1+num5-num2);

}

addNumber(4,44,99)  

console.log(typeof addNumber)

// 2.****function ko variable ki tarah use krna

function addNumber(a,b){
    let total = a+b

    console.log(total)//agr m ese return ke baad print krta to print nahi hota koi bhi value return ke baad print nhi hoti

    return total //return ke sath jo total likha h ye neeche "total is:  "likha hua jo print hoga use value pahucha dega yha se jo jod ke aya eske bina niche dubara koi value print nhi hogi

}

let total = addNumber(5,6)
console.log("total is:",total)


/*------function and parameter, -------*/
function loginMessage(username){
    if(username === undefined){
        console.log("Please enter your name")
    }
    return `${username}! You are logged in`
}
let message = loginMessage(112) //yha agr 0112 likhu to
console.log(message);
console.log(typeof message)