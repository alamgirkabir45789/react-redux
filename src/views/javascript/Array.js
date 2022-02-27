const fruits=["Orange","Apple","Banana","PineApple","Nuts"]
console.log(fruits.sort());
console.log(fruits.reverse());
console.log(fruits.toString());
console.log(fruits.join(" * "))
console.log(delete fruits[1]);
console.log(fruits)
const fruits2=["Apple","Orange","Banana"]
const newFruits=fruits2.splice(1,0,"Lemon","Mango");
console.log(newFruits);
console.log(fruits2)
console.log(fruits2.splice(2,2))

const itemArr=["Item-1","Item-2","Item-3"];
const conCatArr=fruits.concat(itemArr,"Test","Test2");
console.log(conCatArr.slice(2,4));
console.log(conCatArr)

const points=[44,5,22,77,8,3,22];
points.sort(function(a,b){
    return a-b;
})
console.log(points)
points.sort(function(a,b){
    return b-a;
})
console.log(points);

function arrayMaxValue(arr){
    return arr;
}
console.log(Math.max.apply(null,points))
console.log(Math.min.apply(null,points))
const car=[
    {name:"Volvo",year:2016},
    {name:"Saab",year:2010},
    {name:"BMW",year:2015},
]
function sortFunc(a,b){
    return a.year-b.year;
}

console.log(car.sort(sortFunc))

//Array Method
const numbers=[44,5,6,88,9,33];
function myFunc(value,index,arr){
console.log(value);
console.log(index);
console.log(arr)
console.log("----")
}
console.log(numbers.forEach(myFunc))

//map
const mapArr=numbers.map(item=>item*5+5);
console.log(mapArr)

//filter
const filteredArr=numbers.filter(item=>item>30);
console.log(filteredArr)
//reduce
const reduceValue=numbers.reduce((total,value,index,arr)=>{
    console.log(total)
    console.log("-----'")
    console.log(index)
    console.log("-----'")
    console.log(arr)
    console.log("-----'")

    return total+value;
},0)
console.log(reduceValue)

//every
const num=numbers.every(num=>num>20);
console.log(num)
//some
const sum=numbers.some(num=>num>20);
console.log(sum)

//indexOF
const index=numbers.indexOf(33);
console.log(index)
//includes
const includeData=numbers.includes(333);
console.log(includeData)

//find
const findNum=numbers.find(item=>item>35);
console.log(findNum)

const name="ALAMGIR";
console.log(Array.from(name))
const keys=numbers.keys();
console.log(keys)
for(let a of keys){
    console.log(a)
}