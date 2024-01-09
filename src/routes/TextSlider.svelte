<script lang="ts">
    import { spring } from "svelte/motion";
    import { writable } from "svelte/store";

    export let texts: string[];
    export let duration: number;
    let visibilityState: "visible" | "hidden";

    const displayedCounter = spring(0, {});
    const longestText =
        ([...texts].sort((a, b) => a.length - b.length).pop()?.length ?? 0) / 2;

    let counter = 0;

    $: displayedCounter.set(counter);
    $: currentIndex = Math.floor($displayedCounter) % texts.length;
    $: hiddenIndex = Math.floor($displayedCounter + 1) % texts.length;

    setInterval(() => {
        if (visibilityState === "hidden") return;
        counter++;
    }, duration);
</script>

<svelte:document bind:visibilityState />
<div class="text-slider" style:--longest-text={longestText}>
    <div
        class="text-slider-content"
        style:--offset="{($displayedCounter % 1) * 100}%"
    >
        <span aria-hidden="true" class="hidden">{texts[hiddenIndex]}</span>
        <span>{texts[currentIndex]}</span>
    </div>
</div>

<style lang="scss">
    .text-slider {
        position: relative;
        min-width: calc(var(--font-size) * var(--longest-text));
        overflow: hidden;
    }

    .text-slider-content {
        transform: translate(var(--offset), 0);
    }

    .hidden {
        position: absolute;
        left: -100%;
    }
</style>
