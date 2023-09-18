/*create a function*/
function add(num1,num2){
  let sum=num1+num2
  return sum
}
console.log("sum is : "+add(20,32))

/*calling a function*/
function sub(num1,num2){
  let differ=num1-num2
  console.log("differ is : "+ differ)
}
sub(77,68)

/*function expression*/
product=function mul(n1,n2){
  let rel=n1*n2
  console.log("mul is : "+rel)
}
product(20,3)