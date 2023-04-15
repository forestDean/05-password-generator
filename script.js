// Object containing array of lowercase characters to be included in password
var lowerCasedCharacters = {
    name: 'Lowercase',
    characters: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
    select: false
};

// Object containing array of uppercase characters to be included in password
var upperCasedCharacters = {
    name: 'Uppercase',
    characters: ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
    select: false
};

// Object containing array of numeric characters to be included in password
var numericCharacters = {
    name: 'Numeric',
    characters: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
    select: false
};

// Object containing array of special characters to be included in password
var specialCharacters = {
    name: 'Special',
    characters: ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'],
    select: false
};

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
  do {
    var passLength = prompt("How many characters do you want in your password?\nChoose a number between 8 and 128\nWe recommend 12 to 16");
  }
  while (passLength < 8 || passLength > 128 || isNaN(passLength));
  console.log(passLength);

  // Lowercase
  var charName = "Lowercase";
  validateChar(charName);

  // Uppercase
  var charName = "Uppercase";
  validateChar(charName);

  // Numeric
  var charName = "Numeric";
  validateChar(charName);

  // Special Characters
  var charName = "Special";
  validateChar(charName);

  //if all above false [charChoice empty] ...the password will be all LAST CHOICE
  //return chosenChar;
  //return passLength;
  

}






// Function for validating character choices
var i = 0;
var charChoice; // make global
function validateChar(charName) { 
  console.log("here: " + i);
  if (i > 2) {
    alert("Your password will be all Special Characters.");
    charChoice.push("Special");
  } else {
    do {
      var input = prompt("Would you like to use " + charName + " Characters? Y/N");
      input = input.toUpperCase();
      console.log(input);
    }
    while ((input != "Y") && (input != "N")); // *check notEqual

    if (input === "Y") {
      //charChoice.push("'" + charName + "'");
      charChoice.push(charName);
      console.log("charChoice: " + charChoice);
    } else {
      input = false;
      i++;
      console.log("validateCharExt: " + input + i);
    }
  }
}

// Function for getting a random element from an array
function getRandom(arr) {
  return arr[Math.floor(Math.random() * (arr.length))];
} 

// https://stackoverflow.com/questions/5613834/convert-string-to-variable-name-in-javascript
// https://stackoverflow.com/questions/64702041/set-string-to-variable-name
// Function to generate password with user input
var passWord = [];
var charSelect;
var keySelect;
function generatePassword() {
  console.log("charChoice: " + charChoice);
  var charSelect = getRandom(charChoice);
   // charSelect is String
  console.log("charSelect : " + charSelect + " is " + (typeof charSelect));
  // console.log(charSelect[0]);
  // console.log(charSelect[1]);
  // console.log("charSelect : " + charSelect.length);
  // keySelect = getRandom(Special); // this works!
  keySelect = getRandom(charSelect);
  //var keySelect = getRandom(getRandom(charSelect));
  console.log("keySelect: " + keySelect);

// elements.join('')
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