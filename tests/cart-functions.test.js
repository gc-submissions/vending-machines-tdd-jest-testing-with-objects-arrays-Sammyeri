const cartFunctions = require("../src/js/cart-functions")
const calculateChange = cartFunctions[0];
const isSufficientPayment = cartFunctions[1];
const calculateTotal = cartFunctions[2];
const addItem = cartFunctions[3];
const removeItem = cartFunctions[4];

describe("calculateChange", () => {
  test("total 5, given 6", () =>{
    expect(calculateChange(5, 6)).toBe(1);
  });

  test("total 12.30, given 13.03", () => {
    expect(calculateChange(12.30, 13.03)).toBe(0.73);
  });

  test("total 10, given 152.35", () => {
    expect(calculateChange(10, 152.35)).toBe(142.35);
  });
});

describe("isSufficientPayment", () => {
  test("total 5 given 6 enough? ", () => {
    expect(isSufficientPayment(5, 6)).toBe(true);
  });

  test("total 10 given 7 enough?", () => {
    expect(isSufficientPayment(10, 7)).toBe(false);
  });

  test("total 3 given 3 enough?", () => {
    expect(isSufficientPayment(3, 3)).toBe(true);
  });

  test("total 7.29 given 7.28 enough?", () =>{
    expect(isSufficientPayment(7.29, 7.28)).toBe(false);
  });
});

describe("calculateTotal", () => {
  test("one item, donut 4.99", () => {
    expect(calculateTotal([{name: "donut", price: 4.99}])).toBe(4.99);
  });

  test("3 items, donut 3.50, pizza 12.99, chips 0.03", () => {
    expect(calculateTotal([{name: "donut", price: 3.50}, {name: "pizza", price: 12.99}, {name: "chips", price: 0.03}])).toBe(16.52);
  });

  test("empty array", () =>{
    expect(calculateTotal([])).toBe(0);
  });

  test("pizza 2.50, soda 1.00, ice cream 5.00", () =>{
    expect(calculateTotal([{name: "pizza", price: 2.50}, {name: "soda", price: 1.00}, {name: "ice cream", price: 5.00}])).toBe(8.50);
  })
});

describe("addItem", () => {
  test("add beans 3.00", () => {
    expect(addItem([{}], "Beans", 3));
  });

  test("add to existing array sugar 2", () =>{
    itemArray =[{"name": "Beans", "price": 3}];
    expect(addItem(itemArray, "sugar", 2));
  });

  test("adding to array with 3 items potato 10", () =>{
    itemArray = [{"name": "Bean", "price": 3}, {"name": "Sugar", "price": 2}, {"name": "banana", "price": 1.52}];
    expect(addItem(itemArray, "potato", 10));
  });
});

describe("removeItem", () => {
  itemArray = [{"name": "Bean", "price": 3}, {"name": "Sugar", "price": 2}, {"name": "banana", "price": 1.52}]; 
  test("remove from start of array", () => {
      expect(removeItem(itemArray, 0));
    });

    test("remove last element of an array", () => {
      expect(removeItem(itemArray, 2));
    });

    test("remove item from middle of array", () => {
      expect(removeItem(itemArray, 1));
    });
    
    test("remove only element of an array", () => {
      expect(removeItem([{"name": "Bean", "price": 3}], 0));
    });
});