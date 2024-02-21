<script lang="ts">
    import { projects } from "$lib/projects";
    import Footer from "./Footer.svelte";
    import Header from "./Header.svelte";
    import Project from "./Project.svelte";
    import FlowingGrid from "./flowingGrid/FlowingGrid.svelte";
</script>

<svelte:head>
    <title>Marcin Skic</title>
    <meta name="description" content="Marcin Skic's portfolio page" />
</svelte:head>
<Header --font-size="4rem" />
<main>
    <section id="projects" class="projects">
        <FlowingGrid list={projects} gap={8} let:item>
            <Project
                project={item}
                imageSlideDelay={Math.random() * 3000 - 1500}
            />
        </FlowingGrid>
    </section>
    <section id="contact" class="contact">
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
