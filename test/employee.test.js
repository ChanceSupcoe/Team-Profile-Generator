const Employee = require("../lib/employeeClass");

describe('Employee', () => {
    it("Should create employee with neme of Julie Kramer", () => {
        const employee = new Employee("Julie Kramer", "1234", "jk@example.com");
        expect(employee.name).toEqual("Julie Kramer");
    });
    it("Should create employee with id 4862", () => {
        const employee = new Employee("Amy White", "4862", "awhite@example.com");
        expect(employee.id).toEqual("4862");
    });
    it("Should create employee with email sample@example.com", () => {
        const employee = new Employee("Jeff Winger", "4567", "sample@example.com");
        expect(employee.email).toEqual("sample@example.com");
    })
})

