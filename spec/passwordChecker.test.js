import { Main } from "../src/passwordChecker.js";
describe("A suite of tests for the function minimum_characters", function()  {
    it("should be true", () => {
        let string = "jeTestPCq";
        let main= new Main();
        expect(main.checkMinCharacters(string)).toBe(true);
    });
    it("should be false", () => {
        let string = "jeTest";
        let main= new Main();
        expect(main.checkMinCharacters(string)).toBe(false);
    });
});
describe("A suite of tests for the function checkSpecialCharacter", function()  {
    it("should be true", () => {
        let string = "jeTestPcq!";
        let main= new Main();
        expect(main.checkSpecialCharacter(string)).toBe(true);
    });
    it("should be false", () => {
        let string = "jeTestazzr";
        let main= new Main();
        expect(main.checkSpecialCharacter(string)).toBe(false);
    });
});

describe("A suite of tests for the function checkNumber", function()  {
    it("should be true", () => {
        let string = "jeTestPcq1";
        let main= new Main();
        expect(main.checkNumber(string)).toBe(true);
    });
    it("should be false", () => {
        let string = "jeTestPcq";
        let main= new Main();
        expect(main.checkNumber(string)).toBe(false);
    });
});
describe("A suite of tests for the function checkNotIncludePassword", function()  {
    it("should be true", () => {
        let string = "jeTestPcq1";
        let main= new Main();
        expect(main.checkNotIncludePassword(string)).toBe(true);
    });
    it("should be false", () => {
        let string = "jeTestPcqIPL";
        let main= new Main();
        expect(main.checkNotIncludePassword(string)).toBe(false);
    });
});