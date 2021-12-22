// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}
let generatePassword=(()=>{

})
let lengthChoice, 
lowerChoice,
upperChoice,
numsChoice,


generatePassword.addEventlistener("click", writePassword);
