<footer class="footer">
  <span class="footer__attribution">
    Written by Marcin Skic
    <a href="https://github.com/MarcinSkic" target="github" rel="noopener">
      <iconify-icon icon="cib:github" class="footer__github" />
    </a></span
  >
</footer>

<style lang="scss">
  .footer {
    display: flex;
    gap: 1rem;
    place-self: center;
    margin-bottom: 1rem;

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
