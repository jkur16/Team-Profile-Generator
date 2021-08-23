const Engineer = require("../lib/engineer");

describe("engineer", () => {
  const name = "Jamie"
  const id = "34"
  const email = "jamiekuras@gmail.com"
  const github = "jkur16"
  describe("getGithub", () => {
    it("should return github username of the engineer", () => {


      const result = new Engineer(name, id, email, github);

      expect(result.getGithub()).toEqual(github);
    });
  });
});