// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // set prompt for length
  var passPrompt = window.prompt("How long should the password be ?");
  var passLen = parseInt(passPrompt);
  //sets a must have paramiter
  if (passLen < 8 || passLen > 128) {
    window.alert("Must be between 8 to 128 charecters");

    return;
  }
  // set extra prompt for other peramitors
  var doNumbers = window.confirm("Would you like numbers?");
  var doSymbols = window.confirm("Do you want symbols?");
  var doLow = window.confirm("Would you like lowercase letters?");
  var doUpper = window.confirm("Would you like uppercase letters?");

  var nummBer = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var syyBols = [
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "?",
    "*",
    "<",
    ">",
    "+",
    "_",
    "-",
  ];
  var lowLetter = [
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
  var upperLetters = [
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
  //what puts the password out
  var passwordText = [];

  //will place a list of items from the array
  for (var i = 0; i < nummBer; i++) {
    nummBer[i] = syyBols[i] = upperLetters[i] = lowLetter[i] = nummBer + 1;
  }

  //what generates the code
  if (doNumbers === true) {
    passwordText.push(nummBer);
  }
  if (doLow === true) {
    passwordText.push(lowLetter);
  }
  if (doUpper === true) {
    passwordText.push(upperLetters);
  }
  if (doSymbols === true) {
    passwordText.push(syyBols);
  }

  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password();
  return;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
