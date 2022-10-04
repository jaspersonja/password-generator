// Assignment Code
var generateBtn = document.querySelector("#generate");
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var special = [ " ", "!","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[", "]", "^","_","`","{", "|","}","~"];
var number = [ "1","2","3","4","5","6","7","8","9","0"];
var random = []
var temporaryPass = []

// Write password to the #password input
function writePassword() {
  var passwordLength = window.prompt("Choose a password length between 8-128 characters.")
  if (passwordLength >= 8 || passwordLength <= 128){
  } 
// WINDOW PROMPTS - asking user to confirm their selections, which if true,
// will add the variable into a new array using the .concat() method.
  if (confirm("Would you like to use uppercase letters?") == true) {
    random = random.concat(uppercase);
  } else {
    text = "No problem.";
  }
  if (confirm("Would you like to use lowercase letters?") == true) {
    random = random.concat(lowercase);
  } else {
    text = "No problem.";
  }
  if (confirm("Would you like to use special characters?") == true) {
    random = random.concat(special);
  } else {
    text = "No problem.";
  }
  if (confirm("Would you like to use numbers?") == true) {
    random = random.concat(number);
  } else {
    text = "No problem.";
  };
  console.log(random);
  // WHILE LOOP - until the length meets the user selection, code will continue
  // to push into temporary array with the randomly selected criteria.
  while (temporaryPass.length != passwordLength) {
    temporaryPass.push(generatePassword(random));
  }
  console.log(temporaryPass)
  // ADD TEMPORARY PASSWORD
  var passwordText = document.querySelector("#password");
  passwordText.value = temporaryPass.join(''); // used .join() to eliminate commas between
}
function generatePassword(array){
  return array[Math.floor(Math.random() * array.length)];
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);