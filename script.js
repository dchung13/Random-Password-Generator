// Assignment Code
var generateBtn = document.querySelector("#generate");

/*Password Length Criteria*/
function generatePassword () {

  var passwordLengthBool = false;
  var passwordLength;
  var lowercasePassword;
  var uppercasePassword;
  var numbersPassword;
  var specialPassword;

  function selectPasswordLength() {
    passwordLength = prompt("Please enter the length of your desired password", "8-128");
    if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
      window.alert("Invalid password length.");
    }
    else {
      window.alert("Your password length is " + passwordLength + ".");
      passwordLengthBool = true;
      return passwordLength;
    }
  }

  /*lowercase allowed prompt*/

  function selectLowercase() {
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

  /*Define character sets*/
  var lowercaseCharSet = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseCharSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numberCharSet = "0123456789"
  var specialCharSet = "!#$%&'()*+,-./:;<>=?@[]^\u005C_\u0022`{}|~";


  var passwordCharSet = "";

  if (lowercasePassword) {
    passwordCharSet += lowercaseCharSet;
  }
  if (uppercasePassword) {
    passwordCharSet += uppercaseCharSet;
  }
  if (numbersPassword) {
    passwordCharSet += numberCharSet;
  }
  if (specialPassword) {
    passwordCharSet += specialCharSet;
  }



  var password = "";
  for (i=0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * passwordCharSet.length);
    password += passwordCharSet[randomIndex];
  }

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);