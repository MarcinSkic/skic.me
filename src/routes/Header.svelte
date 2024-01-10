<script>
    import TextSlider from "./TextSlider.svelte";

    const descriptions = [
        "Web Developer",
        "Game Developer",
        "Technology Enthusiast",
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
    <h1 class="header__title">
        Hi, <br />
        I am <span class="name">Marcin</span> <br />
        <TextSlider
            texts={descriptions}
            duration={5000}
            animationDirection="right"
        />
    </h1>
    <div class="header__photo"><img src="/" alt="person" /></div>
    <nav>
        <ul class="header__links">
            {#each links as link}
                <li>
                    <a class="header__links__link" href={link.href}
                        >{link.title}</a
                    >
                </li>
            {/each}
        </ul>
    </nav>
</header>

<style lang="scss">
    .header {
        display: grid;
        grid-template:
            "title photo" auto
            "nav nav" auto / auto auto;
        gap: 3rem 1rem;
        place-content: center;
        height: 100vh;
        background-color: #0f172a;

        &__title {
            grid-area: title;
            font-size: var(--font-size);
            color: white;
            text-align: start;

            .name {
                color: #eab308;
            }
        }

        &__photo {
            grid-area: photo;
        }

        &__links {
            display: flex;
            gap: var(--font-size);
            align-items: center;
            padding: 0;
            margin: 0;
            font-size: calc(var(--font-size) / 1.6);
            list-style: none;

            &__link {
                background-image: linear-gradient(white 0 0);
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
