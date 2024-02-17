<script context="module" lang="ts">
    let toShow = 0;
</script>

<script lang="ts">
    import { technologies, type Project } from "$lib/projects";
    import ImageSlider from "./ImageSlider.svelte";
    import github from "$lib/images/github.svg?raw";
    import { afterUpdate, onMount } from "svelte";
    import { fly } from "svelte/transition";

    export let imageSlideDelay: number;
    export let project: Project;
    const duration = Math.random() * 2000 + 4000;
    const visibleHeightToShow = 300;
    let scrolledTo = false;
    let visible = false;
    let imageSlider: any;
    let imageSliderHeight = 300;
    let element: HTMLDivElement;
    let windowInnerHeight: number;

    onMount(() => {
        imageSliderHeight = imageSlider.offsetWidth / project.imagesAspectRatio;
    });

    afterUpdate(() => {
        if (imageSlider) {
            imageSliderHeight =
                imageSlider.offsetWidth / project.imagesAspectRatio;
        }
    });
</script>

<svelte:window
    on:scroll={() => {
        if (scrolledTo) return;

        const rect = element.getBoundingClientRect();

        if (rect.top + visibleHeightToShow < windowInnerHeight) {
            scrolledTo = true;
            console.log(toShow);

            setTimeout(() => {
                visible = true;
                toShow -= 1;
            }, toShow * 150);

            toShow += 1;
        }
    }}
    bind:innerHeight={windowInnerHeight}
/>

{#key visible}
    <div
        class="project"
        style:--visible={visible ? "visible" : "hidden"}
        in:fly={{ x: -200, duration: 800 }}
        bind:this={element}
    >
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
                    <iconify-icon
                        icon="mdi:open-in-new"
                        style="font-size: 1.8rem;"
                    />
                </a>
            {/if}
        </div>
        <div
            class="project__images"
            style:--height="{imageSliderHeight}px"
            bind:this={imageSlider}
        >
            <ImageSlider
                --object-fit="cover"
                images={project.images}
                {duration}
                delay={imageSlideDelay}
            />
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
{/key}

<style lang="scss">
    .project {
        display: grid;
        grid-template:
            "title icons" 35px
            "slider slider" 1fr
            "description description" auto
            "tech tech" auto / 1fr 1fr;
        gap: 10px;
        padding: 10px 20px 20px;
        color: white;
        visibility: var(--visible);
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

            height: var(--height);
            transition: height 0.5s;
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
            align-items: end;
            align-self: end;
            height: fit-content;

            &__img {
                height: 30px;
            }
        }
    }
</style>
