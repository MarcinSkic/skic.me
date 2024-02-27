<script>
    import "./styles.scss";
    import "iconify-icon";
</script>

<div class="app"><slot /></div>

<style lang="scss">
    .app {
        --nav-height: 6rem;
        display: flex;
        flex-direction: column;
        min-height: 100vh;

        @media (max-width: 1060px) {
            --nav-height: 5rem;
        }

        @media (max-width: 850px) {
            --nav-height: 4rem;
        }
    }
</style>
