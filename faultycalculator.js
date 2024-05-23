// create a faulty calculator
/*this faulty does following 
it takes two numbers as input fromn user 
it performs wrong 
+--->-
* ----> +

- ----->/
/ ---->**
it performs wrong operations 10% of the times
*/

// 


let random= Math.random()
let a = prompt("Enter first number")
let b = prompt("Enter second number")
let c = prompt("Enter OPERATION")

let obj ={
    "+":"-",
    "*" : " +",
    "/" : " **",
    "-" : "/ "
}
console.log(random)
if (random>0.1){
    console.log(`The result is ${a} ${c} ${b}`)
alert(`The result is ${eval(`${a} ${c} ${b}`)}`) //perform calculation
 //perform calculation
}


else{

c= obj[c]
alert(`The result is ${eval(`${a} ${c} ${b}`)}`) //perform wrong calculation
}