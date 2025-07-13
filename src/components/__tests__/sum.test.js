import { sum } from "../sum";

test("sum of Two Numbers", () => {
  const result = sum(141, 2);
  //Assertion
  expect(result).toBe(143);
});
