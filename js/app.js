// ============== DEFINING THE CHARACTER SET ================
const lower_alphabets = "abcdefghijklmnopqrstuvwxyz";
const upper_letters = lower_alphabets.toUpperCase();
const numbersSet = "1234567890";
const symbolSet = "~!@#$%^&*()*_-,";

// ============== TAKING THE INPUT VALUES ================
const passwordBox = document.getElementById("pass-box");
const totalChars = document.getElementById("total-char");
const upperInput = document.getElementById("upper-case");
const lowerInput = document.getElementById("lower-case");
const numberInput = document.getElementById("numbers");
const symbolInput = document.getElementById("symbols");
const copyBtn = document.getElementById("copy-btn");

// ============== FUNCTION FOR RETURNING A RANDOM DATASET ================

const getRandomData = (dataSet) => {
  return dataSet[Math.floor(Math.random() * dataSet.length)];
};

const truncateString = (str, num) => {
  if (str.length > num) {
    let subStr = str.substring(0, num);
    return subStr;
  } else {
    return str;
  }
};

const generatePassword = (password = "") => {
  if (upperInput.checked) {
    password += getRandomData(upper_letters);
  }
  if (lowerInput.checked) {
    password += getRandomData(lower_alphabets);
  }
  if (numberInput.checked) {
    password += getRandomData(numbersSet);
  }
  if (symbolInput.checked) {
    password += getRandomData(symbolSet);
  }
  if (password.length < totalChars.value) {
    return generatePassword(password);
  }
  passwordBox.innerText = truncateString(password, totalChars.value);
};

generatePassword();

document.getElementById("btn").addEventListener("click", () => {
  generatePassword();
});

function copyPassword() {
  const password = document.getElementById("pass-box").innerText;
  try {
    navigator.clipboard.writeText(password);
    alert("Your Password is copied to the clipboard");
  } catch (error) {
    alert("Password Cannot copied");
  }
}
