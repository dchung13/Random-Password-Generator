# Random-Password-Generator

## Technology Used 

| Technology Used         | Resource URL           | 
| ------------- |:-------------:| 
| HTML      | [https://developer.mozilla.org/en-US/docs/Web/HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) | 
| CSS       | [https://developer.mozilla.org/en-US/docs/Web/CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)      |   
| Git       | [https://git-scm.com/](https://git-scm.com/)     |    
| JavaScript| [https://developer.mozilla.org/en-Us/docs/Web/Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) |

## Description 

[Visit the Deployed Site](https://dchung13.github.io/Random-Password-Generator/)

This repository is for a random password generator site that will ask the user to input a number for the length of the desired password,
then provide confirm popout boxes to ask whether to include lowercase, uppercase, numbers, or special characters.
After taking in the user choices, it will generate a password with those included characters.


Again, here is the link to the deployed site:
[Site Landing Page](https://dchung13.github.io/Random-Password-Generator/)


## Table of Contents 

* [Code Example](#code-example)
* [Usage](#usage)
* [Learning Points](#learning-points)
* [Author Info](#author-info)
* [Credits](#credits)
* [License](#license)


## Code Example


```js
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
```
The above code is used to create a prompt that takes a user input to set a length for the desired password.


```js
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
```
The above code defines separate character sets for each criteria of the random password and sets it all into one character set to pull from.



```js
  var password = "";
  for (i=0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * passwordCharSet.length);
    password += passwordCharSet[randomIndex];
  }

  return password;
```
The above code returns a random password using the math.floor and math.random functions to generate a random number, for the randomIndex.


## Usage

1. Open the deployed website [Random Password Generator](https://dchung13.github.io/Random-Password-Generator/)
2. Click on the generate button.
3. Input desired password length (Note: putting in an invalid length, such as anything less than 8 or greater than 128, or inputting letters instead of numbers will return an invalid length alert and ask for another input).
4. Confirm whether you want lowercase, uppercase, numbers, or special characters in the generated password.
5. The generated password should appear in the box.

## Learning Points 

1. Random function: I used the MDN website to learn about the math.random and math.floor functions to use together to genearte a random integer. [MDN Random Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)
2. alerts, confirms, prompts popouts: I used the W3 website to learn about alerts, confirms, and prompt popup boxes to implement into my code. [W3 JavaScript PopUp Boxes](https://www.w3schools.com/js/js_popup.asp)


![Screenshot of prompt window](screenshot%20of%20popup%20window.png)
![Screenshot of website](screenshot%20of%20website.png)

## Author Info

### David Chung
I am an aspiring web developer making the switch from Psychology to web development.

* [Portfolio](https://dchung13.github.io/David-Chung-Portfolio/) 
* [LinkedIn](https://www.linkedin.com/in/david-chung-77141526b/)
* [Github](https://github.com/dchung13/)


## Credits

Special thanks to Bryan Nguyen for pair programming with me and assisting me with this project.
Visit his: 
* [Github](https://github.com/bryannguyen9/)
* [Portfolio](https://bryannguyen9.github.io/Bryan-Nguyen-Portfolio/)
* [LinkedIn](https://linkedin.com/in/bryannguyen9)


## License

MIT License

Copyright (c) [2023] [David Chung]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


