<script lang="ts">
  export let postSlug: string;
</script>

<section class="cta-github">
  <h2 class="cta-github__title">Found a mistake?</h2>
  <p class="cta-github__text">
    <span> If you wish to contribute to this article,</span>

    <a
      href={`https://github.com/MarcinSkic/portfolio-website/blob/main/src/posts/${postSlug}.md`}
      class="cta-github__link"
      target="github_edit"
      rel="noopener"
    >
      <span>edit it on Github</span><iconify-icon icon="mdi:open-in-new" /></a
    >
  </p>
</section>

<style lang="scss">
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
