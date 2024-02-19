<script lang="ts">
    import Slider from "./Slider.svelte";

    export let texts: string[];
    /**
     * Duration between slides in milliseconds
     */
    export let duration: number;
    export let arrayIndexDirection: "increment" | "decrement";

    const longestText =
        ([...texts].sort((a, b) => a.length - b.length).pop()?.length ?? 0) / 2;
</script>

<Slider
    itemsCount={texts.length}
    {duration}
    {arrayIndexDirection}
    interactable={false}
    --min-width="calc(var(--font-size) * {longestText})"
>
    <span slot="hidden" let:hiddenIndex>{texts[hiddenIndex]}</span>
    <span slot="current" let:currentIndex>{texts[currentIndex]}</span>
</Slider>
