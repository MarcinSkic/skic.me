<script>
    import Slider from "./Slider.svelte";
    import TextSlider from "./TextSlider.svelte";

    const descriptions = [
        "Web Developer",
        "Technology Enthusiast",
        "Game Developer",
    ];
</script>

<div class="header-baner">
    <div class="header-baner__photo"><img src="/" alt="person" /></div>
    <h1 class="header-baner__title">
        Hi, <br />
        I am <span class="header-baner__title__name">Marcin</span> <br />
        <div>
            <TextSlider
                texts={descriptions}
                duration={5000}
                arrayIndexDirection="decrement"
            />
        </div>
    </h1>
</div>

<style lang="scss">
    .header-baner {
        display: flex;
        grid-area: baner;
        gap: 20px;
        align-items: center;
        justify-self: center;

        &__title {
            grid-area: title;
            place-self: end;
            margin: 0;
            font-size: var(--font-size);
            color: var(--color-text-dark);
            text-align: start;

            &__name {
                color: var(--color-theme-1);
            }
        }

        &__photo {
            grid-area: photo;
        }
    }
</style>
