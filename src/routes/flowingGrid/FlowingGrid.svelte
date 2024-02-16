<script lang="ts" generics="T">
    import {
        arrayIntoMatrixOrderedByColumn,
        type MatrixElement,
        type MatrixElementIndexed,
    } from "./math";

    export let list: MatrixElement<T>[];
    export let minCols = 1;
    export let maxCols = 3;
    export let minColumnWidth = 500;
    export let gap = 40;

    let gridWidth = 0;
    let columnCount = 0;
    let matrix: MatrixElementIndexed<T>[][] = [];

    $: {
        const minColumnWithGapWidth = minColumnWidth + gap;
        let columnWithGapCount = Math.floor(gridWidth / minColumnWithGapWidth);
        let leftSpace = gridWidth - columnWithGapCount * minColumnWithGapWidth;

        columnCount = Math.max(
            minCols,
            Math.min(
                leftSpace >= minColumnWidth
                    ? columnWithGapCount + 1
                    : columnWithGapCount,
                maxCols
            )
        );

        matrix = arrayIntoMatrixOrderedByColumn(list, columnCount);
    }
</script>

<div
    class="grid"
    bind:clientWidth={gridWidth}
    style:--gap="{gap}px"
    style:--cols={columnCount}
>
    {#each matrix as column}
        <div class="grid__column">
            {#each column as element}
                <slot item={element.item} index={element.index} />
            {/each}
        </div>
    {/each}
</div>

<style lang="scss">
    .grid {
        display: grid;
        grid-template-rows: 1fr;
        grid-template-columns: repeat(var(--cols), 1fr);
        gap: var(--gap);
        align-items: start;

        &__column {
            display: flex;
            flex-direction: column;
            gap: var(--gap);
            align-items: stretch;
        }
    }
</style>
