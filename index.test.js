const Goods = require('./Goods');
const getResult = require('./getResult');

test("Unit test for input 1", () => {
  const g1 = new Goods('2 book at 12.49');
  const g2 = new Goods('1 music CD at 14.99');
  const g3 = new Goods('1 chocolate bar at 0.85');

  const g1_output = g1.output;
  expect(g1_output).toBe("2 book: 24.98");
  const g2_output = g2.output;
  expect(g2_output).toBe("1 music CD: 16.49");
  const g3_output = g3.output;
  expect(g3_output).toBe("1 chocolate bar: 0.85");

  const [tax, total] = getResult([g1, g2, g3]);
  expect(tax).toBe("Sales Taxes: 1.50");
  expect(total).toBe("Total: 42.32");
});

test("Unit test for input 2", () => {
  const g1 = new Goods('1 imported box of chocolates at 10.00');
  const g2 = new Goods('1 imported bottle of perfume at 47.50');

  const g1_output = g1.output;
  expect(g1_output).toBe("1 imported box of chocolates: 10.50");
  const g2_output = g2.output;
  expect(g2_output).toBe("1 imported bottle of perfume: 54.65");

  const [tax, total] = getResult([g1, g2]);
  expect(tax).toBe("Sales Taxes: 7.65");
  expect(total).toBe("Total: 65.15");
});

test("Unit test for input 3", () => {
  const g1 = new Goods('1 imported bottle of perfume at 27.99');
  const g2 = new Goods('1 bottle of perfume at 18.99');
  const g3 = new Goods('1 packet of headache pills at 9.75');
  const g4 = new Goods('3 imported box of chocolates at 11.25');

  const g1_output = g1.output;
  expect(g1_output).toBe("1 imported bottle of perfume: 32.19");
  const g2_output = g2.output;
  expect(g2_output).toBe("1 bottle of perfume: 20.89");
  const g3_output = g3.output;
  expect(g3_output).toBe("1 packet of headache pills: 9.75");
  const g4_output = g4.output;
  expect(g4_output).toBe("3 imported box of chocolates: 35.55");

  const [tax, total] = getResult([g1, g2, g3, g4]);
  expect(tax).toBe("Sales Taxes: 7.90");
  expect(total).toBe("Total: 98.38");
});
