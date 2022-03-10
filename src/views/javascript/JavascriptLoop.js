const numbers = [33, 4, 5, 55, 6];
console.log(numbers.length);
for (let i = 0; i < numbers.length; i++) {
  console.log(i);
  console.log(numbers[i]);
  console.log("----");
}
console.log("End");
//While
let myNum = 10;
while (myNum < 15) {
  console.log(`Number is ${myNum}`);
  myNum++;
}
do {
  console.log(`Number is dfdf ${myNum}`);
} while (myNum < 15);

//Break and Continue
for (let m = 0; m < myNum; m++) {
  console.log(m);
  if (m === 5) {
    break;
  } else {
    console.log(m);
  }
}

const letters = new Set(["a", "b", "c", "d"]);
console.log(letters);
for (let l of letters) {
  console.log(l);
}

const fruits = new Map([
  ["apples", 300],
  ["orange", 300],
  ["banana", 300],
]);
console.log(fruits);
for (let f of fruits) {
  console.log(f);
}

//Break and continue
for (let i = 0; i <= 10; i++) {
  if (i === 5) break;
  console.log(i);
}
for (let i = 0; i <= 10; i++) {
  if (i === 5) continue;
  console.log(i);
}

//Sets
const myLetters = new Set(["a", "b", "c", "d"]);
console.log(myLetters.size);
console.log(myLetters.add("d"));
