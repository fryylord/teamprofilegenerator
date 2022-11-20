const Employee = require("../lib/Employee");

test("Can create an new employee.", () => {
    const instance = new Employee();
    expect(typeof(instance)).toBe("object");
})

test("Testing name.", () => {
    const name = "James";
    const instance = new Employee(name);
    expect(instance.name).toBe(name);
})

test("Testing ID.", () => {
    const id = 2;
    const instance = new Employee("John Smith", id);
    expect(instance.id).toBe(id);
})

test("Testing email.", () => {
    const email = "johnsmith@outlook.com";
    const instance = new Employee("John Smith", 2, email);
    expect(instance.email).toBe(email);
})