
var cars=["bahubali","kgf","jawan","rrr"]
console.log(cars)

var names=new Array("ravi","sasank","atchi babu","vardhan")
console.log(names)

cars[2]="war"
console.log(cars)
cars.push("pushpa","pathan")
console.log(cars)
cars.pop()
console.log(cars)
cars.unshift("maharshi")
console.log(cars)
cars.shift()
console.log(cars)
console.log("index of ravi is : "+names.indexOf("ravi"))
console.log("index of pathan is : "+cars.indexOf("pathan"))
console.log(names.slice(2))
console.log(names.slice(0,4))