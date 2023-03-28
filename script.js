// Assignment Code
var generateBtn = document.querySelector("#generate");

/*Password Length Criteria*/

function selectPasswordLength() {
  var passwordLength = prompt("Please enter the length of your desired password", "8-128");
  if (passwordLength !== null && passwordLength >= 8 && passwordLength <= 128) {
    window.prompt("Your password length is " + passwordLength + ".");
    return passwordLength;
  }
  else {
    window.prompt("Invalid password length.");
  }
}

selectPasswordLength();

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

selectLowercase();

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

selectUppercase();

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

selectNumbers();

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

selectSpecial();



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

