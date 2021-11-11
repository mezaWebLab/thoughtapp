interface Geolocation {
    latitude: number;
    longitude: number;
    city?: string;
    state?: string;
    zip?: string;
    countryCode?: string;
    countryName?: string;
}

export default Geolocation;