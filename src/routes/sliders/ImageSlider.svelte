<script lang="ts">
    import Slider from "./Slider.svelte";

    export let duration: number = 5000;
    export let delay: number = 0;
    export let images: { alt: string; src: string }[];
    let slider: any;
    let visible = false;
</script>

<div
    class="image-slider"
    on:pointerenter={() => {
        visible = true;
    }}
    on:pointerleave={() => {
        visible = false;
    }}
>
    <button
        class="image-slider__arrow image-slider__arrow--prev"
        class:image-slider__arrow--visible={visible}
        on:click={() => slider.decreaseCounter()}
    >
        <iconify-icon icon="mdi:menu-left" />
    </button>
    <Slider
        bind:this={slider}
        itemsCount={images.length}
        {duration}
        {delay}
        arrayIndexDirection="increment"
    >
        <div class="image-slider__img-wrapper" slot="hidden" let:hiddenIndex>
            <img
                draggable="false"
                src={images[hiddenIndex].src}
                alt={images[hiddenIndex].alt}
            />
        </div>

        <div class="image-slider__img-wrapper" slot="current" let:currentIndex>
            <img
                draggable="false"
                src={images[currentIndex]?.src}
                alt={images[currentIndex]?.alt}
            />
        </div>
    </Slider>
    <button
        class="image-slider__arrow image-slider__arrow--next"
        class:image-slider__arrow--visible={visible}
        on:click={() => slider.increaseCounter()}
    >
        <iconify-icon icon="mdi:menu-right" />
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
