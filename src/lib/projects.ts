import logo from "$lib/images/svelte-logo.svg";
import github from "$lib/images/github.svg";

export const projects = [
    {
        name: "Portfolio page",
        description: "Website you are looking at",
        images: [
            {
                alt: "Svelte logo",
                src: logo,
            },
            {
                alt: "Svelte logo",
                src: logo,
            },
            {
                alt: "Svelte logo",
                src: logo,
            },
            {
                alt: "Github logo",
                src: github,
            },
        ],
        technologies: ["Svelte", "Typescript", "SCSS"],
    },
    {
        name: "Name that tune",
        description:
            "Guess track title of your playlists and albums from Spotify",
        images: [
            {
                alt: "Svelte logo",
                src: logo,
            },
            {
                alt: "Github logo",
                src: github,
            },
        ],
        technologies: ["Next.js", "Typescript", "SCSS"],
    },
];
