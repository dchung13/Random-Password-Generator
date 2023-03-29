// Assignment Code
var generateBtn = document.querySelector("#generate");

/*Password Length Criteria*/

var passwordLengthBool = false;
var passwordLength;
var lowercasePassword;
var uppercasePassword;
var numbersPassword;
var specialPassword;

function selectPasswordLength() {
  var passwordLength = prompt("Please enter the length of your desired password", "8-128");
  if (passwordLength !== null && passwordLength >= 8 && passwordLength <= 128) {
    window.alert("Your password length is " + passwordLength + ".");
    passwordLengthBool = true;
    return passwordLength;
  }
  else {
    window.alert("Invalid password length.");
  }
}

/*lowercase allowed prompt*/

function selectLowercase() {
  var lowercasePassword;
  if (confirm("Lowercase?")) {
    window.alert("Lowercase allowed.")
    return lowercasePassword = true;
  }
  else {
    window.alert("Lowercase not allowed.")
    return lowercasePassword = false;
  }
}

/*uppercase allowed prompt*/

function selectUppercase() {
  var uppercasePassword;
  if (confirm("Uppercase?")) {
    window.alert("Uppercase allowed.")
    return uppercasePassword = true;
  }
  else {
    window.alert("Uppercase not allowed.")
    return uppercasePassword = false;
  }
}

/*numbers allowed prompt*/

function selectNumbers() {
  var numbersPassword;
  if (confirm("Numbers?")) {
    window.alert("Numbers allowed.")
    return numbersPassword = true;
  }
  else {
    window.alert("Numbers not allowed.")
    return numbersPassword = false;
  }
}

/*special characters allowed prompt */

function selectSpecial() {
  var specialPassword;
  if (confirm("Special Characters?")) {
    window.alert("Special characters allowed.")
    return specialPassword = true;
  }
  else {
    window.alert("Special characters not allowed.")
    return specialPassword = false;
  }
}

/*Running prompts and alerts functions*/

while (passwordLengthBool !== true) {
  selectPasswordLength();
}
selectLowercase();
selectUppercase();
selectNumbers();
selectSpecial();
console.log(specialPassword);

/*Define arrays to pull from for each character */
var lowercaseCharSet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseCharSet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numberCharSet = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; /* 10 */
var specialCharSet = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", ">", "=", "?", "@", "[", "]", "^", "\u005C", "_", "\u0022", "`", "{", "}", "|", "~"];

/*random number generator function*/
function getRndNum(min, max) {
  return Math.floor(Math.random() * (max-min));
}

/*
for (i=0; i < passwordLength; i++){
  if (getRndNum(0,4) === 0){
    var lowercaseLetter = lowercaseCharSet[getRndNum(0, lowercaseCharSet.length)];
    return lowercaseLetter;
  }

  else if (getRndNum(0,4) === 1){
    var uppercaseLetter = uppercaseCharSet[getRndNum(0, uppercaseCharSet.length)];
    return uppercaseLetter;
  }

  else if (getRndNum(0,4) === 2){
    var number = numberCharSet[getRndNum(0, numberCharSet.length)];
    return number;
  }

  else {
    var specialCharacter = specialCharSet[getRndNum(0, specialCharSet.length)];
    return specialCharacter;
  }
} */

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

