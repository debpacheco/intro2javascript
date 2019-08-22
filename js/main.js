//const greeting = "hello";

//if (greeting === "hi") {
 //   console.log('Yes, this matches to HI');

//} else if (greeting == "hello"){
  //  console.log('Yes, this matched HELLO');
//}else if {
//    console.log('none of them matched');
//}

//let faveColor = prompt ('Choose one of the following colors: red,grey, green');
//const lowerCase = favColor.toLowerCase();
//switch(lowerCase) {
  //  case 'red':
    //case 'Red':
  //      alert(`You chose ${faveColor}`);

   // break;
   // case 'grey':
    //case 'Grey':
    //        alert(`You chose ${faveColor}`);
   // break;
  //  case 'green':
    //case 'Green':
      //      alert(`You chose ${faveColor}`);
 //   break;
   // default:
  //      alert('Sorry, you did not choose one of the following colors.');
//}



//function changeToLowercase (dayValue) {
//    let dayValue = '';
 //   return dayValue.toLowerCase();
//}

//console.log(changeToLowercase('HI'));
/*
function getWeatherReport (day, time, temperature) {
    const correctDayFormat = day.toUpperCase();
    const correctTimeFormat = time.toLowerCase();
    const correctTemperatureFormat = temperature.toUpperCase();
    const summary = `Today is ${correctDayFormat} and the time is ${correctTimeFormat}. The temperature is a rocking ${correctTemperatureFormat} degrees.`;
    return summary;


//}


function getWeatherSummary(day, time, temperature) {
    const summary = `Today is ${day} and the time is ${time}. The tem`
//}

console.log(getWeatherReport('wednesday', '6:00PM', '90'));

*/

let myArrayofRandomShit = [
    'Talladega Nights',
    17,
    true,
    '2007'

];

/*console.log(myArrayofRandomShit.length); //checks length
console.log(myArrayofRandomShit[3]);
console.log(Array.isArray(myArrayofRandomShit));
myArrayofRandomShit.push('I like cheese'); //adds onto the end of array
console.log(myArrayofRandomShit.length);
console.log(myArrayofRandomShit);
myArrayofRandomShit.unshift('I am now number One.'); // ads to the beginning of the array
console.log(myArrayofRandomShit[0]);
myArrayofRandomShit.pop(); // removes the last item in the array
console.log(myArrayofRandomShit);
myArrayofRandomShit.shift(); //removes the first item in the array
console.log(myArrayofRandomShit);
myArrayofRandomShit.splice(1, 1, 5); //1 param:position 2nd param:if you want to replace; 0 - if you want to add prior to position, 3rdparam: content value
console.log(myArrayofRandomShit);
myArrayofRandomShit.slice(1);
console.log(myArrayofRandomShit);
let newArrayofInfo = myArrayofRandomShit.slice(1); //because slice creates a new array you must call it under a new var to express it
console.log(newArrayofInfo);
newArrayofInfo.indexOf('2007');
let findPositionToRemove = newArrayofInfo.indexOf('2007');
console.log(newArrayofInfo.indexOf(false));
let refreshed = newArrayofInfo.splice(findPositionToRemove, 1);
console.log(refreshed);
*/

/*let arrayOne = [
    'Purple',
    'MaryJane'
];

let arrayTwo = [
    'yellow'
    'banana'
];

let finalArray = [
    arrayOne,
    arrayTwo
];


console.log(finalArray[0][0]);
*/

// let x = 0;
// while (x < 10) {
//     console.log(x);
//     x++;
// 

// for (let i=0; i < 20; i++) {
//     console.log(i);
// }

// for (let i = 0; i < 10; i++){
//     if(i==4) {
//         continue;
//     }
//     console.log(i)
// }

// let i = 0;
// do {
//     console.log(i);
//     i++;

// } while (i < 10);

let arr3 = [1, 2, 3, 4, 5];

arr3.forEach(function(x){
    console.log('I am '+ x);
});

