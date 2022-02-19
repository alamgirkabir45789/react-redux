"use strict"
const myFunc=function(v){
    console.log(`${this.name},is a ${v1} and a ${v2}and Degree is ${this.degree.first},Second ${this.degree.second},third ${this.degree.third},and Education ${this.degree.education.filter(f=>f.result>3.00).map(item=>item.name)}`);
}
const person={
    name:'Rakib',
    age:33,
    printName:()=>{
        console.log(person.name)
    },
    father:{
        name:'John',
        printName:()=>{
            console.log(person.father.name)
        }
    }

}
person.degree={first:'D.M.F',second:'B.A',third:'M.A',education:[{
    id:1,
    name:'Graduate',
    result:5.00
},
{
    id:2,
    result:3.00,
    name:'Post-Graduate',
},
{
    id:3,
    name:'Doctoral',
    result:4.00

}

]};
const v1='Developr';
const v2='Doctor';
const v=[v1,v2];
const newFunc=myFunc.bind(person,v1,v2)
newFunc()
person.printName();

person.father.printName();

function Person(name,age){
    this.name=name,
    this.age=age
    console.log(`${name}and ${age}`)
}
const myName=new Person("Kabir",33)
console.log(myName.name)

const showName=function(name){
    console.log(this)
    console.log(this.name)
}

const rakib={
    name:'Rakib'
}

showName.call(rakib);

let z=2**5;
console.log(z)

let car;
console.log(typeof showName)