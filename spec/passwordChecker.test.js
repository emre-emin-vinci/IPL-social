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