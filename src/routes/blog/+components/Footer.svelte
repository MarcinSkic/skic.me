<footer class="footer">
  <span class="footer__attribution">
    Made by Marcin Skic
    <a href="https://github.com/MarcinSkic" target="github" rel="noopener">
      <iconify-icon icon="cib:github" class="footer__github" />
    </a></span
  >
  <span>|</span>
  <span>
    Inspired by
    <a
      class="footer__link"
      href="https://joyofcode.xyz/sveltekit-markdown-blog"
    >
      this awesome article
    </a>
  </span>
</footer>

<style lang="scss">
  .footer {
    display: flex;
    gap: 1rem;
    place-self: center;
    align-items: center;
    margin-bottom: 1rem;

    @media screen and (max-width: 630px) {
      gap: 0.5rem;
      font-size: 0.8rem;
    }

    &__link {
      font-weight: 600;
      color: white;
      text-decoration: underline;
    }

    &__attribution {
      display: flex;
      gap: 0.5rem;
      align-items: center;
    }

    &__github {
      font-size: 1.1rem;
      color: white;
    }
  }
</style>
