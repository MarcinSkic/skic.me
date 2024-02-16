<script lang="ts">
    import Slider from "./Slider.svelte";

    export let duration: number = 5000;
    export let delay: number = 0;
    export let images: { alt: string; src: string }[];
    let slider: any;
</script>

<div class="image-slider">
    <button
        class="image-slider__prev"
        on:click={() => slider.decreaseCounter()}
    >
        <iconify-icon icon="mdi:menu-left" style="font-size: 2.5rem;" />
    </button>
    <Slider
        bind:this={slider}
        itemsCount={images.length}
        {duration}
        {delay}
        arrayIndexDirection="increment"
    >
        <div class="image-slider__img-wrapper" slot="hidden" let:hiddenIndex>
            <img src={images[hiddenIndex].src} alt={images[hiddenIndex].alt} />
        </div>

        <div class="image-slider__img-wrapper" slot="current" let:currentIndex>
            <img
                src={images[currentIndex]?.src}
                alt={images[currentIndex]?.alt}
            />
        </div>
    </Slider>
    <button
        class="image-slider__next"
        on:click={() => slider.increaseCounter()}
    >
        <iconify-icon icon="mdi:menu-right" style="font-size: 2.5rem;" />
    </button>
</div>

<style lang="scss">
    .image-slider {
        position: relative;
        grid-area: var(--grid-area);
        height: 100%;

        &__prev,
        &__next {
            position: absolute;
            top: 0;
            z-index: 1;
            height: 100%;
            padding: 0;
            color: hsla(0, 0%, 0%, 0.72);
            background-color: hsla(0, 0%, 0%, 0.155);
            border: 0;
        }

        &__prev {
            left: 0;
        }

        &__next {
            right: 0;
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
                object-position: top;
                object-fit: var(--object-fit, contain);
            }
        }
    }
</style>
