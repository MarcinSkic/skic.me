<script>
    import "./styles.css";
</script>

<div class="app"><slot /></div>

<style lang="scss">
    .app {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }
</style>
