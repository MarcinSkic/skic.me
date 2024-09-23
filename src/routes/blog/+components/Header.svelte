<header class="header">
  <nav>
    <ul class="links">
      <li>
        <a class="links__link" href="/">
          <iconify-icon icon="mdi:chevron-left" class="links__link__icon" />
          <span>Home</span>
        </a>
      </li>
    </ul>
  </nav>
  <h1>Blog</h1>
</header>

<style lang="scss">
  .header {
    display: grid;
    grid-template-columns: 100px 1fr 100px;
    place-items: center;
    justify-self: center;
    width: 100%;
    max-width: 1400px;
  }

  .links {
    padding: 0;
    list-style: none;

    &__link {
      display: flex;
      gap: 1px;
      align-items: center;
      font-size: 1.2rem;
      font-weight: 500;
      color: white;

      &__icon {
        margin-bottom: 2px;
        font-size: 1.5em;
      }
    }
  }
</style>
