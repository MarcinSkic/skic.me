<script lang="ts">
    import { spring } from "svelte/motion";
    import { writable } from "svelte/store";

    export let texts: string[];
    export let duration: number;
    export let animationDirection: "left" | "right";

    const displayedCounter = spring(0, {});
    const longestText =
        ([...texts].sort((a, b) => a.length - b.length).pop()?.length ?? 0) / 2;

    let counter = 0;
    let visibilityState: "visible" | "hidden";

    $: displayedCounter.set(counter);
    $: currentIndex = Math.floor($displayedCounter) % texts.length;
    $: hiddenIndex = Math.floor($displayedCounter + 1) % texts.length;

    setInterval(() => {
        if (visibilityState === "hidden") return;

        counter += 1;
    }, duration);
</script>

<svelte:document bind:visibilityState />
<div class="text-slider" style:--longest-text={longestText}>
    <div
        class="text-slider-content"
        style:--offset="{($displayedCounter % 1) *
            100 *
            (animationDirection === "right" ? 1 : -1)}%"
    >
        <span
            aria-hidden="true"
            class="hidden"
            style={animationDirection === "right"
                ? "left: -100%"
                : "right: -100%"}>{texts[hiddenIndex]}</span
        >
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
        width: 100%;
    }
</style>
