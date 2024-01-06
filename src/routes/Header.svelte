<script>
    import TextSlider from "./TextSlider.svelte";

    const descriptions = [
        "Web Developer",
        "Game Developer",
        "Technology Enthusiast",
    ];
</script>

<header>
    <h1>
        Hi, <br />
        I am <span class="name">Marcin</span> <br />
        <TextSlider texts={descriptions} duration={3000} />
    </h1>
</header>

<style lang="scss">
    header {
        display: grid;
        grid-template:
            "title photo" auto
            "nav nav" auto / auto auto;
        place-content: center;
        height: 100vh;
        background-color: #0f172a;

        > h1 {
            grid-area: title;
            font-size: var(--font-size);
            color: white;
            text-align: start;

            .name {
                color: #eab308;
            }
        }
    }
</style>
