<script lang="ts" generics="T">
    import { run } from 'svelte/legacy';

    import {
        arrayIntoMatrixOrderedByColumn,
        type MatrixElement,
        type MatrixElementIndexed,
    } from "./math";

    
    
    interface Props {
        list: MatrixElement<T>[];
        minCols?: number;
        maxCols?: number;
        /** Value in px */
        minColumnWidth?: number;
        /** Value in px */
        gap?: number;
        children?: import('svelte').Snippet<[any]>;
    }

    let {
        list,
        minCols = 1,
        maxCols = 3,
        minColumnWidth = 500,
        gap = 40,
        children
    }: Props = $props();

    let gridWidth = $state(0);
    let columnCount = $state(0);
    let matrix: MatrixElementIndexed<T>[][] = $state([]);

    run(() => {
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
    });
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
                {@render children?.({ item: element.item, index: element.index, })}
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
