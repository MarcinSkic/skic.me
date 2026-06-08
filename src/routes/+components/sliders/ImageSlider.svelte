<script lang="ts">
  import { Slider } from "../.";

  interface Props {
    duration?: number;
    delay?: number;
    images: { alt: string; src: string }[];
  }

  let { duration = 5000, delay = 0, images }: Props = $props();
  let slider: any = $state();
  let visible = $state(false);
</script>

<div
  class="image-slider"
  role="presentation"
  onpointerenter={() => {
    visible = true;
  }}
  onpointerleave={() => {
    visible = false;
  }}
>
  <button
    class="image-slider__arrow image-slider__arrow--prev"
    class:image-slider__arrow--visible={visible}
    aria-label="Previous image"
    onclick={() => slider.decreaseCounter()}
  >
    <iconify-icon icon="mdi:menu-left"></iconify-icon>
  </button>
  <Slider
    bind:this={slider}
    itemsCount={images.length}
    {duration}
    {delay}
    arrayIndexDirection="increment"
  >
    {#snippet hidden({ hiddenIndex })}
        <div class="image-slider__img-wrapper"  >
        <img
          draggable="false"
          src={images[hiddenIndex].src}
          alt={images[hiddenIndex].alt}
        />
      </div>
      {/snippet}

    {#snippet current({ currentIndex })}
        <div class="image-slider__img-wrapper"  >
        <img
          draggable="false"
          src={images[currentIndex]?.src}
          alt={images[currentIndex]?.alt}
        />
      </div>
      {/snippet}
  </Slider>
  <button
    class="image-slider__arrow image-slider__arrow--next"
    class:image-slider__arrow--visible={visible}
    aria-label="Next image"
    onclick={() => slider.increaseCounter()}
  >
    <iconify-icon icon="mdi:menu-right"></iconify-icon>
  </button>
</div>

<style lang="scss">
  .image-slider {
    position: relative;
    grid-area: var(--grid-area);
    height: 100%;

    &__arrow {
      position: absolute;
      top: 0;
      z-index: 1;
      height: 100%;
      padding: 0;
      font-size: 2.5rem;
      color: hsla(0, 0%, 0%, 0.72);
      color: white;
      background-color: hsla(0, 0%, 0%, 0.255);
      border: 0;
      opacity: 0%;
      transition: opacity 0.5s;

      &--prev {
        left: 0;
      }

      &--next {
        right: 0;
      }

      &--visible {
        opacity: 100%;
      }
    }

    &__img-wrapper {
      position: relative;
      display: grid;
      place-items: center;
      height: 100%;

      & > img {
        position: absolute;
        inset: 0px;
        width: 100%;
        height: 100%;
        object-fit: var(--object-fit, contain);
        object-position: top;
      }
    }
  }
</style>
