<script lang="ts">
    export let texts: string[];
    export let duration: number;

    let counter = 0;
    const longestText =
        (texts.toSorted((a, b) => a.length - b.length).pop()?.length ?? 0) / 2;

    const timeout = setInterval(() => {
        counter++;
    }, duration);

    $: currentIndex = counter % texts.length;
    $: hiddenIndex = (counter + 1) % texts.length;
</script>

<div class="text-slider" style:--longest-text={longestText}>
    <span aria-hidden="true" class="hidden">{texts[hiddenIndex]}</span>
    <span>{texts[currentIndex]}</span>
</div>

<style lang="scss">
    .text-slider {
        min-width: calc(var(--font-size) * var(--longest-text));
    }

    .hidden {
        display: none;
    }
</style>
