import Configuration from "../Configuration";
import axios from "axios";

/**
 * Network Manager class
 * Responsible for handling logic used to handle network
 * communication between client and API
 * @param {any} config - the global network configuration
 */
class NetworkManager {
    config: any;

    constructor() {
        const config = new Configuration();
        this.config = config.network;
    }

    /**
     * Makes a GET request to the api, using provided route
     * @param route - the api route to make a GET request
     * @returns {Promise<any>}
     */
    async get(route: string): Promise<any> {
        const req = await axios.get(this.api(route));
        return req.data;
    }

    async fetchThoughtById(id: number): Promise<any> {
        return await this.get("/thought-by-id?id=" + id);
    }

    /**
     * Returns api URL
     * @param route 
     * @returns 
     */
    api(route: string): string {
        return this.config.apiUrl + route;
    } 
}

export default NetworkManager;