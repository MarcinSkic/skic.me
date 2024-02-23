<script lang="ts">
    import type { Experience } from "$lib/experience";
    import dayjs from "dayjs";
    import TimelineEntry from "./TimelineEntry.svelte";

    export let experienceList: Experience[];
</script>

<div class="timeline">
    {#each experienceList as experience}
        <TimelineEntry {experience} />
    {/each}
</div>

<style lang="scss">
    .timeline {
        display: grid;
        place-items: start;
    }
</style>
