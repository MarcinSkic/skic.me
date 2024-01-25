<script lang="ts">
    import { getControlledInterval } from "$lib/time";
    import { spring } from "svelte/motion";

    export let itemsCount: number;
    /**
     * Duration between slides in milliseconds
     */
    export let duration: number;
    export let arrayIndexDirection: "increment" | "decrement";

    export function increaseCounter() {
        counter++;
        interval.reset();
    }

    export function decreaseCounter() {
        counter--;
        interval.reset();
    }

    /**
     * Works with normal and negative numbers, sequence stays the same
     * @param value
     * @param divider
     */
    function universalModulo(value: number, divider: number) {
        return ((value % divider) + divider) % divider;
    }

    const indexCounter = spring(0, {});

    let counter = 0;
    let visibilityState: "visible" | "hidden";
    let lastSlide = Date.now();

    $: indexCounter.set(counter);
    $: currentIndex = universalModulo(Math.floor($indexCounter), itemsCount);
    $: hiddenIndex = universalModulo(Math.floor($indexCounter + 1), itemsCount);
    $: offset = `${universalModulo($indexCounter, 1) * 100 * -1}%`;

    const interval = getControlledInterval(() => {
        const skipSliding =
            visibilityState === "hidden" ||
            Date.now() - lastSlide < duration * 0.9;

        if (skipSliding) return;

        lastSlide = Date.now();
        counter += arrayIndexDirection === "increment" ? 1 : -1;
    }, duration);
</script>

<svelte:document bind:visibilityState />
<div class="slider">
    <div class="slider__content" style:--offset={offset}>
        <div aria-hidden="true" class="slider__content__hidden">
            <slot name="hidden" {hiddenIndex}>{hiddenIndex}</slot>
        </div>
        <div class="slider__content__visible">
            <slot name="current" {currentIndex}>{currentIndex}</slot>
        </div>
    </div>
</div>

<style lang="scss">
    .slider {
        position: relative;
        min-width: var(--min-width);
        height: 100%;
        overflow: hidden;

        &__content {
            height: 100%;
            transform: translate(var(--offset), 0);

            &__visible,
            &__hidden {
                height: 100%;
            }

            &__hidden {
                position: absolute;
                right: -100%;
                width: 100%;
            }
        }
    }
</style>
