<script lang="ts">
  import dayjs from "dayjs";

  export let postMeta;

  const prettyDate = dayjs(postMeta.date).format("MMM D, YYYY");
</script>

<header class="header">
  <h1 class="header__title">{postMeta.title}</h1>
  <p class="header__description">{postMeta.description}</p>
  <ul class="header__tags">
    {#each postMeta.tags as tag}
      <li class="header__tags__tag">{tag}</li>
    {/each}
    <li class="header__date">
      <time datetime={postMeta.date}>{prettyDate}</time>
      <span>|</span>
      <span>{postMeta.readingTime}</span>
    </li>
  </ul>
</header>

<style lang="scss">
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
</style>
