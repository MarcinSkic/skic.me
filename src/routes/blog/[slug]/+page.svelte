<script lang="ts">
  import "./post.scss";
  import { getContext } from "svelte";
  import type { BlogHeaderContext } from "../+layout.svelte";
  import dayjs from "dayjs";
  import { Footer } from "./+components";

  export let data;

  getContext<BlogHeaderContext>("blog-header").setHeader(
    { text: "Other posts", href: "/blog" },
    ""
  );

  const prettyDate = dayjs(data.meta.date).format("MMM D, YYYY");
</script>

<svelte:head>
  <title>{data.meta.title}</title>
  <meta name="description" content={data.meta.description} />
  <meta
    property="og:image"
    content="/images/intro-to-time-tracking/preview.png"
  />
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
        <span>|</span>
        <span>{data.meta.readingTime}</span>
      </li>
    </ul>
  </header>

  <section class="prose">
    <svelte:component this={data.content} />
  </section>

  <section class="cta-github">
    <h2 class="cta-github__title">Found a mistake?</h2>
    <p class="cta-github__text">
      <span> If you wish to contribute to this article,</span>

      <a
        href={`https://github.com/MarcinSkic/portfolio-website/blob/main/src/posts/${data.meta.slug}.md`}
        class="cta-github__link"
        target="github_edit"
        rel="noopener"
      >
        <span>edit it on Github</span><iconify-icon icon="mdi:open-in-new" /></a
      >
    </p>
  </section>
</article>

<Footer />

<style lang="scss">
  .post {
    box-sizing: border-box;
    justify-self: center;
    width: 100%;
    max-width: 700px;
    padding: 0 1.5rem;
    margin: 0 0 2rem;
    overflow: hidden;
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
      gap: 0.5rem;
      align-items: center;
      padding: 0;
      list-style: none;

      &__tag {
        padding: 0.25rem 0.5rem;
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

  .cta-github {
    padding: 1.4rem 1rem;
    margin: 5rem 0 3rem;
    background-color: var(--color-theme-2);
    border-radius: 10px;

    &__title {
      margin: 0;
    }

    &__text {
      margin-bottom: 0;
    }

    &__link {
      display: inline-flex;
      gap: 0.2rem;
      font-weight: 700;
      color: white;
      text-decoration: underline;
    }
  }
</style>
