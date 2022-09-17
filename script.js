// Assignment Code
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", function (event) {
  console.log(generatePassword(promptUser()));
});

// Write password to the #password input
function promptUser(event) {
  // added a while to set a loop if passLen isnt't met
  var passLen = 0;
  while (passLen < 8 || passLen > 128) {
    var passPrompt = window.prompt("How long should the password be ?");
    passLen = parseInt(passPrompt);
    if (passLen < 8 || passLen > 128) {
      window.alert("Must be between 8 to 128 charecters");
    }
  }

  // set extra prompt for other peramitors
  const doNumbers = window.confirm("Would you like numbers?");
  const doSymbols = window.confirm("Do you want symbols?");
  const doLow = window.confirm("Would you like lowercase letters?");
  const doUpper = window.confirm("Would you like uppercase letters?");
  return { doNumbers, doSymbols, doLow, doUpper, passLen };
}

function generatePassword(userPrompt) {
  
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

  
  
  }
const charPool
  //what generates the code
  if (userPrompt.doNumbers === true) {
    charPool.push(nummBer);
  }
  if (userPrompt.doLow === true) {
    charPool.push(lowLetter);
  }
  if (userPrompt.doUpper === true) {
    charPool.push(upperLetters);
  }
  if (userPrompt.doSymbols === true) {
    charPool.push(syyBols);
  }

  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password();
  return;
}
