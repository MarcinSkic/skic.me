<script lang="ts">
    export let texts: string[];
    export let duration: number;

    let counter = 0;

    const timeout = setInterval(() => {
        counter++;
    }, duration);

    $: currentIndex = counter % texts.length;
    $: hiddenIndex = (counter + 1) % texts.length;
</script>

<span>
    <span aria-hidden="true" class="hidden">{texts[hiddenIndex]}</span>
    <span>{texts[currentIndex]}</span>
</span>

<style lang="scss">
    .hidden {
        display: none;
    }
</style>
