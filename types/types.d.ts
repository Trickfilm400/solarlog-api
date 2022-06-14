export declare class Axios {
    private readonly host;
    private instance;

    constructor(host: string);

    fetch(keys: number[]): Promise<import("axios").AxiosResponse<any, any>>;
}


export declare class SolarLogAPI {
    private readonly host;
    private axios;
    private WRs;

    constructor(host: string, WRs: number[]);

    getStatusAndProduction(): Promise<{ status: { [index: string]: string }, production: { [index: string]: string } }>;
}
