<script lang="ts">
  import { run } from 'svelte/legacy';

  import { getControlledInterval, type ControlledInterval } from "$lib/time";
  import { spring } from "svelte/motion";

  
  interface Props {
    interactable?: boolean;
    itemsCount: number;
    /**
   * Duration between slides in milliseconds
   */
    delay?: number;
    duration: number;
    arrayIndexDirection: "increment" | "decrement";
    hidden?: import('svelte').Snippet<[any]>;
    current?: import('svelte').Snippet<[any]>;
  }

  let {
    interactable = true,
    itemsCount,
    delay = 0,
    duration,
    arrayIndexDirection,
    hidden,
    current
  }: Props = $props();

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

  function swipeStart(clientX: number, clientY: number) {
    if (!interactable) return;

    swipeStartX = clientX;
    swipeStartY = clientY;
  }

  function swipeChange(clientX: number, clientY: number) {
    if (!interactable) return;

    swipeEndX = clientX;
    swipeEndY = clientY;

    const xDiff = swipeStartX - swipeEndX;
    const yDiff = swipeStartY - swipeEndY;

    if (isSwiping) {
      const counterDiff = counter + xDiff / clientWidth;
      indexCounter.set(counterDiff, { hard: true });
    } else if (Math.abs(xDiff) > Math.abs(yDiff)) {
      isSwiping = true;
      indexCounter.set($indexCounter, { hard: true });
      interval.stop();
    }
  }

  function swipeEnd() {
    if (!interactable) return;

    if (universalModulo($indexCounter, 1) > 0.5) {
      counter = Math.ceil($indexCounter);
      indexCounter.set(counter);
    } else {
      counter = Math.floor($indexCounter);
      indexCounter.set(counter);
    }

    isSwiping = false;
    interval.start();
  }

  const indexCounter = spring(0, {});

  //swiping
  let isSwiping = false;
  let isPressed = $state(false);
  let swipeStartX: number = 0;
  let swipeStartY: number = 0;
  let swipeEndX: number = 0;
  let swipeEndY: number = 0;
  let clientWidth: number = $state(0);

  let counter = $state(0);
  let visibilityState: "visible" | "hidden" | undefined = $state();
  let lastSlide = Date.now();
  let interval: ControlledInterval;

  run(() => {
    indexCounter.set(counter);
  });
  let currentIndex = $derived(universalModulo(Math.floor($indexCounter), itemsCount));
  let hiddenIndex = $derived(universalModulo(Math.floor($indexCounter + 1), itemsCount));
  let offset = $derived(`${universalModulo($indexCounter, 1) * 100 * -1}%`);

  //$: console.log(offset);

  setTimeout(() => {
    interval = getControlledInterval(() => {
      const skipSliding =
        visibilityState === "hidden" || Date.now() - lastSlide < duration * 0.9;

      if (skipSliding) return;

      lastSlide = Date.now();
      counter += arrayIndexDirection === "increment" ? 1 : -1;
    }, duration);
  }, delay);
</script>

<svelte:document bind:visibilityState />
<div
  class="slider"
  role="presentation"
  bind:clientWidth
  draggable="false"
  ontouchstart={(event) => {
    swipeStart(event.touches[0].clientX, event.touches[0].clientY);
  }}
  ontouchmove={(event) => {
    swipeChange(event.touches[0].clientX, event.touches[0].clientY);
  }}
  ontouchend={() => {
    swipeEnd();
  }}
  onpointerdown={(event) => {
    isPressed = true;
    swipeStart(event.clientX, event.clientY);
  }}
  onpointermove={(event) => {
    if (event.pressure !== 0 && isPressed) {
      swipeChange(event.clientX, event.clientY);
    }
  }}
  onpointerleave={() => {
    if (isPressed) {
      isPressed = false;
      swipeEnd();
    }
  }}
  onpointerup={() => {
    if (isPressed) {
      isPressed = false;
      swipeEnd();
    }
  }}
>
  <div class="slider__content" style:--offset={offset}>
    <div aria-hidden="true" class="slider__content__hidden">
      {#if hidden}{@render hidden({ hiddenIndex, })}{:else}{hiddenIndex}{/if}
    </div>
    <div class="slider__content__visible">
      {#if current}{@render current({ currentIndex, })}{:else}{currentIndex}{/if}
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
