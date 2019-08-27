
// //ANON function
// let example = function () {
//     console.log('hello there');
// }

// //Naming function
// function exampleName() {
//     console.log('hello there');
// }

// // example();
// // exampleName();

// const turnValueUppercase = val => console.log(val.toUpperCase());
// const multiplyValues = (arg1, arg2) => {return arg1 * arg2};
// turnValueUppercase('hello');
// console.log(multiplyValues(2, 6));

// // function turnValueUppercase(val) {
// //     console.log(val.toUpperCase());
// // }


// //create an array of three names
// let names = [
//     'Jacque',
//     'Jake',
//     'Gina',
//     'Anotha One'
// ];

// //create a greeting that will be taking in a name value

// const greeting = name => `Good evening, ${name}`;



// //test result first:
// console.log(`The array of names ${names}`, `greeting function value: ${greeting ('Example')}`);

// const limit = 3;

// //loop through names and add greeting function to it

// for(j = 0; j < limit; j++) {
//     console.log(greeting(names[j]));
// }

//grab elements from HTML:
// const greeting = document.getElementById('greeting');
// const groceryList = document.getElementById('groceryList');
// const groceryItem = document.getElementById('groceryItem');
// const myGroceryInput = document.getElementById('getGroceryItem');

// let arrayOfGroceryItems = [];

greeting.innerHTML = 'Debbie\'s Grocery List';

//create function to add onto grocery list
// const addGroceryItem = (arr, value,) => arr.push(value);
// console.log(addGroceryItem(arrayOfGroceryItems, 'Carrots'));
// console.log(arrayOfGroceryItems);

function addGroceryItem(arr, value) {
    arr.push(value);
   
}

function ejectGroceryItemToList(val) {
    //grab list item
    //goal: push array items to list on html
    groceryItem.innerHTML = val;
    for(grocery = 0; grocery < 2; grocery++) {
        groceryItem.innerHTML = val;

    }
}


addGroceryItem(arrayOfGroceryItems, 'Testing');
addGroceryItem(arrayOfGroceryItems, 'Chocolate');
console.log(arrayOfGroceryItems);

ejectGroceryItemToList('TESTING');