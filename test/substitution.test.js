// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution() tests written by Daniel Fulbrecht", () => {
    it("should return false if alphabet isnt 26 char long", () => {
        const alphabet = "short";
        expect(substitution("test",alphabet)).to.be.false;
    });
    it("should correclty translate phrase based on alphabet", () => {
        const alpha = "plmoknijbuhvygctfxrdzeswaq";
        const phrase = "message";
        const actual = substitution(phrase,alpha);
        const expected = "ykrrpik";
        expect(actual).to.equal(expected);
    });
    it("should return false if alphabet includes duplicate chars", () => {
        const alpha = "plmoknijbuhvygctfxrdzeswqq"
        const phrase = "message";
        const actual = substitution(phrase,alpha);
        expect(actual).to.be.false
    });
    it("should maintain spaces when encoding and decoding", () => {
        const alpha = "xoyqmcgrukswaflnthdjpzibev";
        const phrase = "you are an excellent spy";
        const actual = substitution(phrase,alpha);
        const expected = "elp xhm xf mbymwwmfj dne";
        expect(actual).to.equal(expected);
    });
    it("should ignore capital letters", () => {
        const alpha = "xoyqmcgrukswaflnthdjpzibev";
        const phrase = "You are An exceLLent spy";
        const actual = substitution(phrase,alpha);
        const expected = "elp xhm xf mbymwwmfj dne";
        expect(actual).to.equal(expected);
    });

})
