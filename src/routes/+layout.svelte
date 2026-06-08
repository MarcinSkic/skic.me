<script lang="ts">
  import "./styles.scss";
  import "iconify-icon";
  import posthog from "posthog-js";
  import { browser } from "$app/environment";
  import { beforeNavigate, afterNavigate } from "$app/navigation";
  interface Props {
    children?: import('svelte').Snippet;
  }

  let { children }: Props = $props();

  if (browser) {
    beforeNavigate(() => posthog.capture("$pageleave"));
    afterNavigate(() => posthog.capture("$pageview"));
  }
</script>

<div class="app">{@render children?.()}</div>

<style lang="scss">
  .app {
    --nav-height: 6rem;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-image: radial-gradient(
        50% 50% at 50% 50%,
        rgb(255 255 255 / 75%) 0%,
        rgb(255 255 255 / 0%) 100%
      ),
      linear-gradient(
        180deg,
        var(--color-bg-0) 0%,
        var(--color-bg-1) 15%,
        var(--color-bg-2) 50%
      );

    @media (max-width: 1060px) {
      --nav-height: 5rem;
    }

    @media (max-width: 850px) {
      --nav-height: 4rem;
    }
  }
</style>
