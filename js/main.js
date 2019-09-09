const body = document.body;
const container = document.createElement('div');
container.className = 'container text-center';

// let test = body.appendChild(container);
// console.log('my html: ', test);

const row = document.createElement('main');
row.className = 'row';

const content = document.createElement('div');

content.className = 'col-md-6 col-md-offset-3 content';

row.appendChild(content);
container.appendChild(row);
body.appendChild(container);

//Create


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
const inputSubject = globalFormElements('input', 'text', 'subject', 'form-control','Enter subject here');
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


