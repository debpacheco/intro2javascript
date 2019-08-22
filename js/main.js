//const greeting = "hello";

//if (greeting === "hi") {
 //   console.log('Yes, this matches to HI');

//} else if (greeting == "hello"){
  //  console.log('Yes, this matched HELLO');
//}else if {
//    console.log('none of them matched');
}

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
}

//console.log(changeToLowercase('HI'));
/*
function getWeatherReport (day, time, temperature) {
    const correctDayFormat = day.toUpperCase();
    const correctTimeFormat = time.toLowerCase();
    const correctTemperatureFormat = temperature.toUpperCase();
    const summary = `Today is ${correctDayFormat} and the time is ${correctTimeFormat}. The temperature is a rocking ${correctTemperatureFormat} degrees.`;
    return summary;


}


function getWeatherSummary(day, time, temperature) {
    const summary = `Today is ${day} and the time is ${time}. The tem`
}

console.log(getWeatherReport('wednesday', '6:00PM', '90'));

*/

let myArrayofRandomShit = [
    'Talladega Nights',
    17,
    true,
    '2007'

];

console.log(myArrayofRandomShit.length); //checks length
console.log(myArrayofRandomShit[3]);
console.log(Array.isArray(myArrayofRandomShit));
myArrayofRandomShit.push('I like cheese');
console.log(myArrayofRandomShit.legth);
console.log(myArrayofRandomShit);
myArrayofRandomShit.unshift('I am now number One.');
console.log(myArrayofRandomShit[0]);