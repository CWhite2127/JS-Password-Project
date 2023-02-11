// global variables accouting for the generation button, arrays to populate passwords depending on the parameters determined by the user, sets a variable for minimum password length, and an empty array for concatination with populated arrays
var numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var symbol = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", "@"];
var passwordLength = 8;
var whichArray =[];
var generateBtn = document.querySelector("#generate");



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var validPrompts = chainPrompts();
  var passwordText = document.querySelector("#password");
  

  if (validPrompts) {
    var password = generatePassword();
    passwordText.value = password;
  }
}




// this fuction generates random characters for the "generatepassword()" function using the parameters set from "chainPrompts()"
function generatePassword() {
  var password = "";
  
  for(var i = 0; i < passwordLength; i++) {
    var randomCharacter = Math.floor(Math.random() * whichArray.length);
    password = password + whichArray[randomCharacter];
  }
    return password;
}
  
  // provides sequential prompts by populating an empty array with one of the globally categegorized arrays contingent on the users decision
  function chainPrompts(){
    whichArray = [];
    
    passwordLength = prompt("Please provide a a desired password character amount. Enter a number between 8 and 128");
  
  
  if(passwordLength < 8 || passwordLength > 128) {
    alert("Character length must be a number between 8 and 128");
    return false;
  
  }

  if(confirm("Are numbers allowed in this password?")) {
    whichArray = whichArray.concat(numeric);
    }
    
    if(confirm("Are uppercase letters allowed in this password?")) {
      whichArray = whichArray.concat(upperCase);
    }
    
    if(confirm("Are lowercase letters allowed in this password?")) {
      whichArray = whichArray.concat(lowerCase);
    }
    
    if(confirm("Are symbols allowed in this password?")) {
      whichArray = whichArray.concat(symbol);
    }
    return true;
}
