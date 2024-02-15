export function arrayIntoMatrixOrderedByColumn(list: unknown[], cols: number) {
    const matrix: unknown[][] = [];

    for (let i = 0; i < list.length; i++) {
        let col = i % cols;

        if (i < cols) {
            matrix[col] = [];
        }

        matrix[col].push(list[i]);
    }

    return matrix;
}
