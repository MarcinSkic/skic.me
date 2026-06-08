<script module lang="ts">
  export interface BlogHeaderContext {
    setHeader: (
      previousPage: { text: string; href: string },
      title: string
    ) => void;
  }
</script>

<script lang="ts">
  import { Header } from "./+components";
  import { setContext } from "svelte";
  interface Props {
    children?: import('svelte').Snippet;
  }

  let { children }: Props = $props();

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

  let previousPage = $state({
    text: "Home",
    href: "/",
  });
  let title = $state("");
</script>

<div class="blog">
  <Header {previousPage} {title} />

  {@render children?.()}
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
