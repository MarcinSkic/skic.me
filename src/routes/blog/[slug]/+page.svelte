<script lang="ts">
  import "./post.scss";
  import { getContext } from "svelte";
  import type { BlogHeaderContext } from "../+layout.svelte";

  import { Footer, Header, CtaGithub } from "./+components";

  export let data;

  getContext<BlogHeaderContext>("blog-header").setHeader(
    { text: "Other posts", href: "/blog" },
    ""
  );
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
  <Header postMeta={data.meta} />

  <section class="prose">
    <svelte:component this={data.content} />
  </section>

  <CtaGithub postSlug={data.meta.slug} />
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
</style>
