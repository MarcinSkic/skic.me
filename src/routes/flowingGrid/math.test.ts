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

test("transformation works with single column", () => {
    expect(
        arrayIntoMatrixOrderedByColumn<number>(
            [
                { item: 1, rows: 1 },
                { item: 2, rows: 1 },
                { item: 3, rows: 1 },
                { item: 6, rows: 1 },
            ],
            1
        )
    ).toStrictEqual([
        [
            { item: 1, rows: 1 },
            { item: 2, rows: 1 },
            { item: 3, rows: 1 },
            { item: 6, rows: 1 },
        ],
    ]);
});

test("multirow rules are respected", () => {
    expect(
        arrayIntoMatrixOrderedByColumn(
            [
                { item: 1, rows: 1 },
                { item: 2, rows: 2 },
                { item: 3, rows: 1 },
                { item: 6, rows: 1 },
            ],
            2
        )
    ).toStrictEqual([
        [
            { item: 1, rows: 1 },
            { item: 3, rows: 1 },
            { item: 6, rows: 1 },
        ],
        [{ item: 2, rows: 2 }],
    ]);
});

test("multirow doesn't break single column", () => {
    expect(
        arrayIntoMatrixOrderedByColumn<number>(
            [
                { item: 1, rows: 1 },
                { item: 2, rows: 2 },
                { item: 3, rows: 1 },
                { item: 6, rows: 1 },
            ],
            1
        )
    ).toStrictEqual([
        [
            { item: 1, rows: 1 },
            { item: 2, rows: 2 },
            { item: 3, rows: 1 },
            { item: 6, rows: 1 },
        ],
    ]);
});

test("multirow works for multiple multirows one after another", () => {
    expect(
        arrayIntoMatrixOrderedByColumn<number>(
            [
                { item: 1, rows: 1 },
                { item: 2, rows: 1 },
                { item: 3, rows: 2 },
                { item: 4, rows: 2 },
                { item: 5, rows: 1 },
                { item: 6, rows: 1 },
            ],
            3
        )
    ).toStrictEqual([
        [
            { item: 1, rows: 1 },
            { item: 4, rows: 2 },
        ],
        [
            { item: 2, rows: 1 },
            { item: 5, rows: 1 },
            { item: 6, rows: 1 },
        ],
        [{ item: 3, rows: 2 }],
    ]);
});
