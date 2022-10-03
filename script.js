// Assignment Code
var generateBtn = document.querySelector("#generate");
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var special = [ " ", "!","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[", "]", "^","_","`","{", "|","}","~"];
var number = [ "1","2","3","4","5","6","7","8","9","0"];
var random = []



// Write password to the #password input
function writePassword() {
  var passwordLength = window.prompt("Choose a password length between 8-128 characters.")
  if (passwordLength >= 8 || passwordLength <= 128){
    
  }
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
function generatePassword(){
  for (var i = 0; i <= passwordLength; i++) {
    var passwordText = Math.floor(Math.random() * random.length);
  }
  return passwordText;
  
  }
  generatePassword();

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
