<script lang="ts">
    import { arrayIntoMatrixOrderedByColumn } from "./math";

    export let list: any[];

    const minColumnWidth = 500;
    const gap = 40;
    let gridWidth = 0;
    let columnCount = 0;
    let matrix: any[][] = [];

    $: {
        const minColumnWithGapWidth = minColumnWidth + gap;
        let columnWithGapCount = Math.floor(gridWidth / minColumnWithGapWidth);
        let leftSpace = gridWidth - columnWithGapCount * minColumnWithGapWidth;

        columnCount = Math.max(
            1,
            leftSpace >= minColumnWidth
                ? columnWithGapCount + 1
                : columnWithGapCount
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
            {#each column as item}
                <slot {item} />
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
