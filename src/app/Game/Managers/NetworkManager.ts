import Configuration from "../Configuration";
import axios from "axios";
import AuthManager from "./AuthManager";
import LocationManager from "./LocationManager";


/**
 * Network Manager class
 * Responsible for handling logic used to handle network
 * communication between client and API
 * @param {any} config - the global network configuration
 */
class NetworkManager {
    config: any;
    auth: AuthManager;
    location: LocationManager;

    constructor() {
        const config = new Configuration();
        this.config = config.network;
        this.auth = new AuthManager(config);
        this.location = new LocationManager(config);
    }

    /**
     * Makes a GET request to the api, using provided route
     * @param route - the api route to make a GET request
     * @returns {Promise<any>}
     */
    async get(route: string, auth: boolean = false): Promise<any> {
        const req = await axios.get(this.api(route), auth ? {
            headers: {
                Authorization: `Bearer ${ this.auth.getToken() }`
            }
        } : {});

        return req.data;
    }

    async post(route: string, data: any = {}, auth: boolean = false): Promise<any> {
        try {
            const req = await axios.post(this.api(route), data, auth ? {
                headers: {
                    Authorization: `Bearer ${ this.auth.getToken() }`
                }
            } : {});
    
            return req.data;
        } catch (e) {
            return false;
        }
        
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