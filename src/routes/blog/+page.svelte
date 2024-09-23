<script>
  import Post from "./+components/Post.svelte";

  export let data;
</script>

<ul class="posts">
  {#each data.posts as post}
    <Post {post} />
  {/each}
</ul>

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
