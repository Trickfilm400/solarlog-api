import axios, {AxiosInstance} from "axios";

export class Axios {
    private readonly host: string;
    private instance: AxiosInstance;
    constructor(host: string) {
        this.host = host;
        this.instance = axios.create({
            baseURL: `http://${this.host}/`,
            timeout: 10000
        });
    }

    fetch(keys: number[]) {
        let data = {};
        keys.forEach(e => data[e.toString()] = null)
        return this.instance.post("/getjp", data)
    }

}
