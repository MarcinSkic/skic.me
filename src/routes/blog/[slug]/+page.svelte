<script lang="ts">
  import "./post.scss";
  import { getContext } from "svelte";
  import type { BlogHeaderContext } from "../+layout.svelte";
  import dayjs from "dayjs";

  export let data;

  getContext<BlogHeaderContext>("blog-header").setHeader(
    { text: "Other posts", href: "/blog" },
    ""
  );

  const prettyDate = dayjs(data.meta.date).format("MMM D, YYYY");
</script>

<svelte:head>
  <title>{data.meta.title}</title>
</svelte:head>

<article class="post">
  <header class="header">
    <h1 class="header__title">{data.meta.title}</h1>
    <p class="header__description">{data.meta.description}</p>
    <ul class="header__tags">
      {#each data.meta.tags as tag}
        <li class="header__tags__tag">{tag}</li>
      {/each}
      <li class="header__date">
        <time datetime={data.meta.date}>{prettyDate}</time>
      </li>
    </ul>
  </header>

  <section class="prose">
    <svelte:component this={data.content} />
  </section>
</article>

<style lang="scss">
  .post {
    justify-self: center;
    max-width: 700px;
    margin: 0 1.5rem;
  }

  .header {
    margin-bottom: 2rem;

    &__title {
      margin-bottom: 0;
      font-size: 2.25rem;
      font-weight: 900;
      line-height: 2.5rem;
    }

    &__description {
      color: var(--color-text-dark-muted);
    }

    &__tags {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      padding: 0;
      list-style: none;

      &__tag {
        padding: 0.25rem 0.5rem;
        margin-right: 0.5rem;
        font-size: 1rem;
        line-height: 1.5rem;
        background-color: var(--color-theme-2);
        border-radius: 0.5rem;
      }
    }

    &__date {
      margin-left: auto;
      color: var(--color-text-dark-muted);
    }
  }
</style>
