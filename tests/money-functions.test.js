 const moneyfunctions = require("../src/js/money-functions")

const formatCurrency = moneyfunctions[0];
const getCoins = moneyfunctions[1];

describe("formatCurrency", () => {
  test("given 0 returns $0.00", () => {
    expect(formatCurrency(0)).toBe("$0.00");
  });

  test("given 1", () => {
    expect(formatCurrency(1.00)).toBe("$1.00");
  });

  test("given 1.50", () => {
    expect(formatCurrency(1.50)).toBe("$1.50");
  });

  test("given 0.01", () =>{
    expect(formatCurrency(0.01)).toBe("$0.01");
  });

  test("given 527.6789", () => {
    expect(formatCurrency(527.6789)).toBe("$527.68");
  });

  test("given -1", () =>{
    expect(formatCurrency(-1)).toBe("-$1.00");
  });

  test("given -45.6859", () =>{
    expect(formatCurrency(-45.6859)).toBe("-$45.69");
  });

  test("given -8952623415.1", () => {
    expect(formatCurrency(-8952623415.1)).toBe("-$8952623415.10");
  });
});

describe("getCoins", () => {
  test("given 32 cents", () => {
    expect(getCoins(32)).toEqual({"quarters": 1, "dimes": 0, "nickles": 1, "pennies": 2});
  });
  
  test("given 10 cents", () => {
    expect(getCoins(10)).toEqual({"quarters": 0, "dimes": 1, "nickles": 0, "pennies": 0});
  });

  test("given 27 cents", () => {
    expect(getCoins(27)).toEqual({"quarters": 1, "dimes": 0, "nickles": 0, "pennies": 2});
  });

  test("given 68 cents", () =>{
    expect(getCoins(68)).toEqual({"quarters": 2, "dimes": 1, "nickles": 1, "pennies": 3});
  });
});