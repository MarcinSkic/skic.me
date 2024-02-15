export function arrayIntoMatrixOrderedByColumn(list: unknown[], cols: number) {
    return list.reduce<unknown[][]>((matrix, item, index) => {
        let col = index % cols;

        if (index < cols) {
            matrix[col] = [];
        }
        matrix[col].push(item);

        return matrix;
    }, []);
}
