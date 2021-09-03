export class CoinQuote {
    public USDBRL: Coin;
    public EURBRL: Coin;
    public BTCBRL: Coin;
    public ETHBRL: Coin;

    constructor() {
        this.USDBRL = new Coin();
        this.EURBRL = new Coin();
        this.BTCBRL = new Coin();
        this.ETHBRL = new Coin();
    }
}

export class Coin {
    public name: string;
    public code: string;
    public high: number;
    public low: number;
    public bid: number;
    public ask: number;

    constructor() {
        this.name = '';
        this.code = '';
        this.high = 0;
        this.low = 0;
        this.bid = 0;
        this.ask = 0;
    }

}