<script>
    import Header from "./Header.svelte";
</script>

<svelte:head>
    <title>Marcin Skic</title>
    <meta name="description" content="Marcin Skic's portfolio page" />
</svelte:head>

<Header --font-size="4rem" />
<main>
    <section id="projects">
        <h2>Projects</h2>
    </section>
    <section id="contact">
        <h2>Contact</h2>
    </section>
</main>

<style lang="scss">
    main {
        box-sizing: border-box;
        display: grid;
        flex: 1;
        flex-direction: column;
        width: 100%;
        max-width: 64rem;
        margin: 0 auto;
    }
</style>
