<script>
    import HeaderBaner from "./HeaderBaner.svelte";
    import Slider from "./Slider.svelte";
    import TextSlider from "./TextSlider.svelte";

    const descriptions = [
        "Web Developer",
        "Technology Enthusiast",
        "Game Developer",
    ];

    const links = [
        {
            href: "#projects",
            title: "Projects",
        },
        {
            href: "#contact",
            title: "Contact",
        },
    ];
</script>

<header class="header">
    <HeaderBaner />
    <nav class="header__links-wrapper">
        <ul class="header__links">
            {#each links as link}
                <li>
                    <a class="header__links__link" href={link.href}>
                        {link.title}
                    </a>
                </li>
            {/each}
        </ul>
    </nav>
</header>

<style lang="scss">
    .header {
        --nav-height: 6rem;
        position: sticky;
        top: calc(-100vh + var(--nav-height));
        z-index: 2;
        display: grid;
        grid-template:
            "baner baner" auto
            "nav nav" 40vh / 1fr 1fr;
        gap: 3rem 1rem;
        align-content: end;
        justify-content: center;
        height: 100vh;
        color: var(--color-text-dark);
        background-color: var(--color-bg-dark);

        &__links-wrapper {
            position: sticky;
            bottom: calc(40vh - var(--nav-height));
            align-self: end;
        }

        &__links {
            display: flex;
            gap: var(--font-size);
            align-items: center;
            height: var(--nav-height);
            padding: 0 2vw;
            margin: 0;
            font-size: calc(var(--font-size) / 1.6);
            list-style: none;

            &__link {
                color: var(--color-text-dark);
                background-image: linear-gradient(var(--color-text-dark) 0 0);
                background-repeat: no-repeat;
                background-position: 200% 100%;
                background-size: 200% 0.08em;
                transition: background-position 0.3s;

                &:hover {
                    background-position: 100% 100%;
                }
            }
        }
    }
</style>
