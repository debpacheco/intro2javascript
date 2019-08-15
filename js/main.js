//var firstName = 'Debbie';
//var age = 30;

//const firstName = 'Debbie';
//console.log(firstName.length);

//old way
//console.log('My name is ' + firstName + ' and my age is' + age);

//BETTER way
//console.log(`My name is ${firstName} and my age is ${age}`);

//alert(`Hello, I am ${firstName}`);

//const birthday = '01/17/1989';
//console.log(birthday);



//let hello = new String('Hello, there.');
//alert(hello);

//ARRAY
//const topThreeMovies = ['Dodgeball', 'Fight Club', 'Grease'];
//console.log(topThreeMovies);
//console.log(`my second top movie is:${topThreeMovies[1]}`);

var firstName=prompt('What is your first name?');

var lastName=prompt('What is your last name?');

console.log(firstName);
alert(lastName);



const birthDay=prompt('What is your birthday?');

confirm(`Is this your birthday? ${birthDay}`);
alert(`Your birthday is: ${new Date(birthDay)}`);