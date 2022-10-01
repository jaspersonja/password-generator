// Assignment Code
var generateBtn = document.querySelector("#generate");
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var special = [ " ", "!","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[", "]", "^","_","`","{", "|","}","~"];
var number = [ "1","2","3","4","5","6","7","8","9","0"];
var random = []



// Write password to the #password input
function writePassword() {
  if (confirm("Would you like to use uppercase letters?") == true) {
    random.push(uppercase)
  } else {
    text = "No problem.";
  }
  if (confirm("Would you like to use lowercase letters?") == true) {
    random.push(lowercase)
  } else {
    text = "No problem.";
  }
  if (confirm("Would you like to use special characters?") == true) {
    random.push(special)
  } else {
    text = "No problem.";
  }
  if (confirm("Would you like to use numbers?") == true) {
    random.push(number)
  } else {
    text = "No problem.";
  };
  console.log(random);
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
