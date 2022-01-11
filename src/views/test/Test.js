
const numberList = [3, 4, 6, 7, 8];
const [one, two, ...rest] = numberList;
console.log( rest )
const othNumList = [45, 6, 66, 77];
const combineNum = [...numberList, ...othNumList];
console.log( combineNum )

const myObj = {
    name: 'sakatta',
    age: 55,
    color: 'brown'
}

const newObj = {
    name: 'sakib',
    age: 44,
    profession: 'Developer'
}
const updateObj = { ...newObj, ...myObj }
console.log( updateObj )