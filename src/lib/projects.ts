import img1 from "$lib/images/img1.png";
import img2 from "$lib/images/img2.png";
import img3 from "$lib/images/img3.png";
import name_that_tune1 from "$lib/images/projects/name_that_tune/selection.png";
import name_that_tune2 from "$lib/images/projects/name_that_tune/game.png";
import name_that_tune3 from "$lib/images/projects/name_that_tune/guessed.png";
import laser_inc_idle_miner1 from "$lib/images/projects/laser_inc_idle_miner/game.webp";
import laser_inc_idle_miner2 from "$lib/images/projects/laser_inc_idle_miner/lasers_shop.webp";
import laser_inc_idle_miner3 from "$lib/images/projects/laser_inc_idle_miner/upgrades_shop.webp";
import digishelf_1 from "$lib/images/projects/digishelf/main.png";
import digishelf_2 from "$lib/images/projects/digishelf/form.png";
import digishelf_3 from "$lib/images/projects/digishelf/reports.png";
import type { MatrixElement } from "../routes/flowingGrid/math";

export interface Project {
    id: string;
    name: string;
    description: string;
    imagesAspectRatio: number;
    images: {
        alt: string;
        src: string;
    }[];
    technologies: string[];
    url?: string;
    github?: string;
    rows?: number;
}

export const projects: MatrixElement<Project>[] = [
    {
        item: {
            id: "laser_inc_idle_miner",
            name: "Laser Inc. Idle Miner",
            description:
                "Idle game where you mine with lasers to earn as much money as you can, also physics based!",
            imagesAspectRatio: 0.5625,
            images: [
                {
                    alt: "Game view",
                    src: laser_inc_idle_miner1,
                },
                {
                    alt: "Lasers shop",
                    src: laser_inc_idle_miner2,
                },
                {
                    alt: "Upgrades shop",
                    src: laser_inc_idle_miner3,
                },
            ],
            technologies: ["unity", "csharp"],
            url: "https://play.google.com/store/apps/details?id=laser.inc.idle.miner&hl=en_US",
        },
        rows: 2,
    },
    {
        item: {
            id: "digishelf",
            name: "Digishelf",
            description: "Website for collecting data about popculture",
            imagesAspectRatio: 0.98,
            images: [
                {
                    alt: "Library page",
                    src: digishelf_1,
                },
                {
                    alt: "Work creation form",
                    src: digishelf_2,
                },
                {
                    alt: "Reports page",
                    src: digishelf_3,
                },
            ],
            technologies: ["next", "express", "mongodb", "typescript", "scss"],
            url: "https://engineer-project-web.vercel.app",
            github: "https://github.com/pollubMsMsEs/engineer-project-web",
        },
        rows: 1,
    },
    {
        item: {
            id: "name_that_tune",
            name: "Name that tune",
            description:
                "App where you can guess tracks from your playlists and albums on Spotify",
            imagesAspectRatio: 1.263157895,
            images: [
                {
                    alt: "Tracks selection view",
                    src: name_that_tune1,
                },
                {
                    alt: "Round view",
                    src: name_that_tune2,
                },
                {
                    alt: "Track guessed modal",
                    src: name_that_tune3,
                },
            ],
            technologies: ["next", "typescript", "scss"],
            url: "https://name-that-tune.vercel.app",
            github: "https://github.com/MarcinSkic/name-that-tune",
        },
        rows: 1,
    },
    {
        item: {
            id: "portfolio",
            name: "Portfolio page",
            description: "Website you are looking at",
            imagesAspectRatio: 1,
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
        rows: 1,
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
    unity: "https://img.shields.io/badge/Unity-100000?style=for-the-badge&logo=unity&logoColor=white",
    csharp: "https://img.shields.io/badge/C%23-239120?style=for-the-badge&logo=c-sharp&logoColor=white",
    mongodb:
        "https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white",
    express:
        "https://img.shields.io/badge/Express.js-404D59?style=for-the-badge",
};
