function isPalindrome(word) {
  // Write your algorithm here
  let reverseWord = word.split("").reverse().join("");

  if (word === reverseWord) {
      return true;
  } else {
      return false;
  }
}

if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;