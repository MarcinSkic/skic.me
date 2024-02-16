import { expect, test } from "vitest";
import { arrayIntoMatrixOrderedByColumn } from "./math";

test("list  is transformed into matrix", () => {
    expect(
        arrayIntoMatrixOrderedByColumn<number>(
            [
                { item: 1, rows: 1 },
                { item: 2, rows: 1 },
                { item: 3, rows: 1 },
                { item: 4, rows: 1 },
            ],
            2
        )
    ).toStrictEqual([
        [
            { item: 1, rows: 1, index: 0 },
            { item: 3, rows: 1, index: 2 },
        ],
        [
            { item: 2, rows: 1, index: 1 },
            { item: 4, rows: 1, index: 3 },
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
            { item: 1, rows: 1, index: 0 },
            { item: 2, rows: 1, index: 1 },
            { item: 3, rows: 1, index: 2 },
            { item: 6, rows: 1, index: 3 },
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
                { item: 4, rows: 1 },
            ],
            2
        )
    ).toStrictEqual([
        [
            { item: 1, rows: 1, index: 0 },
            { item: 3, rows: 1, index: 2 },
            { item: 4, rows: 1, index: 3 },
        ],
        [{ item: 2, rows: 2, index: 1 }],
    ]);
});

test("multirow doesn't break single column", () => {
    expect(
        arrayIntoMatrixOrderedByColumn<number>(
            [
                { item: 1, rows: 1 },
                { item: 2, rows: 2 },
                { item: 3, rows: 1 },
                { item: 4, rows: 1 },
            ],
            1
        )
    ).toStrictEqual([
        [
            { item: 1, rows: 1, index: 0 },
            { item: 2, rows: 2, index: 1 },
            { item: 3, rows: 1, index: 2 },
            { item: 4, rows: 1, index: 3 },
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
            { item: 1, rows: 1, index: 0 },
            { item: 4, rows: 2, index: 3 },
        ],
        [
            { item: 2, rows: 1, index: 1 },
            { item: 5, rows: 1, index: 4 },
            { item: 6, rows: 1, index: 5 },
        ],
        [{ item: 3, rows: 2, index: 2 }],
    ]);
});

test("multirow works with big rows numbers", () => {
    expect(
        arrayIntoMatrixOrderedByColumn(
            [
                { item: 1, rows: 1 },
                { item: 2, rows: 4 },
                { item: 3, rows: 1 },
                { item: 4, rows: 1 },
                { item: 5, rows: 1 },
                { item: 6, rows: 1 },
                { item: 7, rows: 1 },
                { item: 8, rows: 1 },
                { item: 9, rows: 1 },
                { item: 10, rows: 1 },
                { item: 11, rows: 1 },
            ],
            3
        )
    ).toStrictEqual([
        [
            { item: 1, rows: 1, index: 0 },
            { item: 4, rows: 1, index: 3 },
            { item: 6, rows: 1, index: 5 },
            { item: 8, rows: 1, index: 7 },
            { item: 10, rows: 1, index: 9 },
        ],
        [
            { item: 2, rows: 4, index: 1 },
            { item: 11, rows: 1, index: 10 },
        ],
        [
            { item: 3, rows: 1, index: 2 },
            { item: 5, rows: 1, index: 4 },
            { item: 7, rows: 1, index: 6 },
            { item: 9, rows: 1, index: 8 },
        ],
    ]);
});
