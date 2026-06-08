<script lang="ts">
  import { Slider } from "../.";

  
  interface Props {
    texts: string[];
    /**
   * Duration between slides in milliseconds
   */
    duration: number;
    arrayIndexDirection: "increment" | "decrement";
  }

  let { texts, duration, arrayIndexDirection }: Props = $props();

  const longestText =
    ([...texts].sort((a, b) => a.length - b.length).pop()?.length ?? 0) / 1.9;
</script>

<Slider
  itemsCount={texts.length}
  {duration}
  {arrayIndexDirection}
  interactable={false}
  --min-width="calc(var(--font-size) * {longestText})"
>
  {#snippet hidden({ hiddenIndex })}
    <span  >{texts[hiddenIndex]}</span>
  {/snippet}
  {#snippet current({ currentIndex })}
    <span  >{texts[currentIndex]}</span>
  {/snippet}
</Slider>
