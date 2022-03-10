function getRandomNumber(start, end) {
  return Math.floor(Math.random() * (end - start + 1) + start);
}
console.log(getRandomNumber(2, 6));

const students = ["Shakil", "Rakib", "Aktar", "Jabbar"];
console.log(students.sort());
console.log(students);

const roll_number = [4, 5, 7, 3, 22, 1, 55];

function sortNum(a, b) {
  return a - b;
}
console.log(roll_number.sort(sortNum));

// Leap Year
function isLeapYear(year) {
  if (year % 4 === 0 && year % 100 !== 0) {
    console.log(`${year} is leap year`);
  } else {
    console.log(`${year} is not leap year`);
  }
}
isLeapYear(2028);

const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

function countVowels(sentence = "Bangladesh is a small Country") {
  let count = 0;

  const arr = Array.from(sentence);
  arr.forEach(function (value) {
    if (vowels.includes(value)) {
      count++;
    }
    console.log(count)
  });
  return count;
}
console.log(countVowels());

const num=[1,3,44,44,3,6,7,2,9,2];
const duplicate=num.filter(function(value,index,array){
    console.log(value);
    console.log(index)
    console.log(array.indexOf(value))
    return array.indexOf(value) !==index;
});
console.log(duplicate)
