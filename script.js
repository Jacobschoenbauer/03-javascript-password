// Assignment Code
var generateBtn = document.querySelector("#generate");
var outputBox = document.querySelector("#password");

// Add event listener to handle button click
generateBtn.addEventListener("click", function (event) {
  const userPrompt = promptUser();
 //sets to the function promptUser its secure
  outputBox.innerText = generatePassword(userPrompt);
});

// Write password to the #password input
function promptUser(event) {
  // added a while to set a loop if passLen isnt't met
  var passLen = 0;
  while (passLen < 8 || passLen > 128 || isNaN(passPrompt)) {
    var passPrompt = window.prompt("How long should the password be ?");
    passLen = parseInt(passPrompt);
   //isNaN for if the length of password is canceled
    if (passLen < 8 || passLen > 128 || isNaN(passPrompt)) {
      window.alert("Must be between 8 to 128 charecters");
    }
  }

  // set extra prompt for extra questions
  const doNumbers = window.confirm("Would you like numbers?");
  const doSymbols = window.confirm("Do you want symbols?");
  const doLow = window.confirm("Would you like lowercase letters?");
  const doUpper = window.confirm("Would you like uppercase letters?");
  return { doNumbers, doSymbols, doLow, doUpper, passLen };
}

function generatePassword(userPrompt) {

  const charPool = [];
  //sets all varibale from the previous results of the function
  const { doNumbers, doSymbols, doLow, doUpper, passLen } = userPrompt;
  const number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  //house the finished text
  const outputText = [];
  const symbols = [
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
  const lowerLetters = [
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
  const upperLetters = [
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

  function addToArray(arry, newDataArray) {
    newDataArray.forEach((item) => {
      arry.push(item);
    });
  }

  //what generates the code if statemnets saying if true to add to charPool varible 
  if (doNumbers) addToArray(charPool, number);
  if (doLow) addToArray(charPool, lowerLetters);
  if (doUpper) addToArray(charPool, upperLetters);
  if (doSymbols) addToArray(charPool, symbols);
  if (charPool.length === 0){
    window.alert("Must Choose a character type");
    return "";
  }
  //  randomizes all the all outputs
  for (let index = 0; index < passLen; index++) {
    let randomChar = charPool[Math.floor(Math.random() * charPool.length)];
    outputText.push(randomChar);
  }
  // without this return it would be undefined
  return outputText.join("");
}
