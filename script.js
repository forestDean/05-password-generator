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
var passLength = 8; // global - set at minimum
var charSets = [];
var k = 0;

function getPasswordOptions() {
  // Password Length
  do {
    passLength = prompt("How many characters do you want in your password?\nChoose a number between 8 and 128\nWe recommend 12 to 16");
  }
  while (passLength < 8 || passLength > 128 || isNaN(passLength));
   // console.log("passLength: " + passLength);
   charSets.length = 0; // clears previous iterations
   k = 0; // clears previous iterations
   // console.log("charSets: " + charSets);
   
  // iterate through character sets & validate...
  for (var i = 0; i < passChar.length; i++) {
    charName = passChar[i].name;
    validateChar(charName);
  }
}

// Function for validating character choices
function validateChar(charName) { 
  var input;
  // console.log("k: " + k);
  if (k > 2) {
    alert("Your password will be all Special Characters.");
    passChar[3].select = true;
    charSets.push(charName);
    // console.log("charSets: " + charSets);
  } else {
    do {
      var input = prompt("Would you like to use " + charName + " Characters? Y/N");
      input = input.toUpperCase();
      // console.log(input);
    }
    while ((input != "Y") && (input != "N"));

    if (input === "Y") {
      this.select = true;
       // console.log(charName + ": " + this.select);
      charSets.push(charName);
       // console.log("charSets: " + charSets);
    } else {
      this.select = false;
      k++;
       // console.log(charName + ": " + this.select + k);
    }
  }
  return charSets;
}


// Function for getting a random element from an array
function getRandom(arr) {
  return arr[Math.floor(Math.random() * (arr.length))];
} 


// https://www.tutorialrepublic.com/faq/how-to-find-an-object-by-property-value-in-an-array-of-javascript-objects.php
// Function to generate password with user input
function generatePassword() {
  var charSelect;
  var keySelect;
  var passComp = ""; // clears previous iterations
  // *iterate number of times given by var passLength in prompt
  for (var i = 0; i < passLength; i++) {
  // random selection of character set
  charSelect = getRandom(charSets);
  // match to object by property value
  charThis = passChar.find(function isMatch(item) {
    return item.name === charSelect
  });
  // console.log(charThis.characters);

  // random selection of character
  keySelect = getRandom(charThis.characters);
  // console.log("keySelect: " + keySelect);

  passComp += keySelect;
  
 }

  // console.log("passComp: " + passComp);
  return passComp;

}


// Get references to the #start element
var startBtn = document.querySelector('#start');

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

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