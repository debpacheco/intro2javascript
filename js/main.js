//create taco receipe using prototypes. First to create what will be needed for the receipe itself

function TacoRecipe(meat, seasonings, vegetables, tortilla){
    this.meat = meat;
    this.seasonings = seasonings;
    this.vegetables = vegetables;
    this.tortilla = tortilla;
}

//make prototype functions
TacoRecipe.prototype.prepIngredients = function() {
    console.log(`Get two pounds of ${this.meat} and add to pan. In a seperate bowl collect ${this.seasonings}. Make sure to get your ${this.vegetables} ready to be washed and cut. Then prepare your ${this.tortilla} on the stove top, until tortilla has a nice brown color.`);

}

TacoRecipe.prototype.foodAssemble = function(date) {
    if (date === 'Taco' || date === 'Tuesday') {
        console.log(`Lucky you!Enjoying ${this.meat} on ${date}, what a lovely Taco Tuesday!`);
    
    } else {
        console.log(`Man, you dont get any ${this.meat} today, Sad!`);
    }
}
//random  NON PROTOTYPE FUNCTION

const getTypeOfMeat = function() {
    TacoRecipe.call(this.meat);
}

console.log(getTypeOfMeat);

const nameThis = 'debbie'
const carnitasTaco = new TacoRecipe ('carnitas', ['garlic powder', 'cumin', 'onion', 'salt & pepper'], ['lemon', 'tomatoes', 'onion', 'lettuce/cabbage', 'radish'], 'corn tortilla');



console.log(carnitasTaco.prepIngredients());
console.log(TacoRecipe.foodAssemble());