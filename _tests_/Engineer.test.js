const Engineer = require("../lib/Engineer");

test("Can create a github.", () => {
    const testGithub = "JohnSmith";
    const instance = new Engineer("John Smith", 2, "johnsmith@outlook.com", testGithub);
    expect(instance.github).toBe(testGithub);
});

test("Testing role.", () => {
    const returnValue = "Engineer";
    const instance = new Engineer("John Smith", 2, "johnsmith@outlook.com", "JohnSmith");
    expect(instance.getRole()).toBe(returnValue);
});