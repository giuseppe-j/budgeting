import { getDate, isCurrentYear } from "./date";

describe('date.ts', () => {
    test("isCurrentYear of today", () => {
        return expect(isCurrentYear(new Date())).toBe(true);
    });
    test("isCurrentYear of a past date", () => {
        return expect(isCurrentYear(new Date(2021, 11, 17) )).toBe(false);
    });
    test("isCurrentYear of last day of past year ???", () => {
      return expect(isCurrentYear(new Date(2021, 12, 31) )).toBe(true);
    });
  });