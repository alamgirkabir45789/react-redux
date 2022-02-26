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