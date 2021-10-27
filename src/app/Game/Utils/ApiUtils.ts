import Configuration from "../Configuration";

class ApiUtils {
    static url(route: string): string {
        const config = new Configuration();
        return config.network.apiUrl + route;
    }
}

export default ApiUtils;