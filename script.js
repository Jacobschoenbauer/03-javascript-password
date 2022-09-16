// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // set prompt for length
  var passPrompt = window.prompt("How long should the password be ?");
  var passLen = parseInt(passPrompt);
  //sets a must have paramiter
  if (passLen < 8 || passLen > 128) {
    window.alert("Must be between 8 to 128 charecters")

    return
  }
  var doNumbers = window.confirm("Would you like numbers?")
  var doSymbols = window.confirm("Do you want symbols")
   
  
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
