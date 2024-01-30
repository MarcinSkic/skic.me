<script lang="ts">
    import { technologies, type Project } from "$lib/projects";
    import ImageSlider from "./ImageSlider.svelte";
    import OpenInNew from "svelte-material-icons/OpenInNew.svelte";
    import github from "$lib/images/github.svg?raw";

    export let project: Project;
</script>

<div class="project">
    <h3 class="project__title">{project.name}</h3>
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
    <div class="project__images">
        <ImageSlider --object-fit="cover" />
    </div>
    <div class="project__description">
        {project.description}
    </div>
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
            "title icons" 35px
            "slider slider" auto
            "description description" 52px
            "tech tech" min-content / 1fr 1fr;
        gap: 10px;
        padding: 10px 20px 20px;
        color: white;
        background-color: var(--color-theme-2);

        &__title {
            align-self: center;
            margin: 0;
        }

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

        &__images {
            grid-area: slider;
            height: 150px;
            transition: height 0.5s;

            &:hover {
                height: 300px; /*FIXME: get height of the picture so it fits but not overflows other way*/
            }
        }

        &__description {
            grid-area: description;
            margin-top: 10px;
            font-size: 1.05rem;
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
