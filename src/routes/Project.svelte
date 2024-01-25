<script lang="ts">
    import type { Project } from "$lib/projects";
    import ImageSlider from "./ImageSlider.svelte";
    import OpenInNew from "svelte-material-icons/OpenInNew.svelte";
    import github from "$lib/images/github.svg?raw";

    export let project: Project;
</script>

<div class="project">
    <h3>{project.name}</h3>
    <div class="project__icons">
        {#if project.github}
            <a
                class="project__icons__github-icon"
                href={project.github}
                target="_blank"
                rel="noopener"
            >
                {@html github}
            </a>
        {/if}
        {#if project.url}
            <a href={project.url} target="_blank" rel="author noopener">
                <OpenInNew size="1.8rem" />
            </a>
        {/if}
    </div>
    <ImageSlider --grid-area="slider" />
</div>

<style lang="scss">
    .project {
        display: grid;
        grid-template:
            "title icons" min-content
            "slider slider" auto / 1fr 1fr;

        &__icons {
            display: flex;
            gap: 10px;
            align-items: center;
            justify-self: end;

            &__github-icon {
                width: 2rem;
            }
        }
    }
</style>
