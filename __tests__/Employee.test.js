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

  describe("getId", () => {
    it("should return id ", () => {

      const result = new Employee(name, id, email);

      expect(result.getId()).toEqual(id);
    });
  });

  describe("getEmail", () => {
    it("should return email ", () => {

      const result = new Employee(name, id, email);

      expect(result.getEmail()).toEqual(email);
    });
  });

  

});
