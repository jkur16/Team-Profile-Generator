const Manager = require("../lib/manager");

describe("manager", () => {
  const name = "Jamie"
  const id = "34"
  const email = "jamiekuras@gmail.com"
  const officeNumber = "47"
  describe("getOfficeNumber", () => {
    it("should return office number of the manager", () => {


      const result = new Manager(name, id, email, officeNumber);

      expect(result.getOfficeNumber()).toEqual(officeNumber);
    });
  });
});