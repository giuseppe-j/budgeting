import { getDate, isCurrentYear } from "./date";

describe('date.ts', () => {
    test("isCurrentYear of today", () => {
        return expect(isCurrentYear(new Date())).toBe(true);
    });
    test("isCurrentYear of a past date", () => {
        return expect(isCurrentYear(new Date(2021, 11, 17) )).toBe(false);
    });
    test("isCurrentYear of last day of past year", () => {
      return expect(isCurrentYear(new Date('2021-12-31') )).toBe(false);
    });
    test("getDate of previous month", () => {
      return expect(getDate(new Date('2021-03-31'), -1 )).toEqual(new Date('2021-02-28T01:00:00.000Z'));
    });
    test("getDate of next month", () => {
      return expect(getDate(new Date('2021-02-28'), 1 )).toEqual(new Date('2021-03-28'));
    });
  });