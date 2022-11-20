const Intern = require("../lib/Intern");

test("Can create school.", () => {
    const testSchool = "School Name";
    const employeeInstance = new Intern("John Smith", 2, "johnsmith@outlook.com", testSchool);
    expect(employeeInstance.school).toBe(testSchool);
});

test("Testing role.", () => {
    const returnValue = "Intern";
    const employeeInstance = new Intern("John Smith", 2, "johnsmith@outlook.com", "School Name");
    expect(employeeInstance.getRole()).toBe(returnValue);
});