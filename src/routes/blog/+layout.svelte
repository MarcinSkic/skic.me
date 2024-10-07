<script context="module" lang="ts">
  export interface BlogHeaderContext {
    setHeader: (
      previousPage: { text: string; href: string },
      title: string
    ) => void;
  }
</script>

<script lang="ts">
  import Header from "./+components/Header.svelte";
  import { setContext } from "svelte";

  function setHeader(
    _previousPage: { text: string; href: string },
    _title: string
  ) {
    previousPage = _previousPage;
    title = _title;
  }

  setContext<BlogHeaderContext>("blog-header", {
    setHeader,
  });

  let previousPage = {
    text: "Home",
    href: "/",
  };
  let title = "";
</script>

<div class="blog">
  <Header {previousPage} {title} />

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
