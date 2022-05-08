import { render, screen } from "@testing-library/react";
import { Somma } from "./date";

describe('date.ts', () => {
    test("Somma", () => {
        expect(Somma(2,3)).toBe(5);
    });
  
    test('false is falsy', () => {
      expect(false).toBe(false);
    });
  });