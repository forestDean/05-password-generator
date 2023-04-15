var passChar = [
// Object containing array of lowercase characters to be included in password
    {
    id: 'lowerCasedCharacters',
    name: 'Lowercase',
    characters: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
    select: false
    },

// Object containing array of uppercase characters to be included in password
    {
    id: 'upperCasedCharacters',
    name: 'Uppercase',
    characters: ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
    select: false
    },

// Object containing array of numeric characters to be included in password
    {
    id: 'numericCharacters',
    name: 'Numeric',
    characters: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
    select: false
    },

// Object containing array of special characters to be included in password
    {
    id: 'specialCharacters',
    name: 'Special',
    characters: ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'],
    select: false
    },
]
console.log(passChar[0]);
console.log(passChar[1]);
console.log(passChar[2]);
console.log(passChar[3]);
//console.log(passChar[1][3]);


//  =============================================================================================
// * Generate a password when the button is clicked
//   * Present a series of prompts for password criteria
//     * Length of password
//       * At least 8 characters but no more than 128.
//     * Character types
//       * Lowercase
//       * Uppercase
//       * Numeric
//       * Special characters ($@%&*, etc)
//   * Code should VALIDATE for each input and at least one character type should be selected
//   * Once prompts are answered then the password should be generated and displayed in an alert 
//     or written to the page
//  =============================================================================================

// Function to prompt user for password options
// var charName;
// var passSpecial;
var charChoice = [];
var input;
var passLength; // global
function getPasswordOptions() {

  // Password Length
  do {
    var passLength = prompt("How many characters do you want in your password?\nChoose a number between 8 and 128\nWe recommend 12 to 16");
  }
  while (passLength < 8 || passLength > 128 || isNaN(passLength));
  console.log("passLength: " + passLength);

  // iterate through character sets & validate...
  for (var i = 0; i < passChar.length; i++) {
    charName = passChar[i].name;
    validateChar(charName);
  }
  return passLength;
}

// Function for validating character choices
var i = 0;
var charSets = [];
var charChoice; // make global
function validateChar(charName) { 
  console.log("here: " + i);
  if (i > 2) {
    alert("Your password will be all Special Characters.");
    passChar[3].select = true;
    console.log("specialCharacters.select: " + passChar[3].select);
    charSets.push(charName);
  } else {
    do {
      var input = prompt("Would you like to use " + charName + " Characters? Y/N");
      input = input.toUpperCase();
      console.log(input);
    }
    while ((input != "Y") && (input != "N")); // *check notEqual

    if (input === "Y") {
      this.select = true;
      console.log(charName + ": " + this.select);
      charSets.push(charName);
      console.log("charSets: " + charSets);
    } else {
      this.select = false;
      i++;
      console.log(charName + ": " + this.select + i);
    }
  }
}


// Function for getting a random element from an array
function getRandom(arr) {
  return arr[Math.floor(Math.random() * (arr.length))];
} 



// https://www.tutorialrepublic.com/faq/how-to-find-an-object-by-property-value-in-an-array-of-javascript-objects.php
// https://www.freecodecamp.org/news/javascript-array-of-objects-tutorial-how-to-create-update-and-loop-through-objects-using-js-array-methods/
// Function to generate password with user input

var passComp = [];
var charSelect;
var keySelect;
//var charSetsX;
function generatePassword() {
  // *iterate number of times given by var passLength
  //var passWord = "";
 // for (var i = 0; i < passLength; i++) {
  console.log("passLength: " + passLength); //undefined!!
  charSelect = getRandom(charSets);
  console.log("charSelect : " + charSelect + " is " + (typeof charSelect));
  charThis = passChar.find(item => item.name === charSelect); // change arrow to function()
  console.log(charThis.characters);
  keySelect = getRandom(charThis.characters);
  console.log("keySelect: " + keySelect);

  passComp += keySelect;
  //passComp.push(keySelect);

 //}

  //console.log("password: " + password);
  console.log("passComp: " + passComp);
  // passComp.join('')
  //return "pa55word123";
  
}


// Get references to the #start element
var startBtn = document.querySelector('#start');

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');
//this.style.backgroundColor = "green";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to start button
startBtn.addEventListener('click', getPasswordOptions);

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);


// password copy all on click
// css: user-select: all;