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
        technologies: ["svelte", "typescript", "scss"],
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
        technologies: ["next", "typescript", "scss"],
        url: "https://name-that-tune.vercel.app",
        github: "https://github.com/MarcinSkic/name-that-tune",
    },
];

export const technologies: {
    [key: string]: string;
} = {
    svelte: "https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00",
    typescript:
        "https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white",
    next: "https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white",
    scss: "https://img.shields.io/badge/Scss-CC6699?style=for-the-badge&logo=sass&logoColor=white",
};
