// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var password = "password";
  var passLength = 0;
  var useUpper = true;
  var useLower = true;
  var useSpecial = true;
  var useNumber = true;
  var lowerChars = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  var upperChars = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  var numChars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var specChars = ["!", "#", "$", "%", "&", "*", "'"];
  var choices = [];
  var randomCharacters = [];

  // TODO: add code to generate the password here

  passLength = prompt(
    "how many characters would you like your password to be? Can be 8-128 chars"
  );
  useUpper = confirm(
    "Would you like your password to contain uppercase letters?"
  );
  useLower = confirm(
    "Would you like your password to contain lowercase letters?"
  );
  useSpecial = confirm(
    "Would you like your password to contain special characters?"
  );
  useNumber = confirm("Would you like your password to contain numbers?");

  if (useUpper === true) {
    choices = choices.concat(upperChars);
  }

  if (useLower === true) {
    choices= choices.concat(lowerChars);
  }

  if (useNumber === true) {
    choices = choices.concat(numChars);
  }

  if (useSpecial === true) {
    choices = choices.concat(specChars);
  }

  for (var i=0; i < passLength; i++) {
  var randomChar = choices[Math.floor(Math.random() * choices.length)];
  randomCharacters.splice(password.length, 0, randomChar);
  password = randomCharacters.join('');
  }
  console.log(randomCharacters);

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
