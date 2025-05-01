export class SolarLogAPI {
    private readonly host: string;
    private WRs: number[];

    constructor(host: string, WRs: number[]) {
        this.host = host;
        this.WRs = WRs;
    }

    getStatusAndProduction(): Promise<{
        status: { [index: string]: string },
        production: { [index: string]: string }
    }> {
        return new Promise((resolve, reject) => {
            const res = {
                status: {},
                production: {}
            };
            const body = {
                //WR status
                "608": null,
                //WATT generation
                "782": null,
            }
            fetch(`http://${this.host}/getjp`, {
                method: "POST",
                body: JSON.stringify(body),
                signal: AbortSignal.timeout(10_000)
            })
                .then(res => res.json())
                .then(data => {
                    this.WRs.forEach(number => {
                        res.status[number] = data["608"][number.toString()];
                        res.production[number] = data["782"][number.toString()];
                    });
                    resolve(res);
                }).catch(reject);
        });
    }
}
