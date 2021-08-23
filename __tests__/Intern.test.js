const Intern = require("../lib/intern");

describe("intern", () => {
  const name = "Jamie"
  const id = "34"
  const email = "jamiekuras@gmail.com"
  const school = "Univeristy of Michigan"
  describe("getSchool", () => {
    it("should return the name of the school the intern attended", () => {


      const result = new Intern(name, id, email, school);

      expect(result.getSchool()).toEqual(school);
    });
  });
});