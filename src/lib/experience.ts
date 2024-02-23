export interface Experience {
    began_at: Date;
    finished_at?: Date;
    title: string;
    description: string;
    roles: string[];
    category: string;
}

export const experience: Experience[] = [
    {
        began_at: new Date("2022-11-01"),
        finished_at: new Date("2024-01-01"),
        title: "Misty Bytes",
        description: `I created mobile idle game <a href="#laser_inc_idle_miner">Laser Inc. Idle Miner</a> together with one person for a contract`,
        roles: ["developer", "designer"],
        category: "gamedev",
    },
    {
        began_at: new Date("2020-12-01"),
        finished_at: new Date("2021-10-01"),
        title: "Reality Unit",
        description: `I took part in an "arena" course and developed mobile game prototypes based on existing designs`,
        roles: ["developer"],
        category: "gamedev",
    },
    {
        began_at: new Date("2019-12-01"),
        finished_at: new Date("2020-11-01"),
        title: "T3G",
        description: `During high school, I took part as a team in the T3G national competition where we created the video game <a href="#sara">Sara</a>`,
        roles: ["developer", "designer"],
        category: "gamedev",
    },
];
