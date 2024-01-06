<script>
    import TextSlider from "./TextSlider.svelte";
    import "./styles.css";

    const descriptions = [
        "Web Developer",
        "Game Developer",
        "Technology Enthusiast",
    ];
</script>

<div class="app">
    <header>
        <h1>
            Hi, <br />
            I am <span class="name">Marcin</span> <br />
            <TextSlider texts={descriptions} duration={1000} />
        </h1>
    </header>

    <main>
        <slot />
    </main>
</div>

<style lang="scss">
    .app {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }

    main {
        box-sizing: border-box;
        display: grid;
        flex: 1;
        flex-direction: column;
        width: 100%;
        max-width: 64rem;
        margin: 0 auto;
    }

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
            min-width: 500px;
            font-size: 4rem;
            color: white;
            text-align: start;

            .name {
                color: #eab308;
            }
        }
    }
</style>
