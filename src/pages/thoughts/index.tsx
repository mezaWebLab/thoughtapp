import { useEffect, useState } from "react";
import NetworkManager from "src/app/Game/Managers/NetworkManager";

export default function ThoughtsPage(props: any) {
    const [coordinatesLoaded, setCoordinatesLoaded] = useState(false), 
        [userCoordinates, setUserCoordinates] = useState({ latitude: 0, longitude: 0 });

    function getGeneralLocation() {
        const networkManager = new NetworkManager();

        networkManager
            .getGeneralLocation()
            .then(location => {
                setUserCoordinates({ latitude: location.latitude, longitude: location.longitude });
                setCoordinatesLoaded(true);
            })
            .catch(err => {
                console.log("unable to get general location");
            })
    }

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((pos: GeolocationPosition) => {
                console.log(pos);
                setUserCoordinates({ latitude: pos.coords.latitude, longitude: pos.coords.longitude });
            }, () => getGeneralLocation());
        } else {
            getGeneralLocation();
        }
    }, [props.game]);
    
    return (
        <div>
            
        </div>
    )
}