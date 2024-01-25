<script lang="ts">
    import { getControlledInterval } from "$lib/time";
    import { spring } from "svelte/motion";

    export let itemsCount: number;
    /**
     * Duration between slides in milliseconds
     */
    export let duration: number;
    export let animationDirection: "left" | "right";

    export function increaseCounter() {
        counter++;
        interval.reset();
    }

    export function decreaseCounter() {
        counter--;
        if (counter < 0) {
            counter = itemsCount - 1;
        }
        interval.reset();
    }

    const indexCounter = spring(0, {});

    let counter = 0;
    let visibilityState: "visible" | "hidden";
    let lastSlide = Date.now();

    $: indexCounter.set(counter);
    $: currentIndex = Math.floor($indexCounter) % itemsCount;
    $: hiddenIndex = Math.floor($indexCounter + 1) % itemsCount;
    $: offset = `${
        ($indexCounter % 1) * 100 * (animationDirection === "right" ? 1 : -1)
    }%`;
    $: hiddenElementStyle =
        animationDirection === "right" ? "left: -100%" : "right: -100%";

    const interval = getControlledInterval(() => {
        const skipSliding =
            visibilityState === "hidden" ||
            Date.now() - lastSlide < duration * 0.9;

        if (skipSliding) return;

        lastSlide = Date.now();
        counter += 1;
    }, duration);
</script>

<svelte:document bind:visibilityState />
<div class="slider">
    <div class="slider-content" style:--offset={offset}>
        <span aria-hidden="true" class="hidden" style={hiddenElementStyle}>
            <slot name="hidden" {hiddenIndex}>{hiddenIndex}</slot>
        </span>
        <span><slot name="current" {currentIndex}>{currentIndex}</slot></span>
    </div>
</div>

<style lang="scss">
    .slider {
        position: relative;
        min-width: var(--min-width);
        overflow: hidden;
    }

    .slider-content {
        transform: translate(var(--offset), 0);
    }

    .hidden {
        position: absolute;
        width: 100%;
    }
</style>
