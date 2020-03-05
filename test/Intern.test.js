const Intern = require("../classes/sub-classes/Intern");

test("Can set school via constructor", () => {
  const testValue = "UCLA";
  const e = new Intern(testValue, "Foo", 1, "test@test.com");
  expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("Foo", 1, "test@test.com", "UCLA");
  expect(e.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "UCLA";
  const e = new Intern(testValue, "Foo", 1, "test@test.com");
  expect(e.getSchool()).toBe(testValue);
});
