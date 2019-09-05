const body = document.body;
const container = document.createElement('div');
container.className = 'container text-center';

let test = body.appendChild(container);
console.log('my html: ', test);

const row = document.createElement('main');
row.className = 'row';

const content = document.createElement('div');

content.className = 'col-md-6 col-md-offset-3 content';

row.appendChild(content);
container.appendChild(row);
body.appendChild(container);


function globalFormElements(element, elementType, elementName, elementClass, elementPlaceholder, elementId) {
    //element:create the type of element you seek
    const newElement = document.createElement(element);

    newElement.setAttribute('type', elementType);
    newElement.className = elementClass;
    newElement.setAttribute('name', elementName);
    newElement.setAttribute('placeholder', elementPlaceholder);
    newElement.id = elementId;
    return newElement;

}

const textAreaElement = (name, placeholder, elementClass, elementId, cols = 4, rows = 2) => {
    const element = document.createElement('textarea');
    element.setAttribute('type', 'text');
    element.className = elementClass;
    element.setAttribute('name', name);
    element.setAttribute('placeholder', placeholder);
    element.setAttribute('rows', rows);
    element.id = elementId
    return element;
}
const labelGenerator = (forElement, text) => {
    const label = document.createElement('label');
    label.setAttribute('for', forElement);
    label.innerText = text;
    return label;
}
console.log(globalFormElements('input', 'text', 'example', 'form-control bg-primary', 'Type your example here'));

console.log(globalFormElements('textarea', 'text', 'message', 'bg-danger', 'Please let us know your concerns here.'));



// form tag> input:email-input:subject - textarea - submit button

const form = document.createElement('form')
const inputEmail = globalFormElements('input', 'email', 'email', 'form-control bg-primary', 'type your example here');
const inputSubject = globalFormElements('input', 'text', 'subject', 'form-contrl','Enter subject here');
const textArea = textAreaElement('message', 'Your message here..', 'form-control','message', 5,'');
const button = document.createElement('button');
button.className = 'btn-primary btn';
button.setAttribute('type', 'submit');
button.innerText = 'Submit now';

form.appendChild(inputEmail);
form.appendChild(inputSubject);
form.appendChild(textArea);
form.appendChild(button);

content.appendChild(form);
// const selectForm = docum;ent.forms(container);
// const selectFormElement = document.forms(row).elements(content);
// const loginForm = document.forms('login'); // Or document.forms['login']
// loginForm.elements.email.placeholder = 'test@example.com';
// loginForm.elements.password.placeholder = 'password';
// row.appendChild(loginForm);


// const form = document.createElement('form');
// const inputEmail = document.createElement('input');

// inputEmail.setAttribute('type', 'email');
// inputEmail.setAttribute('name', 'email');
// inputEmail.setAttribute('class', 'form-control');
// inputEmail.setAttribute('placeholder', 'My Input Email');

// form.appendChild(inputEmail);

// content.appendChild(form);



// const textAreaElement = (name, placeholder, elementClass, elementId, cols = 4, rows = 2) => {
//     const element = document.createElement('textarea');

// }





// let text = body.appendChild(loginForm);

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

// function catCard(){


// const container = document.querySelector('.container');
// const card = document.createElement('div');
// card.className = 'text-center col-md-6';

// container.appendChild(card);
// const col = document.createElement('div');
// col.className = 'col-md-4';
// card.appendChild(col);

// const h1 = document.createElement('h1');
// h1.innerText = 'Hello';
// col.appendChild(h1);

// const img = document.createElement('img');
// img.className = 'img-responsive';
// img.setAttribute('src', 'https://images.unsplash.com/photo-1494256997604-768d1f608cac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=801&q=80'); 

// img.setAttribute('alt', 'cat under blanket');
// col.appendChild(img);
// const p = document.createElement('p');

// p.innerText = 'Meow';

// col.appendChild(p);

// console.log(card);
// }

// catCard();






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