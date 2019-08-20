//const exampleString = '1';
//const exampleObjectString = new String('1');
//const anotherString = 'I am a string';
const H1 = document.getElementById('greeting');

//function checkExamples() {
   // if (exampleString === exampleObjectString) {
   //     console.log('Yes, ${exampleString} and ${exampleObjectString} do loosely equal.');

// } else {
  //  console.log('Sorry, they do not equal at all.');
//}
//}


//const luckyNumber = 4;

//if(luckyNumber < 5 || luckyNumber > 1){
  //  console.log('Sorry, your number is not lucky to me.');
//} else {
//    console.log('Hey your lucky number is ${luckyNumber}.');
//}

//const personAge = prompt('Are you over the age of 18?');
//if (personAge <= 18) {
    //console.log('You are not old enough for this site, goodbye child');
//}

//let hello = 'Hello ';
//let there = 'there!';
//let sentence = hello += there;
//console.log(sentence);

//let a = '5.99';

//let b = 2;

//let testModulo = 10 % 2;

//console.log(testModulo);

//let testNan = isNaN('1');
//console.log(testNan);

//let valueNan = "I am indeed NaN";
//let valueNan = 1;
//let testNan = isNaN(valueNan);

//testNan ? console.log('THIS IS TRUE') : console.log('THIS IS FALSE');
//let transformMe = parseInt(a);

//let transformMe = parseFloat(a, 2);

//let result = a +=b;


//console.log(`Before: ${a}, after: ${transformMe}`, typeof(a), typeof(transformMe));
//console.log(result);

//if(testNan === true) {
   // let result = 'Yup, this is true.';
   // console.log('Yup, this is true');
   // H1.innerHTML = result;
//} else {
 //   let result = 'Nope, this is false.';
 //   console.log('Nope, this is false.');
 //   H1.innerHTML = result;
 //   }

 const askColor = prompt('Pick one of the following colors: red, blue, or orange. Await for the following response...');
 switch(askColor) {
     case 'red': 
     H1.innerHTML = `You chose ${askColor}..which reminds me of that song, RoxxxAAAnnnne, you dont have to turn on the RED LIGHT...`;
     
     break;
     case 'blue':
         H1.innerHTML = `You chose ${askColor} ...hoooow does it feel?To treat me like you doooo....Blue Monday by Orgy`;
         break;
         case 'orange':
         H1.innerHTML = `You chose ${askColor} congrats the computer is tired and literally cant find something to rhyme with orange`;
         break;
         default:
             H1.innerHTML = `You did not follow the rules fam`;

 }
    