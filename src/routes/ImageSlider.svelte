<script lang="ts">
    import { projects } from "$lib/projects";
    import Slider from "./Slider.svelte";
    import MenuLeft from "svelte-material-icons/MenuLeft.svelte";
    import MenuRight from "svelte-material-icons/MenuRight.svelte";

    let images: { alt: string; src: string }[] = projects[0].images;
    let counter: number;
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
        <img
            slot="hidden"
            let:hiddenIndex
            src={images[hiddenIndex].src}
            alt={images[hiddenIndex].alt}
        />

        <img
            slot="current"
            let:currentIndex
            src={images[currentIndex]?.src}
            alt={images[currentIndex]?.alt}
        />
    </Slider>
    <button class="image-slider__next" on:click={() => slider.increaseCounter()}
        ><MenuRight size="2.5rem" /></button
    >
</div>

<style lang="scss">
    .image-slider {
        position: relative;

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
    }
</style>
