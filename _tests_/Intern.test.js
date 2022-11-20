const Intern = require("../lib/Intern");

test("Can create school.", () => {
    const testSchool = "School Name";
    const instance = new Intern("John Smith", 2, "johnsmith@outlook.com", testSchool);
    expect(instance.school).toBe(testSchool);
});

test("Testing role.", () => {
    const returnValue = "Intern";
    const instance = new Intern("John Smith", 2, "johnsmith@outlook.com", "School Name");
    expect(instance.getRole()).toBe(returnValue);
});