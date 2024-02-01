<script>
    import TextSlider from "./TextSlider.svelte";
    import profile from "$lib/images/profile.jpeg";

    const descriptions = [
        "Web Developer",
        "Technology Enthusiast",
        "Game Developer",
    ];
</script>

<div class="header-baner">
    <img class="header-baner__photo" width="300" src={profile} alt="person" />
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
        gap: 2rem;
        align-items: center;
        justify-self: center;

        &__photo {
            grid-area: photo;
            border-radius: 50%;
        }

        &__title {
            grid-area: title;
            margin: 0;
            font-size: var(--font-size);
            color: var(--color-text-dark);
            text-align: start;

            &__name {
                color: var(--color-theme-1);
            }
        }
    }
</style>
