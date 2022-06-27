// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius() tests written by Daniel Fulbrecht", () => {
    it("should translate the letters i and j to 42", () => {
        expect(polybius("i")).to.equal("42");
        expect(polybius("j")).to.equal("42");
    });
    it("should decode 42 to '(i/j)'", () => {
        expect(polybius("42",false)).to.equal("(i/j)");
    });
    it("should ignore capital letters", () => {
        expect(polybius("A Message")).to.equal(polybius("a message"));
    });
    it("should maintain spaces in the message after encoding", () => {
        const input = "Hello World";
        const actual = polybius(input);
        const expected = "3251131343 2543241341"
        expect(polybius(input)).to.equal(expected);
    });
    it("should maintain spaces in the message after decoding", () => {
        const input = "3251131343 2543241341";
        const actual = polybius(input, false);
        const expected = "hello world"
        expect(polybius(input, false)).to.equal(expected);
    });
})