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
  passwordLength = prompt(
    "How many characters do you want your password to have? Please enter a number between 8 and 128 and only use the number keys."
  );
  if (confirm("Do you want your passwrod to include NUMBERS?")) {
    confirmedCharArr = confirmedCharArr.concat(numbersArr);
  }
  if (confirm("Do you want your passwrod to include UPPER CASE LETTERS?")) {
    confirmedCharArr = confirmedCharArr.concat(upperCaseArr);
  }
  if (confirm("Do you want your passwrod to include LOWER CASE LETTERS?")) {
    confirmedCharArr = confirmedCharArr.concat(lowerCaseArr);
  }
  if (confirm("Do you want your passwrod to include SPECIAL CHARACTERS?")) {
    confirmedCharArr = confirmedCharArr.concat(specialCharArr);
  } else {
    if (
      confirm(
        "You need to chose at least one type of character. Please try again."
      )
    ) {
      getOrder();
    }
  }
  return [passwordLength, confirmedCharArr];
}

function generatePassword() {
  let orders = getOrder();
  let passLength = orders[0];
  let confirmedCharArray = orders[1];

  let password = "";

  for (let i = 0; i < passLength; i++) {
    let randomNumber = Math.floor(
      Math.random() * confirmedCharArray.length - 1
    );
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
