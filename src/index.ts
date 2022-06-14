import {Axios} from "./lib/axios";


export class SolarLogAPI {
    private readonly host: string;
    private axios: Axios;
    private WRs: number[];

    constructor(host: string, WRs: number[]) {
        this.host = host;
        this.WRs = WRs;
        this.axios = new Axios(this.host);
    }

    getStatusAndProduction(): Promise<{ status: { [index: string]: string }, production: { [index: string]: string } }> {
        return new Promise((resolve, reject) => {
            const res = {
                status: {},
                production: {}
            };
            this.axios.fetch([608, 782]).then(data => {
                this.WRs.forEach(number => {
                    res.status[number] = data.data["608"][number.toString()];
                    res.production[number] = data.data["782"][number.toString()];
                });
                resolve(res);
            }).catch(reject);
        });
    }
}
