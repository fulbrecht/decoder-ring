// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  
  function shiftChar(char, shift){
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const index = alphabet.indexOf(char.toLowerCase());
    if (index < 0) {
      return char;
    } else if (index + shift > 25) {
      return alphabet[index + shift - 26];
    } else if (index + shift < 0) {
      return alphabet[index + shift + 26];
    } else {
      return alphabet[index + shift];
    }
  };

  function caesar(input, shift, encode = true) {
    // your solution code here
    if(!shift || shift > 25 || shift < -25){
      return false;
    }

    let newShift = shift;
    if (!encode){
      newShift = shift * -1;
    } 

    let result = [];
    for(const ch in input){
      
      result.push(shiftChar(input[ch], newShift));
      // console.log(`ch: ${input[ch]}, shifted: ${shiftChar(input[ch], newShift)}, result: ${result}`);
    } 

    return result.join('');
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
