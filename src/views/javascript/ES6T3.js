const num=[3,4,5,6,7,8,9];
var result=num.reduce(function(preVal,currVal){
return preVal+currVal
})
console.log(result)
console.log(num)

//Loop
for(let i=0;i<10;i++){
    console.log(i)
}

const myObj={
    name:'kabir',
    lan:["java","C#","PHP"]
}
const myString="I love bangladesh"
for(let str in myString){
    console.log(str)
}

var newObj=Object.keys(myObj)
var newObjVal=Object.values(myObj)
var entries=Object.entries(myObj);

console.log(entries)

console.log(newObj)
console.log(newObjVal)

const print=(name,authorize)=>{
console.log(name)
authorize();
}
const authorize=()=>{
console.log("this is callback")
}


print("kabir",authorize)
function myFunc(a=10){
    console.log(a)
}
myFunc(null);