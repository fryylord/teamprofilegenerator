const Manager = require("../lib/Manager");

test("Can create an office number.", () => {
    const testOfficeNumber = 2;
    const instance = new Manager("John Smith", 2, "johnsmith@outlook.com", testOfficeNumber);
    expect(instance.office).toBe(testOfficeNumber);
});

test("Testing role.", () => {
    const returnValue = "Manager";
    const instance = new Manager("John Smith", 2, "johnsmith@outlook.com", 2);
    expect(instance.getRole()).toBe(returnValue);
});