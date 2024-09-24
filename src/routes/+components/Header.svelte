<script lang="ts">
  import HeaderBaner from "./HeaderBaner.svelte";
  export let activeSectionId: string | undefined;

  const links = [
    {
      href: "#projects",
      title: "Projects",
    },
    {
      href: "#experience",
      title: "Experience",
    },
    {
      href: "/blog",
      title: "Blog",
    },
  ];
</script>

<header class="header">
  <HeaderBaner />
  <nav class="header__links-wrapper">
    <ul class="header__links">
      {#each links as link}
        <li>
          <a
            href={link.href}
            class="header__links__link"
            class:header__links__link--active={link.href ===
              `#${activeSectionId}`}
            aria-current={link.href === `#${activeSectionId}`
              ? "page"
              : undefined}
          >
            {link.title}
          </a>
        </li>
      {/each}
    </ul>
  </nav>
</header>

<style lang="scss">
  .header {
    --header-content-height: 30rem;
    --nav-distance-from-bottom: calc(
      (100vh - var(--header-content-height)) / 2
    );
    position: sticky;
    top: calc(-100vh + var(--nav-height));
    z-index: 2;
    display: grid;
    grid-template:
      "baner" auto
      "nav" var(--nav-distance-from-bottom) / 1fr;
    align-content: end;
    justify-content: center;
    height: 100vh;
    color: var(--color-text-dark);
    background: var(--background);
    border-bottom: 1px solid var(--color-bg-2);

    @media (max-width: 1060px) {
      --font-size: 3rem;
    }

    @media (max-width: 850px) {
      --font-size: 2rem;
    }

    &__links-wrapper {
      display: contents;
    }

    &__links {
      position: sticky;
      bottom: calc(var(--nav-distance-from-bottom) - var(--nav-height));
      display: flex;
      grid-area: nav;
      gap: var(--font-size);
      align-items: center;
      align-self: end;
      justify-self: center;
      height: var(--nav-height);
      padding: 0 2vw;
      margin: 0;
      font-size: calc(var(--font-size) / 1.6);
      list-style: none;

      &__link {
        color: var(--color-text-dark);
        background-image: linear-gradient(var(--color-text-dark) 0 0);
        background-repeat: no-repeat;
        background-position: 200% 100%;
        background-size: 200% 0.08em;
        transition: background-position 0.3s;

        &--active,
        &:hover {
          background-position: 100% 100%;
        }
      }
    }
  }
</style>
