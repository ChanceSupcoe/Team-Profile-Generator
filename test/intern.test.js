const Intern = require("../lib/internClass");

describe('Intern', () => {
    it("Should create intern with school of Georgia Southern", () => {
        const intern = new Intern("Tim Thomas", "1234", "timtom@example.com", "Georgia Southern");
        expect(intern.internSchool).toEqual("Georgia Southern");
    });
    it("Should create intern with email of bross@example.com", () => {
        const intern = new Intern("Bob Ross", "4567", "bross@example.com", "Excelsior College");
        expect(intern.internEmail).toEqual("bross@example.com");
    })
})