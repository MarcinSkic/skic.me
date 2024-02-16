export interface MatrixElement<T> {
    item: T;
    rows: number;
}

export function arrayIntoMatrixOrderedByColumn<T>(
    list: MatrixElement<T>[],
    cols: number
) {
    return list.reduce<MatrixElement<T>[][]>((matrix, item, index) => {
        let col = index % cols;

        if (index < cols) {
            matrix[col] = [];
        }
        matrix[col].push(item);

        return matrix;
    }, []);
}
