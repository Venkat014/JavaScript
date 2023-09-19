function add(num1=1,num2=1,...rest)
{
 result=num1+num2
 console.log("rest is:",rest)
 for(num of rest)
 {
   result=result+num
 }
 console.log("sum is:",result)
}
add(3,4,6,7,8)