var num=[3,4,5,7,8,9]

var result=num.slice(1,3)
console.log(result)
console.log(num)
num.forEach(elm=>{
    console.log(elm)
})

const arrItem=["Apple","Orange","Banana"];
const copyItem=[];
for(let i=0;i<arrItem.length;i++){
    copyItem.push(arrItem[i])
}
console.log(copyItem)

const copyItem2=[];
arrItem.forEach(function(item){
    copyItem2.push(item)
})
console.log(copyItem2)

let studentData=[['jack',22],['mack',2]];
studentData.push(['fak',33])
studentData[0].push("hello");
console.log(studentData)

var splNum=[33,4,6,7,3,45,22]
var splResult=splNum.splice(1,2,11)
console.log(splResult)
console.log(splNum)
const conArr=splNum.concat(num);
console.log(conArr)
console.log(splNum)

//Map
const myNum=[4,5,6,7,8,2];
const myNewNum=myNum.map(function(item){
    console.log(item)
    return item*item;
})
console.log(myNewNum);
console.log(myNum)

// Object Iterator
const student={
    name:'kabir',
    class:4,
    age:33
}

for(let value in student){
    console.log(student[value])
}

const value1=Symbol("hi");
const value2=Symbol("hi");
console.log(typeof(value1))