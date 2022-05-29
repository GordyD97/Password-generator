var generateBtn = document.querySelector("#generate");
var randomPassword = [];
generateBtn.addEventListener("click", writePassword);

var uppercaselist = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowerCaselist = 'abcdefghijklmnopqrstuvwxyz';
var numbers = '0123456789';
var symbols = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password

}

function generatePassword() {

  const all = uppercaselist + lowerCaselist + numbers + symbols + length;
  var possibleChoices;
  var hasuppercaseList = confirm("Would you like upper case letters?")
  console.log(hasuppercaseList);

  if (hasuppercaseList) {
    possibleChoices += uppercaselist

  }

  var haslowerCaselist = confirm("Would you like lower case letters?")
  console.log(haslowerCaselist);

  if (haslowerCaselist) {
    possibleChoices += lowerCaselist

  }

  var hasnumbers = confirm("would you like numbers?")
  console.log(hasnumbers);

  if (hasnumbers) {
    possibleChoices += numbers

  }

  var hassymbols = confirm("would you like symbols?")
  console.log(hassymbols);

  if (hassymbols) {
    possibleChoices += symbols

  }
 
  var length = prompt('please select a number between 8 and 128');
  if (length > 8 || length > 128) {
    alert(`your password contains ${length} characters`);
  }


  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * possibleChoices.length)
    password += possibleChoices[randomIndex];
  }
  
  if (isNaN(length)) {
    return alert("you must insert a length between 8- 128 click the button to try again")
  }

  console.log(password)
  return password;
}