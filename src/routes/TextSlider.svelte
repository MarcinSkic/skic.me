<script lang="ts">
    import { spring } from "svelte/motion";
    import { writable } from "svelte/store";

    export let texts: string[];
    export let duration: number; //in milliseconds
    export let animationDirection: "left" | "right";

    const displayedCounter = spring(0, {});
    const longestText =
        ([...texts].sort((a, b) => a.length - b.length).pop()?.length ?? 0) / 2;

    let counter = 0;
    let visibilityState: "visible" | "hidden";
    let lastSlide = Date.now();

    $: displayedCounter.set(counter);
    $: currentIndex = Math.floor($displayedCounter) % texts.length;
    $: hiddenIndex = Math.floor($displayedCounter + 1) % texts.length;
    $: offset = `${
        ($displayedCounter % 1) *
        100 *
        (animationDirection === "right" ? 1 : -1)
    }%`;
    $: hiddenTextStyle =
        animationDirection === "right" ? "left: -100%" : "right: -100%";

    setInterval(() => {
        const skipSliding =
            visibilityState === "hidden" ||
            Date.now() - lastSlide < duration * 0.9;

        if (skipSliding) return;

        lastSlide = Date.now();
        counter += 1;
    }, duration);
</script>

<svelte:document bind:visibilityState />
<div class="text-slider" style:--longest-text={longestText}>
    <div class="text-slider-content" style:--offset={offset}>
        <span aria-hidden="true" class="hidden" style={hiddenTextStyle}>
            {texts[hiddenIndex]}
        </span>
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
