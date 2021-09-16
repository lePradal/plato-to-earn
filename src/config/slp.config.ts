export const slp: Rewards = Object.freeze({
    daily: 75,
    ranges: [
        {
            index: 0,
            minTrophy: 1200,
            maxTrophy: 1249,
            slpRewards: 6,
        },
        {
            index: 1,
            minTrophy: 1250,
            maxTrophy: 1299,
            slpRewards: 7,
        },
        {
            index: 2,
            minTrophy: 1300,
            maxTrophy: 1349,
            slpRewards: 8,
        },
        {
            index: 3,
            minTrophy: 1350,
            maxTrophy: 1399,
            slpRewards: 9,
        },
        {
            index: 4,
            minTrophy: 1400,
            maxTrophy: 1449,
            slpRewards: 10,
        },
        {
            index: 5,
            minTrophy: 1450,
            maxTrophy: 1499,
            slpRewards: 11,
        },
        {
            index: 6,
            minTrophy: 1500,
            maxTrophy: 1549,
            slpRewards: 12,
        },
        {
            index: 7,
            minTrophy: 1550,
            maxTrophy: 1599,
            slpRewards: 12,
        },
        {
            index: 8,
            minTrophy: 1600,
            maxTrophy: 1649,
            slpRewards: 14,
        },
        {
            index: 9,
            minTrophy: 1650,
            maxTrophy: 1699,
            slpRewards: 15,
        },
        {
            index: 10,
            minTrophy: 1700,
            maxTrophy: 1749,
            slpRewards: 16,
        },
        {
            index: 11,
            minTrophy: 1750,
            maxTrophy: 1799,
            slpRewards: 17,
        },
        {
            index: 12,
            minTrophy: 1800,
            maxTrophy: 1849,
            slpRewards: 18,
        },
        {
            index: 13,
            minTrophy: 1850,
            maxTrophy: 1899,
            slpRewards: 19,
        },
        {
            index: 14,
            minTrophy: 1900,
            maxTrophy: 1949,
            slpRewards: 20,
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