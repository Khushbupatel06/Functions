function singSong() {
    console.log("DO")
    console.log("RE")
    console.log("ME")
    console.log("SA")
};
singSong();
singSong();

function greet(FirstName) {
    console.log(`firstName is: ${FirstName}`)
    console.log(`HI! ${FirstName}`)
}

function greet(FirstName) {
    console.log(`Hey there, ${FirstName}!`)
}

function rant(message) {
    for (let i = 1; i <= 3; i++) {
    console.log(`${message.toUpperCase()}`)
    }
}

function greet(firstName, lastName) {
    console.log(`Hey there, ${firstName} ${lastName[0]}.`)
}

function repeat(str, numTimes) {
    let result = '';
    for(let i = 0; i < numTimes; i++) {
        result += str;
    }
    console.log(result);
}

function isSnakeEyes(num, nums) {
    if (num === 1 && nums === 1) {
        console.log("Snake Eyes!")
    }else
    console.log("Not Snake Eyes!");
}

function add(x, y) {
    if(typeof x !== 'number' || typeof y !== 'number') {
        return false;
    }
    return x + y;
}

function multiply(x,y) {
    return x * y;
}

function isShortsWeather(x) {
    if(x >= 75) {
        return true;
    }
    return false;
}

function lastElement(num) {
    if (num.length > 0) {
        return num[num.length - 1];
    }return null;      
}

function capitalize(veg='') {
    console.log(veg)
    let firstLetter = veg[0].toUpperCase();
    let restOfString = veg.substring(1);
    return firstLetter.concat(restOfString);
    let vegWithoutFirstLetter = veg.slice(1);
    console.log(vegWithoutFirstLetter)
    return firstLetter.concat(vegWithoutFirstLetter);
}
function sumArray(marks) { 
    let totalMarks = 0;
        for(i = 0; i < marks.length; i++) {
            totalMarks += marks[i];
        }
        return totalMarks;
}

let array = [10, 20, 30, 40, 50];
let sum = 0;

for (let i = 0; i < array.length; i++) {
    sum += array[i];
}
console.log(sum);

function returnDay(num) {
if (num === 1) {
    console.log('Monday')
}else if( num === 2) {
    console.log('Tuesday')
}else if(num === 3) {
    console.log('Wendesday')
}else if(num === 4) {
    console.log('Thursday')
}else if(num === 5) {
    console.log('Friday')
}else if(num === 6) {
    console.log('Saturday')
}else if(num === 7) {
    console.log('Sunday')
}else {
    console.log('null');
}
}

const weekDAY = new Array(7);
weekDAY[1] = 'Monday' ;
weekDAY[2] = 'Tuesday';
weekDAY[3] = 'Wednesday';
weekDAY[4] = 'Thursday';
weekDAY[5] = 'Friday';
weekDAY[6] = 'Saturday';
weekDAY[7] = 'Sunday';

function returnDay(x) {
if(x < 1 || x > 7) {
    return null;
} else {
    let thisDay = weekDAY[x]
    return thisDay;
  }
}

function sumArray(numArray) { 
    let total = 0;
    for (let a = 0; a < numArray.length; a++) {
    let addIndex = numArray[a];
      total += addIndex;
    } 
    return total;
  }
  console.log(sumArray([2,8,6,4,9,3]));













