<script lang="ts">
    import { projects } from "$lib/projects";
    import Slider from "./Slider.svelte";
    import MenuLeft from "svelte-material-icons/MenuLeft.svelte";
    import MenuRight from "svelte-material-icons/MenuRight.svelte";

    export let images: { alt: string; src: string }[] = projects[0].images;
    let slider: any;
</script>

<div class="image-slider">
    <button class="image-slider__prev" on:click={() => slider.decreaseCounter()}
        ><MenuLeft size="2.5rem" /></button
    >
    <Slider
        bind:this={slider}
        itemsCount={images.length}
        duration={5000}
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
    <button class="image-slider__next" on:click={() => slider.increaseCounter()}
        ><MenuRight size="2.5rem" /></button
    >
</div>

<style lang="scss">
    .image-slider {
        position: relative;
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
                object-fit: contain;
            }
        }
    }
</style>
