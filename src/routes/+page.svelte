<script lang="ts">
    import { projects } from "$lib/projects";
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
        <h2 class="projects__header">Projects</h2>
        <FlowingGrid list={projects} let:item>
            <Project project={item} />
        </FlowingGrid>
    </section>
    <section id="contact">
        <h2>Contact</h2>
    </section>
</main>

<style lang="scss">
    main {
        box-sizing: border-box;
        display: grid;
        flex: 1;
        flex-direction: column;

        width: 100%;
        margin: 0 auto;
    }

    .projects {
        padding: 20px;
        &__header {
            font-size: 2rem;
            font-weight: 700;
        }
    }
</style>
