import logo from "$lib/images/svelte-logo.svg";
import github from "$lib/images/github.svg";
import img1 from "$lib/images/img1.png";
import img2 from "$lib/images/img2.png";
import img3 from "$lib/images/img3.png";

export const projects = [
    {
        name: "Portfolio page",
        description: "Website you are looking at",
        images: [
            {
                alt: "Image 1",
                src: img1,
            },
            {
                alt: "Image 2",
                src: img2,
            },
            {
                alt: "Image 3",
                src: img3,
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
            {
                alt: "Svelte logo",
                src: logo,
            },
        ],
        technologies: ["Next.js", "Typescript", "SCSS"],
    },
];
