<script lang="ts">
    import type { Experience } from "$lib/experience";
    import dayjs from "dayjs";

    export let experience: Experience;
</script>

<div class="timeline-entry">
    <div class="timeline-entry__date">
        {dayjs(experience.began_at).format("MMM YYYY")} - {dayjs(
            experience.finished_at
        ).format("MMM YYYY")}
    </div>
    <div class="timeline-entry__dot"></div>
    <div class="timeline-entry__line"></div>
    <div class="timeline-entry__title">{experience.title}</div>
    <div class="timeline-entry__description">
        {@html experience.description}
    </div>
    <div class="timeline-entry__roles">
        <span>Roles:</span>
        {#each experience.roles as role, index}
            <span>{role}</span>
            {#if experience.roles.length - 1 > index}
                <span>· </span>
            {/if}
        {/each}
    </div>
</div>

<style lang="scss">
    .timeline-entry {
        --header-font-size: 2.2rem;
        --header-font-family: var(--font-header);
        display: grid;
        grid-template-rows: auto auto auto;
        grid-template-columns: calc(var(--header-font-size) * 11) 2rem auto;
        gap: 0 10px;
        align-items: center;
        max-width: 60rem;

        &__date {
            justify-self: end;
            font-family: var(--header-font-family);
            font-size: var(--header-font-size);
        }

        &__dot {
            justify-self: center;
            width: 1.5rem;
            height: 1.5rem;
            background: var(--color-theme-3);
            border-radius: 50%;
        }

        &__line {
            grid-row: 2 / -1;
            grid-column: 2 / 3;
            align-self: stretch;
            justify-self: center;
            width: 5px;
            background: var(--background);
        }

        &__title {
            justify-self: start;

            font-family: var(--header-font-family);
            font-size: var(--header-font-size);
        }

        &__description {
            grid-column: 3 / 4;
            justify-self: start;
            padding-top: 0.1rem;
            font-size: 1.3rem;

            :global(a) {
                font-style: italic;
                color: var(--color-theme-2);
            }
        }

        &__roles {
            grid-column: 3 / 4;
            padding: 0.5rem 0;
            font-size: 1.3rem;
        }
    }
</style>
