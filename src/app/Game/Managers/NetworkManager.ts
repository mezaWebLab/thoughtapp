import Configuration from "../Configuration";
import axios from "axios";

class NetworkManager {
    config: Configuration;

    constructor() {
        this.config = new Configuration();
    }

    async fetchThoughts(): Promise<any> {
        const req = await axios.get(this.api(this.config.network.routes.thoughts));
        return req.data;
    }

    api(route: string): string {
        return this.config.network.apiUrl + route;
    } 
}

export default NetworkManager;