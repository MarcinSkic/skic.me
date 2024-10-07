<script lang="ts">
  import Footer from "./+components/Footer.svelte";
  import { getContext, onMount } from "svelte";
  import Post from "./+components/Post.svelte";
  import type { BlogHeaderContext } from "./+layout.svelte";

  export let data;

  getContext<BlogHeaderContext>("blog-header").setHeader(
    { text: "Home", href: "/" },
    "Blog"
  );
</script>

<svelte:head>
  <title>Marcin Skic's Blog</title>
</svelte:head>

<ul class="posts">
  {#each data.posts as post}
    <Post {post} />
  {/each}
</ul>

<Footer />

<style lang="scss">
  .posts {
    display: grid;
    grid-template-columns: minmax(auto, 800px);
    gap: 2rem;
    align-content: start;
    justify-content: center;
    padding: 0;
    margin-top: 2rem;
    list-style: none;
  }
</style>
