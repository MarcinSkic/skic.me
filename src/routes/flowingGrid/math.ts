export interface MatrixElement<T> {
    item: T;
    rows: number;
}

export function arrayIntoMatrixOrderedByColumn<T>(
    list: MatrixElement<T>[],
    cols: number
) {
    const matrix: MatrixElement<T>[][] = [];
    const jumpsMap = new Map<number, number>();

    for (
        let elementIndex = 0, positionIndex = 0;
        elementIndex < list.length;
        elementIndex++, positionIndex++
    ) {
        let col = positionIndex % cols;

        if (elementIndex < cols) {
            matrix[col] = [];
        }

        const element = list[elementIndex];

        while (jumpsMap.has(col)) {
            positionIndex++;
            let jumpsLeft = jumpsMap.get(col)! - 1;

            if (jumpsLeft === 0) {
                jumpsMap.delete(col);
            } else {
                jumpsMap.set(col, jumpsLeft);
            }

            col = positionIndex % cols;
        }

        if (element.rows > 1) {
            jumpsMap.set(col, element.rows - 1);
        }

        matrix[col].push(element);
    }

    return matrix;
}
