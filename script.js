// Assignment Code
var generateBtn = document.querySelector('#generate');



function generatePassword() {
  var password = 'password';
  var passLength = 0;
  var useUpper = true;
  var useLower = true;
  var useSpecial = true;
  var useNumber = true;
  var lowerChars = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upperChars = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',  'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ]
  var numChars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var specChars = ["!", "#", "$", "%", "&", "*", "'"];
  var choices = [];
  
  // TODO: add code to generate the password here
  
  passLength = prompt('how many characters would you like your password to be? Can be 8-128 chars');
  useUpper = confirm('Would you like your password to contain uppercase letters?');
  useLower = confirm('Would you like your password to contain lowercase letters?');
  useSpecial = confirm('Would you like your password to contain special characters?');
  useNumber = confirm('Would you like your password to contain numbers?');


var confirmation = [useLower, useUpper, useSpecial, useNumber]

for (let i = 0; i < confirmation.length; i++)
  if (confirmation[i] === true){
    choices = [...confirmation[i]];
  }else{
    console.log("no");
  };

  console.log(choices);

  return password;
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

//comment
