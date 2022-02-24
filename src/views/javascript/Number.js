const myArr = ["BMW", "VOLVO", "SUZUKI"];

console.log(myArr[ myArr.length-1])

const myArr2=["Car-4","Car-5"]
myArr[myArr.length]=myArr2
myArr2[10]="Test"
for(let i=0;i<myArr.length;i++){
    console.log(i)
    console.log(myArr[i])
}

function myFunc(value){
    console.log(value);
}
myArr.forEach(myFunc)
console.log(myArr.flat())
console.log(Array.isArray(myArr))
console.log(myArr instanceof Array)