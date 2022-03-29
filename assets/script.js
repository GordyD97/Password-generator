// Assignment Code

var generateBtn = document.querySelector("#generate");

// function generatePassword() {

// //code goes here for what the user needs to see
// //user prompts
// alert (" would you like to use  special characters?");
// alert ("would you like to use upper case?");
// alert ("would you like to use numbers?");

// //password data
// var password = generatePassword();{      
//     const symbol = ["+", "-", "&&", "||", "!", "(", ")", "{", "}", "[", "]", "^", "~", "*", "?", ":",];
//     const numbers = ["0123456789"];
//     const lowerCaselist = ["abcdefhgijklmnopqrstuvwxyz"];
//     const uppercaselist = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
//     const passwordlist = [];





// // let characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+?><';
// // let passwordLength = 8;
// // let passwordValue = '';

// //characters (lower,upper,special)

// // var password = generatePassword();{
//   //     var symbolSet = ["!", "@", "#", "$", "%". "^", "&", "*", ""];
//   //     var Numarray = ["0123456789"];
//   //     var lowerCasearray = ["abcdefhgijklmnopqrstuvwxyz"];
//   //     var uppercasearray = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
//   //     var passwordarray = [];





//   //promted for length of password 8-128
// // input validated one selected 
// // Generate password with validated criteria
// //dispaly password

// //create action for criteria 
//   //criteria for special characters
//   //critera for upper case 
//   //criteria for lower case
//   //criteria for numbers
//   //criteria for selecting length for 8-128 characters 






// return "Generated Password Will go Here";
// }
// Write password to the #password input
function writePassword() { 
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password
  //  create generate password fucntion
  // var numbers = [];
  // for (var i = 0; i <numbers.length; i++){
  // }
}

  function generatePassword() {
    const uppercaselist = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaselist = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
    const all = uppercaselist + lowerCaselist + numbers + symbols;
    var possibleChoices;
var hasuppercaseList = confirm("Would you like upper case letters?")
console.log(hasuppercaseList);

if(hasuppercaseList){
    possibleChoices += uppercaselist

  }

  var haslowerCaselist = confirm("Would you like lower case letters?")
    console.log(haslowerCaselist);
    
    if(haslowerCaselist){
        possibleChoices += lowerCaselist
    
    }

    var hasnumbers = confirm("would you like numbers?")
    console.log(hasnumbers);
    
    if(hasnumbers){ 
      possibleChoices += numbers
    
    }

    var hassymbols = confirm("would you like symbols?")
    console.log(hassymbols);
    
    if(hassymbols){
        possibleChoices += symbols
    
      }

    let password = '';
    for (let i = 0; i < 8; i++) {
      const randomIndex = Math.floor(Math.random() * possibleChoices.length)
      password += possibleChoices[randomIndex];
    }
    console.log(password)
    return password;  
  }
   generateBtn.addEventListener("click",writePassword)