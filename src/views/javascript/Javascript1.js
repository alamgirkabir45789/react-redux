function getRandomNumber(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

console.log(getRandomNumber(5,10))

const student=["Kabir",'Rakib',"Shafik"];
console.log(student.sort())
console.log(student.reverse())
console.log(student)

const num=[54,5,6,7]
console.log(num.sort(function(a,b){
    return b-a;
}))
console.log(num)

//Leap Year 
function isLeapYear(year){
    if(year %400===0 || (year %4===0 && year % 100 !==0)){
console.log(`${year} is leap year!`);
    }else{
        console.log(`${year} is not leap year!`)
    }
}
isLeapYear(2028)

// Check Letters
const vowels=["a","e","i","o","y","A","E","I","O","Y"];


function countVowels(sentence){
    let count=0;
    const letters=Array.from(sentence);
    letters.forEach(function(value,index,arr){
        if(vowels.includes(value)){
            count++;
        }
    });
    return count;

}
console.log(countVowels("I love Bangladesh"));

//Duplicates Numbers
const numbers=[2,3,4,5,4,6,7,8,8,7];

const duplicates=numbers.filter(function(value,index,array){
    return array.indexOf(value) ===index;
})
console.log(duplicates)