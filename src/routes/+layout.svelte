<script>
    import Header from "./Header.svelte";
    import "./styles.css";
</script>

<div class="app">
    <Header --font-size="4rem" />

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
</style>
