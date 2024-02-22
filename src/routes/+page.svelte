<script lang="ts">
    import { projects } from "$lib/projects";
    import { onMount } from "svelte";
    import Footer from "./Footer.svelte";
    import Header from "./Header.svelte";
    import Project from "./project/Project.svelte";
    import FlowingGrid from "./flowingGrid/FlowingGrid.svelte";

    const visibleHeightToActiveSection = 100;
    let sections: HTMLElement[] = [];
    let activeSectionId: string | undefined;
    let windowInnerHeight: number;
    let projectsSection: HTMLElement;
    let contactSection: HTMLElement;

    onMount(() => {
        sections = [contactSection, projectsSection];
        activeSectionId = getActiveSection(sections)?.id;
    });

    function getActiveSection(sections: HTMLElement[]) {
        for (const section of sections) {
            const rect = section.getBoundingClientRect();

            if (rect.top + visibleHeightToActiveSection < windowInnerHeight) {
                return section;
            }
        }

        return null;
    }
</script>

<svelte:head>
    <title>Marcin Skic</title>
    <meta name="description" content="Marcin Skic's portfolio page" />
</svelte:head>
<svelte:window
    bind:innerHeight={windowInnerHeight}
    on:scroll={() => {
        activeSectionId = getActiveSection(sections)?.id;
    }}
/>

<Header --font-size="4rem" {activeSectionId} />
<main>
    <section id="projects" class="projects" bind:this={projectsSection}>
        <FlowingGrid list={projects} gap={8} let:item>
            <Project
                project={item}
                imageSlideDelay={Math.random() * 3000 - 1500}
            />
        </FlowingGrid>
    </section>
    <section id="contact" class="contact" bind:this={contactSection}>
        <div class="contact__title">You can find me here:</div>
        <div class="contact__links">
            <a
                href="https://github.com/MarcinSkic"
                target="github"
                rel="noopener"
            >
                <iconify-icon icon="cib:github" class="contact__icon" />
            </a>
            <a
                href="https://www.linkedin.com/in/marcin-skic-569bb0272/"
                target="linkedin"
                rel="noopener"
            >
                <iconify-icon
                    icon="devicon-plain:linkedin"
                    class="contact__icon"
                />
            </a>
            <a href="mailto:marcin@skic.me">
                <iconify-icon icon="mdi:email" class="contact__icon" />
            </a>
        </div>
    </section>
</main>
<Footer />

<style lang="scss">
    main {
        --nav-height: 6rem;
        box-sizing: border-box;
        display: grid;
        flex: 1;
        flex-direction: column;

        width: 100%;
        margin: 0 auto;
    }

    .projects {
        padding: 0.5rem;
        scroll-margin-top: var(--nav-height);
    }

    .contact {
        box-sizing: border-box;
        display: grid;
        gap: 3rem;
        align-content: start;
        justify-items: center;
        height: calc(100vh - var(--nav-height) - 42px);
        padding-top: 25vh;
        scroll-margin-top: var(--nav-height);

        &__title {
            font-family: var(--font-header);
            font-size: 4rem;
            font-weight: 500;
        }

        &__links {
            display: flex;
            gap: 2rem;
        }

        &__icon {
            padding: 1rem;
            font-size: 5rem;
            color: white;
            background: var(--color-theme-2);
            border-radius: 1rem;
            box-shadow: 5px 5px 10px 0 rgba(0, 0, 0, 0.286);
            transition: color 0.4s;

            &:hover {
                color: var(--color-theme-1);
                transition: color 0.8s;
            }
        }
    }
</style>
