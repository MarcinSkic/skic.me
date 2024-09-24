<script lang="ts">
  import { getContext } from "svelte";
  import type { BlogHeaderContext } from "../+layout.svelte";

  export let data;

  getContext<BlogHeaderContext>("blog-header").setHeader(
    { text: "Other posts", href: "/blog" },
    ""
  );
</script>

<article>
  <svelte:component this={data.content} />
</article>
