<script>
    import { projects } from "$lib/projects";
    import Header from "./Header.svelte";
    import ImageSlider from "./ImageSlider.svelte";
    import Project from "./Project.svelte";
</script>

<svelte:head>
    <title>Marcin Skic</title>
    <meta name="description" content="Marcin Skic's portfolio page" />
</svelte:head>

<Header --font-size="4rem" />
<main>
    <section id="projects" class="projects">
        <h2 class="projects__header">Projects</h2>
        <div class="projects__grid">
            {#each projects as project}
                <Project {project} />
            {/each}
        </div>
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
        max-width: 64rem;
        margin: 0 auto;
    }

    .projects {
        padding: 20px;
        &__header {
            font-size: 2rem;
            font-weight: 700;
        }

        &__grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            grid-auto-rows: 200px;
            gap: 40px;
        }
    }
</style>
