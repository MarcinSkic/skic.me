<script>
    import HeaderBaner from "./HeaderBaner.svelte";

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
        --nav-distance-from-bottom: 40vh;
        position: sticky;
        top: calc(-100vh + var(--nav-height));
        z-index: 2;
        display: grid;
        grid-template:
            "baner baner" auto
            "nav nav" var(--nav-distance-from-bottom) / 1fr 1fr;
        gap: 3rem 1rem;
        align-content: end;
        justify-content: center;
        height: 100vh;
        color: var(--color-text-dark);
        background: linear-gradient(
            220deg,
            var(--color-bg-dark-l1),
            5%,
            var(--color-bg-dark),
            90%,
            var(--color-bg-dark-d1)
        );
        background-attachment: fixed;

        &__links-wrapper {
            display: contents;
        }

        &__links {
            position: sticky;
            bottom: calc(var(--nav-distance-from-bottom) - var(--nav-height));
            display: flex;
            grid-area: nav;
            gap: var(--font-size);
            align-items: center;
            align-self: end;
            justify-self: center;
            height: var(--nav-height);
            padding: 0 2vw;
            margin-right: 10rem;
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
