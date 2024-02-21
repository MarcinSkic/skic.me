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
                duration={4000}
                arrayIndexDirection="decrement"
            />
        </div>
    </h1>
    <h2 class="header-baner__description">
        With 4 years of programming experience, which includes game and web
        development, along with a BSE in CS, I'm prepared to tackle a diverse
        range of projects.
    </h2>
</div>

<style lang="scss">
    .header-baner {
        display: grid;
        grid-area: baner;
        grid-template-columns: min-content min-content;
        gap: 0 2rem;
        align-items: center;
        justify-self: center;

        &__photo {
            border-radius: 50%;
        }

        &__title {
            margin: 0;
            font-family: var(--font-header);
            font-size: var(--font-size);
            font-weight: 500;
            color: var(--color-text-dark);
            text-align: start;

            &__name {
                color: var(--color-theme-1);
            }
        }

        &__description {
            grid-area: description;
            grid-column: 1 / -1;
            justify-self: center;
            font-size: calc(var(--font-size) / 2);
            line-height: 1.3;
            color: var(--color-text-dark-muted);
            text-align: center;
        }
    }
</style>
