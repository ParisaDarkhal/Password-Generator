// generateBtn: targets the button Generate-Password
let generateBtn = document.querySelector("#generate");
let passwordLength;

let numbersArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let lowerCaseArr = [
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
let upperCaseArr = lowerCaseArr.map(function (x) {
  return x.toUpperCase();
});

let specialCharArr = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "+",
  "=",
  "[",
  "]",
  "?",
  "{",
  "}",
  "|",
  "/",
  "<",
  ">",
];

function getOrder() {
  let confirmedCharArr = [];
  let hasNumber = false;
  let hasLowerCase = false;
  let hasUpperCase = false;
  let hasSpecial = false;
  passwordLength = prompt(
    "How many characters do you want your password to have? Please enter a number between 8 and 128 and only use the number keys."
  );
  if (passwordLength === null) {
    return;
  }
  hasNumber = confirm("Do you want your passwrod to include NUMBERS?");
  hasLowerCase = confirm(
    "Do you want your passwrod to include LOWER CASE LETTERS?"
  );
  hasUpperCase = confirm(
    "Do you want your passwrod to include UPPER CASE LETTERS?"
  );
  hasSpecial = confirm(
    "Do you want your passwrod to include SPECIAL CHARACTERS?"
  );

  if (hasNumber) {
    confirmedCharArr = confirmedCharArr.concat(numbersArr);
  }
  if (hasLowerCase) {
    confirmedCharArr = confirmedCharArr.concat(lowerCaseArr);
  }
  if (hasUpperCase) {
    confirmedCharArr = confirmedCharArr.concat(upperCaseArr);
  }
  if (hasSpecial) {
    confirmedCharArr = confirmedCharArr.concat(specialCharArr);
  }
  if (confirmedCharArr.length === 0) {
    if (
      confirm(
        "You need to chose at least one type of character. Please try again."
      )
    ) {
      getOrder();
    }
    return;
  }

  return [passwordLength, confirmedCharArr];
}

function generatePassword() {
  let orders = getOrder();
  let passLength = orders[0];
  let confirmedCharArray = orders[1];

  let password = "";
  console.log(confirmedCharArray);

  for (let i = 0; i < passLength; i++) {
    let randomNumber = Math.floor(Math.random() * confirmedCharArray.length);
    password += confirmedCharArray[randomNumber];
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
