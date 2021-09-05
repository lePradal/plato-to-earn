export const mines: readonly Mine[] = Object.freeze([
    {
        index: 0,
        color: 'Branca',
        averageDS: 29,  
    },
    {
        index: 1,
        color: 'Verde',
        averageDS: 41,  
    },
    {
        index: 2,
        color: 'Azul',
        averageDS: 64,  
    },
    {
        index: 3,
        color: 'Vermelha',
        averageDS: 118,  
    },
    {
        index: 4,
        color: 'Dourada',
        averageDS: 180,
    },
]);

export interface Mine {
    index: number,
    color: string,
    averageDS: number,
}