export declare class SolarLogAPI {
    private readonly host;
    private WRs;
    constructor(host: string, WRs: number[]);
    getStatusAndProduction(): Promise<{
        status: {
            [index: string]: string;
        };
        production: {
            [index: string]: string;
        };
    }>;
}
