export const slp: Rewards = Object.freeze({
    daily: 75,
    ranges: [
        {
            index: 0,
            minTrophy: 0,
            maxTrophy: 799,
            slpRewards: 0,
        },
        {
            index: 1,
            minTrophy: 800,
            maxTrophy: 999,
            slpRewards: 1,
        },
        {
            index: 2,
            minTrophy: 1000,
            maxTrophy: 1099,
            slpRewards: 3,
        },
        {
            index: 3,
            minTrophy: 1100,
            maxTrophy: 1299,
            slpRewards: 6,
        },
        {
            index: 4,
            minTrophy: 1300,
            maxTrophy: 1499,
            slpRewards: 9,
        },
        {
            index: 5,
            minTrophy: 1500,
            maxTrophy: 1799,
            slpRewards: 12,
        },
        {
            index: 6,
            minTrophy: 1800,
            maxTrophy: 1999,
            slpRewards: 15,
        },
        {
            index: 7,
            minTrophy: 2000,
            maxTrophy: 2199,
            slpRewards: 18,
        },
        {
            index: 8,
            minTrophy: 2200,
            maxTrophy: 2299,
            slpRewards: 21,
        },
    ],
});

export interface Rewards {
    daily: number;
    ranges: Range[],
}

export interface Range {
    index: number,
    minTrophy: number,
    maxTrophy: number,
    slpRewards: number,
}