// http://placegoat.com/goatse/200/200
// function playWithApi() {
//     const url = 'http://placegoat.com/goatse/200/200';
//     fetch(url)
//     .then(function(resp){
//         return resp.json()
//     })
//     .then(function(data){
//         console.log(data);
//     })
//     .catch(function(){

//     });
// };

// playWithApi();
div className = 'container';
const row = document.createElement('div');
row.className = 'row';
const wrapper = document.createElement('div');
wrapper.className = 'col-md-8 col-md-offset-2';
row.appendChild(wrapper);
div.appendChild(row);
document.body.appendChild(div);
//play with testing JSON:
const exampleJson = ' { "name": "Debbie", "age": 30} ';
const exampleTwo = ' { "random": 7, "phrase": "This is supa cool"} ';
const exampleParse = JSON.parse(exampleJson);
//wrapper.innerText = example.Json.name;
const exampleStringify = JSON.stringify(exampleTwo);
wrapper.innerText = exampleStringify;

console.log(exampleTwo);

//inside a scope
function practiceScope () {
    let random = 'Inside scope';

    const phrase = function (sentence) {
        console.log(sentence);

    }
    return phrase();
}
  
  //outside
  let practiceOutside = practiceScope();
  const example = [1,2,3];
  const exampleBreakdown = example.forEach( (val) => {
      return val + 5;
  });

  console.log(exampleBreakdown);


  //TODO: *OPTIONAL* Create class that will call in a basic constructor regarding info.
//Call api and use at least one paramater placeholder so you can change api value at random
//One random function to do something with that information

class AboutMe {
    constructor(name, age, pet) {
        this.name = name;
        this.age = age;
        this.pet = pet;

    }
}
AboutMe.prototype.myCat = function() {
    const url = `https://api.thecatapi.com/v1/${this.petBreed}/images/search`
    fetch(url);
    .then ( (transformJson) =>{
        return transformJson.json();
    })
    .then ( (breedData) => {
        console.log(breedData);
        const image = document.createElement('img');
        image.setAttribute('src', breedData.message);
        wrapper.appendChild(image);
    })
    .catch( (err) => {
        console.log(err);
    })
}
const debbie = new AboutMe('Debbie', 30, 'Meep');
debbie.myCat();