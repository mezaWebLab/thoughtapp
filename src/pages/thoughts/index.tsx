import { useEffect, useState } from "react";
import NetworkManager from "src/app/Game/Managers/NetworkManager";

export default function ThoughtsPage(props: any) {
    const [coordinatesLoaded, setCoordinatesLoaded] = useState(false), 
        [userCoordinates, setUserCoordinates] = useState({ latitude: 0, longitude: 0 });

    function getGeneralLocation() {
        const networkManager = new NetworkManager();

        networkManager
            .location
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
        if (props.game) {
            const networkManager = new NetworkManager();

            networkManager.location.getPreciseLocation((pos: GeolocationPosition) => {
                setUserCoordinates({ latitude: pos.coords.latitude, longitude: pos.coords.longitude });
                setCoordinatesLoaded(true);
            }, () => getGeneralLocation());
        }
    }, [props.game]);

    useEffect(() => {
        if (coordinatesLoaded && props.game) {
            props.game.thoughtManager.fetchThoughtsByCoords(userCoordinates);
        }
    }, [coordinatesLoaded]);
    
    return (
        <div>
            
        </div>
    )
}