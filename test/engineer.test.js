const Engineer = require("../lib/engineerClass");

describe('Engineer', () => {
    it("Should create engineer with name of Tom Holland", () => {
        const engineer = new Engineer("Tom Holland", "7891", "tomh@example.com", "Tholland");
        expect(engineer.engineerName).toEqual("Tom Holland");
    });
    it("Should create engineer with github of GeoJungle", () => {
        const engineer = new Engineer("George Jungle", "4567", "gjungle@example.com", "GeoJungle");
        expect(engineer.engineerGithub).toEqual("GeoJungle");
    })
})