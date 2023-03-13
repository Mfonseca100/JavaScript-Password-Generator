// generate button element from html 
var generateBtn = document.querySelector("#generate");

// defining the function to write the generated password
function writePassword() {
//call the function to generate a password 
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
//function that generates the password based on the user's desired criteria
function generatePassword(){

  let length = prompt("Enter the desired length of the password atleast 8 characters and no more than 128 characters.");
  let lowercase = confirm("Include lowercase characters?");
  let uppercase = confirm("Include uppercase chatacters?");
  let numeric = confirm("Include numeric characters");
  let special = confirm("Include special characters?");
//confirms the length and characters have the correct criteria needed to generate
  if (isNaN(length) || length < 8 || length > 128){
    alert("Invalid password length. Please try again.");
    return generatePassword();
}
  if (!lowercase && !uppercase && !numeric && !special){
    alert("At least one special and numeric character type must be selected. Please try again.")
    return generatePassword();
  }

  //defining character sets for each type 
  let lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  let uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let numericChars = "0123456789";
  let specialChars = "~`!@#$%^&*()_-+={[}]|:;'<,>.?/";

  //an array called charSets
  let charSets = [];
  //checks if the user has selected lowercase,uppercase,numeric and special characters
  if (lowercase) {
    charSets.push(lowercaseChars);
  }
  if (uppercase) {
    charSets.push(uppercaseChars);
  }
  if (numeric) {
    charSets.push(numericChars);
  }
  if (special) {
     charSets.push(specialChars);
  }
  //string variable called password, which we will use to store the generated password.
  let password = "";
  //loop will execute length number of times using length as the value 
  for (let i = 0; i < length; i++) {
    let charSetIndex = Math.floor(Math.random() * charSets.length);
    let randomCharIndex = Math.floor(Math.random() * charSets[charSetIndex].length);
    password += charSets[charSetIndex][randomCharIndex];
  }
  //returns the generated password as a string value 
  return password;
}
  generateBtn.addEventListener("click", writePassword);