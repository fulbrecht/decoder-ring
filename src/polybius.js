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
        //console.log(`row: ${row}, col: ${grid[row].indexOf(ch)}`);
      }
    }
    return coord.join('');

  }

  function polybius(input, encode = true) {
    // your solution code here
    let result = [];

    //encoding
    if(encode){
      for(const ch in input){
        result.push(encodeChar(input[ch]));
        // console.log(`ch: ${input[ch]}, result: ${result}`)
      };
    }
    else {
      for(const ch in input){
        result.push(decodePair(input[ch]));
      };
    };


    return result.join('')
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
