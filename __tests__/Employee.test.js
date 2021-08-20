const Employee = require("../lib/employee");

describe("employee", () => {
    const name = "Jamie"
    const id = "34"
    const email = "jamiekuras@gmail.com"
  describe("getName", () => {
    it("should return name used to create class", () => {


      const result = new Employee(name, id, email);

      expect(result.getName()).toEqual(name);
    });
  });

  describe("getID", () => {
    it("should return id ", () => {

      const result = new Employee(name, id, email);

      expect(result.getId()).toEqual(id);
    });
  });

  describe("getID", () => {
    it("should return id ", () => {

      const result = new Employee(name, id, email);

      expect(result.getId()).toEqual(id);
    });
  });

  

});
