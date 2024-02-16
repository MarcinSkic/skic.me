import { expect, test } from "vitest";
import { arrayIntoMatrixOrderedByColumn } from "./math";

test("list  is transformed into matrix", () => {
    expect(
        arrayIntoMatrixOrderedByColumn<number>(
            [
                { item: 1, rows: 1 },
                { item: 2, rows: 1 },
                { item: 3, rows: 1 },
                { item: 6, rows: 1 },
            ],
            2
        )
    ).toStrictEqual([
        [
            { item: 1, rows: 1 },
            { item: 3, rows: 1 },
        ],
        [
            { item: 2, rows: 1 },
            { item: 6, rows: 1 },
        ],
    ]);
});
