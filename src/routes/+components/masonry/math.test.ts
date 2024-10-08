import { expect, test } from "vitest";
import { arrayIntoMatrixOrderedByColumn } from "./math";

test("should return matrix given list", () => {
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

test("should return one column matrix when cols is 1", () => {
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

test("should return matrix respecting multirow elements when list contains such elements", () => {
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

test("should return one column matrix with elements in same order as list when cols is 1 and list has multirow elements", () => {
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

test("should return matrix respecting elements order when list contains multirow elements one after another", () => {
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

test("should return matrix respecting multirow elements when list contains element for 4 rows", () => {
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
