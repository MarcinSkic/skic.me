<script>
  import TextSlider from "./sliders/TextSlider.svelte";
  import profile from "$lib/images/profile.jpeg";
  import { onMount } from "svelte";

  let photoLoaded = false;

  const descriptions = [
    "Web Developer",
    "Technology Enthusiast",
    "Game Developer",
  ];

  onMount(() => {
    const image = new window.Image();
    image.src = profile;
    image.onload = () => {
      photoLoaded = true;
    };
  });
</script>

<div class="header-baner">
  <div class="header-baner__photo">
    {#if photoLoaded}
      <img class="header-baner__photo__img" src={profile} alt="person" />
    {:else}
      <div class="header-baner__photo__placeholder">MS</div>
    {/if}
  </div>

  <h1 class="header-baner__title">
    Hi, <br />
    I am <span class="header-baner__title__name">Marcin</span> <br />
    <div>
      <TextSlider
        texts={descriptions}
        duration={4000}
        arrayIndexDirection="decrement"
      />
    </div>
    <div id="contact" class="contact">
      <a href="https://github.com/MarcinSkic" target="github" rel="noopener">
        <iconify-icon icon="cib:github" class="contact__icon" />
      </a>
      <a
        href="https://www.linkedin.com/in/marcin-skic-569bb0272/"
        target="linkedin"
        rel="noopener"
      >
        <iconify-icon icon="devicon-plain:linkedin" class="contact__icon" />
      </a>
      <a href="mailto:marcin@skic.me">
        <iconify-icon icon="mdi:email" class="contact__icon" />
      </a>
    </div>
  </h1>
  <h2 class="header-baner__description">
    With 4 years of programming experience, which includes game and web
    development, along with a BSE in CS, I'm prepared to tackle a diverse range
    of projects.
  </h2>
</div>

<style lang="scss">
  .header-baner {
    display: grid;
    grid-area: baner;
    grid-template-columns: min-content min-content;
    gap: 0 2rem;
    align-items: center;
    justify-self: center;

    @media (max-width: 850px) {
      grid-template-columns: min-content;
    }

    &__photo {
      &__img {
        width: 100%;
        border-radius: 50%;
      }

      &__placeholder {
        display: grid;
        place-items: center;
        width: 100%;
        aspect-ratio: 1;
        font-size: var(--font-size);
        color: var(--color-text-dark);
        background-color: var(--color-theme-2);
        border-radius: 50%;
      }

      width: 300px;
      border-radius: 50%;

      @media (max-width: 1060px) {
        width: 250px;
      }

      @media (max-width: 850px) {
        justify-self: center;
        width: 200px;
        margin-bottom: 1rem;
      }
    }

    &__title {
      margin: 0;
      font-family: var(--font-header);
      font-size: var(--font-size);
      font-weight: 500;
      color: var(--color-text-dark);
      text-align: start;

      &__name {
        color: var(--color-theme-1);
      }

      @media (max-width: 850px) {
        text-align: center;
      }
    }

    &__description {
      grid-column: 1 / -1;
      justify-self: center;
      font-size: calc(var(--font-size) / 2);
      line-height: 1.3;
      color: var(--color-text-dark-muted);
      text-align: center;
    }
  }

  .contact {
    display: flex;
    grid-column: 1 / -1;
    gap: 3rem;
    align-items: center;
    min-height: calc(var(--font-size) / 1.3 + 1rem);
    padding-top: 1rem;
    padding-left: 0.5rem;
    margin-top: 0.5rem;
    font-size: calc(var(--font-size) / 2);
    border-top: 2px solid white;
    border-radius: 1px;

    &__icon {
      font-size: calc(var(--font-size) / 1.3);
      color: white;
    }

    @media (max-width: 850px) {
      gap: 4rem;
      justify-content: center;
    }
  }
</style>
