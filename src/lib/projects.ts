import portfolio1 from "$lib/images/projects/portfolio/header.png";
import portfolio2 from "$lib/images/projects/portfolio/projects.png";
import harmonify_1 from "$lib/images/projects/harmonify/setup.png";
import harmonify_2 from "$lib/images/projects/harmonify/round.png";
import harmonify_3 from "$lib/images/projects/harmonify/roundResult.png";
import harmonify_4 from "$lib/images/projects/harmonify/result.png";
import laser_inc_idle_miner1 from "$lib/images/projects/laser_inc_idle_miner/game.webp";
import laser_inc_idle_miner2 from "$lib/images/projects/laser_inc_idle_miner/lasers_shop.webp";
import laser_inc_idle_miner3 from "$lib/images/projects/laser_inc_idle_miner/upgrades_shop.webp";
import digishelf_1 from "$lib/images/projects/digishelf/main.png";
import digishelf_2 from "$lib/images/projects/digishelf/form.png";
import digishelf_3 from "$lib/images/projects/digishelf/reports.png";
import readmetech1 from "$lib/images/projects/readme_tech_generator/main.png";
import readmetech2 from "$lib/images/projects/readme_tech_generator/showcase.png";
import sara1 from "$lib/images/projects/sara/title_screen.png";
import sara2 from "$lib/images/projects/sara/town.png";
import sara3 from "$lib/images/projects/sara/fight.png";
import sara4 from "$lib/images/projects/sara/crafting.png";
import type { MatrixElement } from "../routes/flowingGrid/math";

export const technologies = {
  svelte:
    "https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00",
  typescript:
    "https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white",
  next: "https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white",
  scss: "https://img.shields.io/badge/Scss-CC6699?style=for-the-badge&logo=sass&logoColor=white",
  unity:
    "https://img.shields.io/badge/Unity-100000?style=for-the-badge&logo=unity&logoColor=white",
  csharp:
    "https://img.shields.io/badge/C%23-239120?style=for-the-badge&logo=c-sharp&logoColor=white",
  mongodb:
    "https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white",
  express: "https://img.shields.io/badge/Express.js-404D59?style=for-the-badge",
  tailwind:
    "https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white",
  vue: "https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vue.js&logoColor=4FC08D",
  dotnet:
    "https://img.shields.io/badge/.NET-5C2D91?style=for-the-badge&logo=.net&logoColor=white",
} as const;

type Techs = keyof typeof technologies;

export interface Project {
  id: string;
  name: string;
  description: string;
  imagesAspectRatio: number;
  images: {
    alt: string;
    src: string;
  }[];
  technologies: Techs[];
  urls: {
    site?: string;
    github?: string;
    yt?: string;
  };
  rows?: number;
}

export const projects: MatrixElement<Project>[] = [
  {
    item: {
      id: "laser_inc_idle_miner",
      name: "Laser Inc. Idle Miner",
      description:
        "Idle game where user mines with lasers to earn as much money as he can, also physics based!",
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
      urls: {
        github: "https://github.com/MarcinSkic/laser-inc-idle-miner",
      },
    },
    rows: 2,
  },
  {
    item: {
      id: "digishelf",
      name: "Digishelf",
      description:
        'My engineering project on subject: "Application for collecting information about popculture"',
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
      urls: {
        site: "https://digishelf-app.vercel.app",
        github: "https://github.com/MarcinSkic/digishelf",
      },
    },
    rows: 1,
  },
  {
    item: {
      id: "harmonify",
      name: "Harmonify",
      description:
        "Web game where users can guess tracks from their playlists and albums on Spotify",
      imagesAspectRatio: 1.35,
      images: [
        {
          alt: "Game setup view",
          src: harmonify_1,
        },
        {
          alt: "Round view",
          src: harmonify_2,
        },
        {
          alt: "Round result view",
          src: harmonify_3,
        },
        {
          alt: "Game result view",
          src: harmonify_4,
        },
      ],
      technologies: ["vue", "typescript", "tailwind", "dotnet", "csharp"],
      urls: {
        site: "https://harmonify-tune.vercel.app/",
        github: "https://github.com/kaczkadevteam/harmonify",
      },
    },
    rows: 1,
  },
  {
    item: {
      id: "portfolio",
      name: "Portfolio",
      description: "Website you are currently looking at",
      imagesAspectRatio: 1.03,
      images: [
        {
          alt: "Header",
          src: portfolio1,
        },
        {
          alt: "Projects view",
          src: portfolio2,
        },
      ],
      technologies: ["svelte", "typescript", "scss"],
      urls: {
        site: "https://skic.me",
        github: "https://github.com/MarcinSkic/portfolio-website",
      },
    },
    rows: 1,
  },
  {
    item: {
      id: "readme_tech_generator",
      name: "Readme Tech Generator",
      description:
        "Website for generating summary of the technology used in repository, suitable for README footer",
      imagesAspectRatio: 1.03,
      images: [
        {
          alt: "Tech list",
          src: readmetech1,
        },
        {
          alt: "Generated markdown showcase",
          src: readmetech2,
        },
      ],
      technologies: ["svelte", "typescript", "tailwind"],
      urls: {
        site: "https://marcinskic.github.io/readme-tech-generator/",
        github: "https://github.com/MarcinSkic/readme-tech-generator",
      },
    },
    rows: 1,
  },
  {
    item: {
      id: "sara",
      name: "Sara",
      description:
        "Desktop game developed by a high school team for T3G: National Game Development Competition",
      imagesAspectRatio: 1.777,
      images: [
        {
          alt: "Main menu",
          src: sara1,
        },
        {
          alt: "Landscape view",
          src: sara2,
        },
        {
          alt: "Fighting robot screenshot",
          src: sara3,
        },
        {
          alt: "Crafting view",
          src: sara4,
        },
      ],
      technologies: ["unity", "csharp"],
      urls: {
        yt: "https://www.youtube.com/live/P9iaFoaSOXI?t=4313s",
        site: "https://t3g.pl/bez-kategorii/znamy-zwyciezcow-turnieju-trojgamicznego/",
      },
    },
    rows: 1,
  },
];
