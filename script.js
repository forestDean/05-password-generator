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

//break;
//alert("start")
// Function to prompt user for password options
//var passLength;
function getPasswordOptions() {
  var passLength = prompt("How many characters do you want in your password?\nMinimum 8 but we recommend over 12");

//CHECK over 8
  if (isNaN(passLength)) {
    prompt("That wasn't a number ...try again!\nHow many characters do you want in your password?\nMinimum 8 but we recommend over 12");
    //break;
  // At least 8 characters but no more than 128
  } else if (too low/high) {
    
  }
  confirm(passLength);

  //var passSpecial = prompt("Would you like to use Special Characters? Y/N");
  //switch... case Y||y and N||n
  // while (!isNaN(passSpecial)) {
  //   prompt("That wasn't Y/N ...try again!\nWould you like to use Special Characters? Y/N ");
  // }
  // passSpecial = passSpecial.toUpperCase();
  // // while condition not correct
  // //while  ((passSpecial !== Y || N) && (!isNaN(passSpecial))) {
    
  // while  (passSpecial !== Y || N) {
  //   prompt("That wasn't Y/N ...try again!\nWould you like to use Special Characters? Y/N ");
  // }
  // confirm(passSpecial.toString());

}

// Function for getting a random element from an array
function getRandom(arr) {
  return arr[Math.floor(Math.random() * (arr.length -1))];
} 
console.log(getRandom(specialCharacters ));
console.log(getRandom(numericCharacters));
console.log(getRandom(lowerCasedCharacters));
console.log(getRandom(upperCasedCharacters));

// Function to generate password with user input
function generatePassword() {
alert(passLength + "at generatePassword")
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