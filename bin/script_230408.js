// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

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
function getPasswordOptions() {
  // Password Length
   // var passLength = prompt("How many characters do you want in your password?\nChoose a number between 8 and 128\nWe recommend 12 to 16");

  do {
    var passLength = prompt("How many characters do you want in your password?\nChoose a number between 8 and 128\nWe recommend 12 to 16");
  }
  while (passLength < 8 || passLength > 128 || isNaN(passLength));
  console.log(passLength);

  // if (isNaN(passLength)) {
  //   prompt("That wasn't a number ...try again!\nHow many characters do you want in your password?\nChoose between 8 and 128\nWe recommend 12 to 16");
  // // At least 8 characters but no more than 128
  // } else if (passLength < 8) {
  //   prompt("That number was too low ...try again!\nHow many characters do you want in your password?\nChoose between 8 and 128\nWe recommend 12 to 16");  
  // } else if (passLength > 128) {
  //   prompt("That number was too high ...try again!\nHow many characters do you want in your password?\nChoose between 8 and 128\nWe recommend 12 to 16");
  // } else {
   //  console.log(passLength);
  //   // ** not looping **
  //   // return; ??
  // };


  // Lowercase"
  var charName = "Lowercase";
  validateChar(charName);

  // Special Characters"
  var charName = "Special Characters";
  validateChar(charName);



  ///if all above false ...the password will be UPPERCASE
  //return chosenChar;
  //return passLength;

}

// Function for validating character choices
function validateChar(charName) {
  var input = prompt("Would you like to use " + charName + "? Y/N");
  if (input === "Y" || input === "y") {
    charChoice.push(charName);
    console.log(charChoice);
  } else if (input === "N" || input === "n") {
    input = false;
    console.log("validateCharExt: " + input);
  } else {
    prompt("Sorry ...I didn't understand your answer.\nWould you like to use Special Characters? Y/N");
    // ** not looping **
    // return; ?? or var input; global
  }
}


// Function for getting a random element from an array
function getRandom(arr) {
  return arr[Math.floor(Math.random() * (arr.length -1))];
} 
// console.log(getRandom(specialCharacters ));
// console.log(getRandom(numericCharacters));
// console.log(getRandom(lowerCasedCharacters));
// console.log(getRandom(upperCasedCharacters));

// Function to generate password with user input
function generatePassword() {

// elements.join('')
//return "pa55word123";
}

// Get references to the #start element
var startBtn = document.querySelector('#start');

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');
//getPasswordOptions();
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