const myFunc=()=>  30

console.log(myFunc())

//Arrow Function

var javascript={
    name:'Javascript',
    libraries:["React","Angular","Vue"],
    printLibraries:function(){
        console.log(this)
        const thisData=this;
    this.libraries.forEach(function(a){
        console.log(thisData)
        console.log(`${thisData.name} love ${a}`)
    })
    }
}
javascript.printLibraries();
//Truthy and Falsy
var myVar=undefined;
if(myVar){
    console.log("Truthy");
}
else{
    console.log("Falsy")
}

//Callback Function


function greet(name,callback){
    console.log('hi '+''+name);
    callback();
}
function callMe(){
    console.log("I am callback function")
}
greet("Kabir",callMe);

//Ternary Operator
var age=44;
var auth=age>55?"Authorised":age<35?"Go":"Not Auth"
console.log(auth)
//Conversion
let result=Number(undefined)
console.log(result)

//object
const person={
    name:'john',
    age:44,
    marks:{
        science:45,
        math:22,
        result:function(){
           const total=this.science+this.math;
           return total;
        }
    }
}
console.log(person.marks.result())
//Find Mehtod
var arr=[4,5,7,9,33,66];
const newNum=arr.find(function(currentValue,currentIndex,ar){
    return currentValue>44
})

console.log(newNum);
console.log(arr)
var indexFind=arr.findIndex((currentValue,currentIndex,ar)=>{
    return currentValue%2!==0;
})
console.log(indexFind)

//Constructor
function Man(){
    this.name="John",
    this.age=44
}
const man=new Man();
console.log(man)
function NewPerson(person_name,person_age,person_gender){
    this.name=person_name,
    this.age=person_age,
    this.gender=person_gender
}
const newPerson=new NewPerson("Karim",34,'male');
NewPerson.prototype.gender="Female"
console.log(newPerson)

const student={
    firstName:'Alamgir',
    get getName(){
        console.log(this)
        return this.firstName
    },
    set changeName(newName){
this.firstName=newName
    }
}
const alterName=student.changeName="Kabir"
console.log(student.getName)

//Filter
const arrNum=[44,55,6,7,8,3,4]
const newResult=arrNum.filter(function(currValue,index,arr){
    return currValue>3;
})
console.log(newResult)
console.log(arrNum)