// Write your tests here!
// const { expect } = require("chai");
// const { caesar } = require("../src/caesar");

// describe("caesar() tests written by Daniel Fulbrecht", () => {
//     it("should shift the input by a positive shift number", () => {
//         const input = "thinkful"
//         const actual = caesar(input, 3);
//         const expected = "wklqnixo"
//         expect(actual).to.equal(expected);
//     });

//     it("should shift the input by a negative shift number", () => {
//         const input = "thinkful"
//         const actual = caesar(input, -3);
//         const expected = "qefkhcri"
//         expect(actual).to.equal(expected);
//     });

//     it("should decode the input when encode set to false", () => {
//         const input = "wklqnixo"
//         const actual = caesar(input, 3, false);
//         const expected = "thinkful"
//         expect(actual).to.equal(expected);
//     });
    
//     it("should maintain spaces and nonalphabetic symbols", () => {
//         const input = "This is a secret message!"
//         const actual = caesar(input, 8);
//         const expected = "bpqa qa i amkzmb umaaiom!"
//         expect(actual).to.equal(expected);
//     });

//     it("should ignore capital letters", () => {
//         const input = "BPQA qa I amkzmb umaaiom!"
//         const actual = caesar(input, 8, false);
//         const expected = "this is a secret message!"
//         expect(actual).to.equal(expected);
//     });

//     it("should return false if shift is 0, >25 , <-25", () => {
//         const input = "thinkful"

//         expect(caesar(input)).to.be.false;
//         expect(caesar(input, 99)).to.be.false;
//         expect(caesar(input, -26)).to.be.false;
//     });
// });