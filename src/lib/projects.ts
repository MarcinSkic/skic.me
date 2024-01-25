import logo from "$lib/images/svelte-logo.svg";
import github from "$lib/images/github.svg";
import img1 from "$lib/images/img1.png";
import img2 from "$lib/images/img2.png";
import img3 from "$lib/images/img3.png";

export interface Project {
    name: string;
    description: string;
    images: {
        alt: string;
        src: string;
    }[];
    technologies: string[];
    url?: string;
    github?: string;
}

export const projects: Project[] = [
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
        url: "htpps://skic.me",
        github: "https://github.com/MarcinSkic/portfolio-website",
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
        url: "https://name-that-tune.vercel.app",
        github: "https://github.com/MarcinSkic/name-that-tune",
    },
];
