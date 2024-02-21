<script lang="ts">
    import { projects } from "$lib/projects";
    import { onMount } from "svelte";
    import Footer from "./Footer.svelte";
    import Header from "./Header.svelte";
    import Project from "./Project.svelte";
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
        <h2>Contact</h2>
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
        scroll-margin-top: var(--nav-height);
    }
</style>
