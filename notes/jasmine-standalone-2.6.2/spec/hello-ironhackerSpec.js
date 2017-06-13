describe("Hello Ironhack function", function () {
  it("Greets an Ironhacker", function() {
    expect(helloIronhack()).toEqual("Hello Ironhacker!");
  });
});

describe("My calculator", function() {
  it("Returns 0 when the array is empty", function() {
    expect(sumArray([])).toEqual(0);
  });

  it("Returns the same number when the array has just one element", function() {
    expect(sumArray([2])).toEqual(2);
  });
});


describe("My calculator2", function() {
  it("Returns sum of two different numbers", function() {
    expect(sumArray2(2,3)).toEqual(5);
  });
});
