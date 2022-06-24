// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function decodePair(col, row){
    const grid = [
      ["a","b","c","d","e"],
      ["f","g","h","(i/j)","k"],
      ["l","m","n","o","p"],
      ["q","r","s","t","u"],
      ["v","w","x","y","z"]
    ]

    return grid[row-1][col-1];
  }

  function encodeChar(ch){
    if(ch === " "){
      return " ";
    };

    if(ch === "i" || ch === "j"){
      return "42"
    }

    const grid = [
      ["a","b","c","d","e"],
      ["f","g","h","(i/j)","k"],
      ["l","m","n","o","p"],
      ["q","r","s","t","u"],
      ["v","w","x","y","z"]
    ]
    let coord = [];

    for(const row in grid){
      if( grid[row].includes(ch)){
        coord.push(grid[row].indexOf(ch) + 1);
        coord.push(parseInt(row) + 1);
        break;
        //console.log(`row: ${row}, col: ${grid[row].indexOf(ch)}`);
      }
    }
    return coord.join('');

  }

  function getPairs(input){
    let result = [];
    let pair = "";
    for(let i = 0; i < input.length; i++){
      if(input[i] === " "){
        result.push(" ");
      }
      else if(pair.length === 0){
        pair += input[i];
      }
      else if(pair.length === 1){
        pair += input[i];
        result.push(pair);
        pair = "";
      }
    }

    return result;
  }

  function polybius(input, encode = true) {
    // your solution code here
    let result = [];
    
    //encoding
    if(encode){

      for(const ch in input){
        result.push(encodeChar(input[ch].toLowerCase()));
        // console.log(`ch: ${input[ch]}, result: ${result}`)
      };
    }
    //decoding
    else {
      //return false if odd
      if(input.replace(" ", "").length % 2){
        return false;
      }
      const pairedCode = getPairs(input);
      for(const pair in pairedCode){
        if(pairedCode[pair] === " "){
          result.push(" ");
        }
        else{
          const decoded = decodePair(pairedCode[pair][0], pairedCode[pair][1]);
          result.push(decoded);
        }
      };
    };


    return result.join('')
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
