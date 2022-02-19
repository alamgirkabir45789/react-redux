let myObj={
    name:'Kabir',
    age:44,
    lang:["Bangla","English","Arabic"]
}

let myObj2={...myObj};

myObj.designations="Developer"
myObj.designation="Software Developer"
myObj2.designationss="IT Professional"
console.log(myObj)
console.log(myObj2)
const num=['Apple',"Orange",55,66];
num.push("PineApple")
const copyNum=[...num];
const newNum=copyNum.map((item,index)=>({
    label:item,
    value:index
}))
console.log(newNum)
copyNum.push('Dhaka')
console.log(copyNum)

num.push("Banana")
console.log(num);

const numObj={
    name:'kabir',
    address:'Raj'
}
const newNumObj={...numObj,designation:'Developer'}
console.log(numObj)
console.log(newNumObj)

//Rest Operator
function myFunc(a,...params){
    console.log('a:',a,params)
}
myFunc(5,6,9,3);
//Object Destructuring
const person={
    name:'Arif',
    age:33,
    lang:['C#',"PHP","JAVA"],
    education:{
        degree:'MA'
    }
}
const newPerson={...person};
console.log(newPerson)
person.designation="Developer"
const {name:title,lang:language,designation,education:{degree:deg}}=person;

newPerson.designations="Doctor";

const {designations:design}=newPerson;
console.log(design)
console.log(title,language,designation,deg)

const demoArr=[3,4,5,6,7];
const [a,...b]=demoArr;
console.log(a,b)
var p=4;
var m=3;
[m,p]=[p,m];
console.log(m,p)