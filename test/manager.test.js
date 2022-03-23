const Manager = require("../lib/managerClass");

describe('Manager', () => {
    it("Should create manager with id of 1234", () => {
        const manager = new Manager("John Somebody", "1234", "johns@example.com", "1234567891");
        expect(manager.managerID).toEqual("1234");
    });
    it("Should create manager with name Jeff Winger", () => {
        const manager = new Manager("Jeff Winger", "4567", "johns@example.com", "1234567891");
        expect(manager.managerName).toEqual("Jeff Winger");
    })
})