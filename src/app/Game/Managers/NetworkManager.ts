import Configuration from "../Configuration";
import axios from "axios";

class NetworkManager {
    config: any;

    constructor() {
        const config = new Configuration();
        this.config = config.network;
    }

    async get(route: string): Promise<any> {
        const req = await axios.get(this.api(route));
        return req.data;
    }

    api(route: string): string {
        return this.config.apiUrl + route;
    } 
}

export default NetworkManager;