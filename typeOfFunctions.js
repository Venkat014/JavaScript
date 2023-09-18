/*named function*/
function add(num1,num2){
  let sum=num1+num2
  return sum
}
console.log("sum is : "+add(20,32))

/*Anonymous function*/
let sum= function(a,b){
  let res=a+b 
  console.log("result is : "+res)
}
sum(30,40)

/*IIFE*/
var defferent=(function sub(val1,val2){
  var differ=val1-val2
  console.log("sub is : "+differ)
})(30,60);

/*Arrow function*/
var product=(num1,num2)=>{
  let mull=num1*num2
  console.log("product is : "+mull)
}
product(20,30)

/*Arrow function forms 
1) if only one statement in function body*/
let prod=(a,b)=>a*b 
console.log("product2 is : "+prod(40,4))

/* 2) if only one argument*/
var cube=num=>num*num*num
console.log("3 cube is : "+cube(3))

/* 3)if no argument */
name=()=>{
  console.log("Hello")
  console.log("Welcome To Javascript ")
}
name()

student=_=>{
  console.log("Hi")
  console.log("I'm Venkat")
}
student()
