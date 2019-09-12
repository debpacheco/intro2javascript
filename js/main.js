const container = document.createElement('main');
//container.className = 'container';
container.classList.add('container');
// container.classList.remove('container);
document.body.appendChild(container);
container.innerHTML = '<h1>Hello</h1>'
console.log(container);


//create function
function movieQuote() {
    alert('You can do it Brucie!');
}
let timer;
function callQuote() {
    timer = setInterval(movieQuote, 3000);
}

function stopFromRunning() {
    clearInterval(timer, 10000);
}

const button = document.createElement('button');
button.setAttribute('onclick', 'callQuote()');
button.innerText = 'Click for a movie quote';
button.className = 'btn btn-primary lead btn-lg';
container.appendChild(button);

const stopButton = document.createElement('button');
stopButton.className = 'alert alert-danger border-danger border';
stopButton.setAttribute('onclick', 'stopFromRunning()');
stopButton.innerText = 'STOP';

button.addEventListener('click', () => {
    container.appendChild(stopButton);
    sessionStorage.setItem('TEMPORARY', 'Every problem is temporary');
sessionStorage.getItem('TEMPORARY');
localStorage.setItem('DEATH', 'Except for death - Grace');
localStorage.getItem('DEATH');
});


// //Session storage
// sessionStorage.setItem('TEMPORARY', 'Every problem is temporary');
// sessionStorage.getItem('TEMPORARY');
// localStorage.setItem('DEATH', 'Except for death - Grace');
// localStorage.getItem('DEATH');

//anon function triggers another function within

const example = function(param) {
    return test(param);
}

function test (testParam) {
    alert(testParam);
}

example('OKAY I SEE WHAT YOU DID THERE THO');