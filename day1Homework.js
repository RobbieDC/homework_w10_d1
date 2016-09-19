// #JS Day 1 Homework

// Go through each sample code and work out what the output will be and explain what happened.

// ### Episode 1
// ```
var name = 'Keith';

var printName = function() {
  console.log('My name is ' + name );
}

printName();

// printName will return the variable name as "Keith" since it is set as a global variable and is available within the printName function.

// ```

// ### Episode 2
// ```
score = 5;

var result = function() {
  var score = 3;
  return score;
}

console.log(result());

// This will return the variable score as 5 since the local version of score takes priority over the globabl version set outwith the function.

// ```

// ### Episode 3
// ```
var myAnimals = ['Chickens', 'Cats', 'Rabbits'];

var listAnimals = function() {
  myAnimals = ['Ducks', 'Dogs', 'Lions'];
  for(var i=0;i<myAnimals.length; i++){
    console.log(i + ": " + myAnimals[i]);
  }
}

listAnimals();

// This will return the index of each item in the myAnimals array along with the item at said index. The output is achieved by looping through an incrementing number up to the length of the list and using the number to pull the item from the array by its index.

// ```

// ### Episode 4

// ```
var suspectOne = 'Jay';
var suspectTwo = 'Val';
var suspectThree = 'Keith';
var suspectFour = 'Rick';

var allSuspects = function() {
  var suspectThree = 'Harvey'
  console.log('Suspects include: ' + suspectOne + ', ' + suspectTwo + ', ' + suspectThree + ', ' + suspectFour)
}

allSuspects();
console.log( 'Suspect three is:' + suspectThree )

// When allSuspects is called it will print all suspects to the console where suspectThree is Harvey since this is the local version of the suspectThree variable. The console.log command thereafter will return suspectThree as Keith since it does not have access to the version of suspectThree within the allSuspects function.

// ```

// ### Episode 5

// ```
var detective = {
    name : 'Ace Ventura',
    pet : 'monkey'
  }

var printName = function(detective) {
  return detective.name
}

var detectiveInfo = function() {
  detective['name'] = 'Poirot'
  return printName(detective);
}

console.log(detectiveInfo());

// This will return the detective name as Poirot since when the name is accessed in the printName function it has been changed within the function, detectiveInfo, which is calling it.

// 

// ```

// ### Episode 6
// ```
var murderer = 'rick';

var outerFunction = function(){
  var murderer = 'marc';

  var innerFunction = function(){
    murderer = 'valerie';
  }

  innerFunction();
}

outerFunction();
console.log('the murderer is ', murderer);

// This will return Rick as the murderer since the console log line is unable to access the variables within the functions.

// ```

// ### Episode 7 - Make up your own episode/s!

// Make up your own episode which can be whatever you wish and the rest of the class will work out together what happened and what the output will be.