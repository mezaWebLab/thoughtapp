import { useEffect, useState } from "react";
import NetworkManager from "src/app/Game/Managers/NetworkManager";
import MenuButton from "src/app/UI/Thoughts/MenuButton";
import GameLayout from "src/app/UI/Layout/GameLayout";
import { css } from "@emotion/css";

export default function ThoughtsPage(props: any) {
    const [coordinatesLoaded, setCoordinatesLoaded] = useState(false), 
        [userCoordinates, setUserCoordinates] = useState({ latitude: 0, longitude: 0 }),
        [locationPreviewText, setLocationPreviewText] = useState(""),
        styles = {
            header: css`
                color      : white;
                margin     : 30px auto 0 auto;
                text-align : center;

                div:nth-child(1) {
                    button {
                        border      : none;
                        display     : flex;
                        align-items : center;
                        background  : none;
                        margin      : 0 auto;
                        color       : white;

                        @keyframes spin {
                            0% { transform : rotate(0deg); }
                            100% { transform : rotate(360deg); }
                        }

                        span {
                            text-decoration : underline;
                            display         : flex;
                            align-items     : center;
                        }

                        img.spin {
                            animation : spin 1s linear infinite;
                            filter    : invert(1);
                            width     : 20px;
                        }

                        img.caret {
                            width       : 15px;
                            margin-left : 5px;
                            filter      : invert(1);
                        }
                    }
                }
            `,
            menu: css`
                position  : fixed;
                bottom    : 25px;
                left      : 50%;
                transform : translate(-50%);

                div {
                    &:nth-child(1) {
                        display         : flex;
                        justify-content : center;
                        margin-bottom   : 17px;
                    }

                    &:nth-child(2) {
                        white-space           : nowrap;
                        display               : grid;
                        grid-template-columns : 1fr 1fr 1fr;

                        button:nth-child(2) {
                            margin : 0px 15px;
                        }
                    }
                }
            `
        }

    function getGeneralLocation() {
        const networkManager = new NetworkManager();

        networkManager
            .location
            .getGeneralLocation()
            .then(location => {
                setUserCoordinates({ latitude: location.latitude, longitude: location.longitude });
                setLocationPreviewText(location.city as string);
                console.log(location.city);
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
                console.log(pos);
                setUserCoordinates({ latitude: pos.coords.latitude, longitude: pos.coords.longitude });
                setCoordinatesLoaded(true);
            }, () => getGeneralLocation());
        }
    }, [props.game]);

    useEffect(() => {
        if (coordinatesLoaded && props.game) props.game.thoughtManager.fetchThoughtsByCoords(userCoordinates);
    }, [coordinatesLoaded]);
    
    return (
        <GameLayout>
            <div id="page-thoughts">
                <header className={styles.header}>
                    <div>
                        <button>
                            <strong>Current Location:</strong>&nbsp;&nbsp;<span>{locationPreviewText.length > 0 ? locationPreviewText : <img className="spin" src="assets/icons/spinner-solid.svg" />}<img className="caret" src="assets/icons/caret-down-solid.svg" /></span>
                        </button>
                    </div>
                </header>
                <main className={styles.menu}>
                    <div>
                        <MenuButton 
                            setup="highlight"
                            icon="pencil-alt-solid" />
                    </div>
                    <div>
                        <MenuButton 
                            setup="main"
                            icon="location" />
                        <MenuButton 
                            setup="main"
                            icon="globe-solid" />
                        <MenuButton 
                            setup="main"
                            icon="user" />
                    </div>
                </main>
            </div>
        </GameLayout>
    )
}