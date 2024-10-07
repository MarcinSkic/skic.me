<script lang="ts">
  import type { Post } from "../+page.server";

  export let post: Post;
</script>

<li>
  <a class="post" href="/blog/{post.slug}">
    <h3 class="post__title">{post.title}</h3>
    <div class="post__date">
      <span>{post.date}</span> <span>|</span> <span>{post.readingTime}</span>
    </div>
    <p class="post__description">{post.description}</p>
  </a>
</li>

<style lang="scss">
  .post {
    --title-color: white;
    display: grid;
    grid-template:
      "title date" auto
      "description description" auto
      / auto auto;
    gap: 0.5rem;
    padding-left: 0.5rem;
    color: white;
    border-left: 0.25rem solid var(--title-color);

    &:hover {
      --title-color: var(--color-theme-1);
    }

    &__title {
      grid-area: title;
      margin: 0;
      font-size: 1.4rem;
      font-weight: 500;
      color: white;
    }

    &__description {
      grid-area: description;
      margin: 0;
      font-size: 1rem;
    }

    &__date {
      grid-area: date;
      justify-self: end;
    }
  }
</style>
