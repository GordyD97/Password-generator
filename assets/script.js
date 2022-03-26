// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
console.log("hello!");
//code goes here for what the user needs to see
//user prompts
alert (" would you like to use  special characters?");
alert ("would you like to use upper case?");
alert ("would you like to use numbers?");

//characters (lower,upper,special)

//promted for length of password 8-128
// input validated one selected 
// Generate password with validated criteria
//dispaly password

//create action for criteria 
  //criteria for special characters
  //critera for upper case 
  //criteria for lower case
  //criteria for numbers
  //criteria for selecting length for 8-128 characters 






return "Generated Password Will go Here";
}
// Write password to the #password input
function writePassword() { 
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  //  create generate password fucntion

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

