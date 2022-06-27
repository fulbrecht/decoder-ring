// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function isUnique(alphabet){
    let check = alphabet;
    for (const index in alphabet){
      const char = alphabet[index];
      if(alphabet.indexOf(char) !== alphabet.lastIndexOf(char)){
        return false;
      }
    }
    return true;
  };

  function substitution(input, alphabet, encode = true) {
    //check that alphabet exitst, the length of alphabet, and that no characters repeat. 
    if( !alphabet || alphabet.length !== 26 || !isUnique(alphabet)){
      return false;
    }

    //create cypher object with normal alphabet as keys and substitution alphabet as values. reverse if encode = false.
    let alpha = "abcdefghijklmnopqrstuvwxyz"
    let cypher = {}
    
    for( const index in alphabet){
      if(encode){
        cypher[alpha[index]] = alphabet[index];
      } else {
        cypher[alphabet[index]] = alpha[index];
      }
    };
    
    //for each letter in input, look up value based on key and add new letter to result
    const keys = Object.keys(cypher).join("");
    const inputLower = input.toLowerCase();
    let result = "";

    for(const index in inputLower){
      const letter = inputLower[index];
      if(keys.includes(letter)){
        result += cypher[letter];
      } else {
        result += letter;
      }
    }

    return result;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
