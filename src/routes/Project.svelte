<script lang="ts">
    import { technologies, type Project } from "$lib/projects";
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
    <div class="project__tech">
        {#each project.technologies as technology}
            <img
                class="project__tech__img"
                alt={technology}
                src={technologies[technology]}
            />
        {/each}
    </div>
</div>

<style lang="scss">
    .project {
        display: grid;
        grid-template:
            "title icons" min-content
            "slider slider" auto
            "tech tech" minmax(50px, min-content) / 1fr 1fr;
        padding: 0 20px;
        color: white;
        background-color: var(--color-theme-2);

        &__icons {
            display: flex;
            gap: 10px;
            align-items: center;
            justify-self: end;

            a {
                color: white;
            }

            &__github-icon {
                width: 2rem;
            }
        }

        &__tech {
            display: flex;
            flex-wrap: wrap;
            grid-area: tech;
            gap: 10px;

            &__img {
                height: 30px;
            }
        }
    }
</style>
