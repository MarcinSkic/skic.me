<script>
  import Header from "./+components/Header.svelte";
</script>

<div class="blog">
  <Header />

  <slot />
</div>

<style lang="scss">
  .blog {
    display: grid;
    grid-template-rows: auto 1fr auto;
    min-height: 100vh;
    color: white;
    background: var(--background);
  }
</style>
