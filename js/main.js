
// const container = document.querySelector('.container');
// console.log(container);



// const h1 = document.querySelector('h1');

// function globalListItems() {
//     //create a /ul/ol, create li, wit any classes or attributes or ids needed.

//     //create ul
//     const ul = document.createElement('ul');
//     console.log('unordered list', ul);

//     const li = document.createElement('li');
// console.log('list item', li);

// //atttriubutes/classes/ids
// li.className = 'list-group-item', 'list-group-item-info';
// li.innerHTML = 'I am a list item.';
// li.id = 'mySpecialListItem';

// const image = document.createElement('img');
// image.setAttribute('alt', 'I am an empty image');
// console.log(image);



// console.log('li with classes', li);
// //append to container->ul->li
// ul.appendChild(li);
// console.log('complete ul', ul);
// container.appendChild(ul);
// }



// globalListItems();

function catCard(){


const container = document.querySelector('.container');
const card = document.createElement('div');
card.className = 'text-center col-md-6';

container.appendChild(card);
const col = document.createElement('div');
col.className = 'col-md-4';
card.appendChild(col);

const h1 = document.createElement('h1');
h1.innerText = 'Hello';
col.appendChild(h1);

const img = document.createElement('img');
img.className = 'img-responsive';
img.setAttribute('src', 'https://images.unsplash.com/photo-1494256997604-768d1f608cac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=801&q=80'); 

img.setAttribute('alt', 'cat under blanket');
col.appendChild(img);
const p = document.createElement('p');

p.innerText = 'Meow';

col.appendChild(p);

console.log(card);
}

catCard();






// const button = document.createElement('button');
// button.id = "triggerMagic";
// button.className = "btn btn-primary btn-sm text-uppercase center_center";
// button.innerHTML = "click for some magic";
// container.appendChild(button);

// let triggered = () => {
//     button.addEventListener('click', ( => {
//         poster();
//     }))
// }

// function poster() {
//     //create a card parent div that will have:h1,img,p, icon>link
//     const panelDiv = document.createElement('div');
//     panelDiv.className = 'panel panel-default col-md-6';
// }
// console.log(h1);
// let message = h1.innerHTML = 'I am a message.';

// console.log(h1.textContent);

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

// greeting.innerHTML = 'Debbie\'s Grocery List';

// //create function to add onto grocery list
// const addGroceryItem = (arr, value) => arr.push(value);
// console.log(addGroceryItem(arrayOfGroceryItems, 'Carrots'));
// console.log(arrayOfGroceryItems);

// function addGroceryItemAndDisplay(arr, value) {
//     arr.push(value);
    //let result = arr.push(value);
   //for (a = 0; a < result.length; a++) {
//        groceryItem.innerHTML(result[a]);
//    }
//    console.log(result);
// 

// addGroceryItemAndDisplay(arrayOfGroceryItems, 'Cucumber');

   //grab list item
    //goal: push array items to list on html

// function ejectGroceryItemToList(val) {
//     for (grocery = 0; grocery < addGroceryItem.length; grocery++) {
//         groceryItem.innerHTML = val;
//      }

// foreach (val in values) {
//     groceryItem.innerHTML = values;

// }

// addGroceryItem(arrayOfGroceryItems, 'Testing');
// addGroceryItem(arrayOfGroceryItems, 'Chocolate');
// console.log(arrayOfGroceryItems);

// ejectGroceryItemToList('TESTING');