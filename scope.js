
function test(){
  var x=20  /*local scope*/
  console.log("x is : "+x)
  console.log("y is : "+y)
  console.log("z is : "+z)
}

var z=40  /*global scope*/

{
 var y=30  /*block level scope*/
}

console.log(y)
console.log(z)
test()