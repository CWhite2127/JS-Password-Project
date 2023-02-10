// Assignment Code
var generateBtn = document.querySelector("#generate");
var numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var symbol = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", "@"];
var passwordLength = 8;
var whichArray =[]

function chainPrompts(){
    passwordLength = prompt("Please provide a a desired password character amount. Enter a number between 8 and 128");


    if(passwordLength < 8 || passwordLength > 128) {
      alert("Character length must be a number between 8 and 128")
      return false;
      
    }
    if(confirm("Are numbers allowed in this password?")) {
      whichArray = whichArray.concat(numeric);
    }
    if(confirm("Are uppercase letters allowed in this password?")) {
      whichArray = whichArray.concat(upperCase);
    }
    if(confirm("Are lowercase letters allowed in the password?")) {
        whichArray = whichArray.concat(lowerCase);
    }
    if(confirm("Are symbols allowed in the password?")) {
      whichArray = whichArray.concat(symbol);
    }
  
  }





function generatePassword() {













}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
