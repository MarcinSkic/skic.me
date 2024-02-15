import { expect, test } from "vitest";
import { arrayIntoMatrixOrderedByColumn } from "./math";

test("list is transformed into matrix", () => {
    expect(
        arrayIntoMatrixOrderedByColumn([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)
    ).toStrictEqual([
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
    ]);
});
