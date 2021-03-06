import Game from "../../../Game/Core";
import { useEffect } from "react";
import { css } from "@emotion/css";
import { NextRouter } from "next/router";
import { useRouter } from "next/router";

interface Props {
    onGameLaunch: Function;
    router: NextRouter;
    onThoughtClick: Function;
}

/**
 * Game container component. This component initializes the game
 * and stores relevent elements related to game
 * @returns {JSX}
 */
function GameContainer(props: Props) {
    const router = useRouter(),
        styles = {
            main: css`
                width    : 100vw;
                height   : 100vh;
                position : fixed;
                top      : 0;
                left     : 0;
                overflow : hidden;
                z-index  : -1;

                div {
                    position   : absolute;
                    z-index    : 2;
                    top        : 0px;
                    left       : 0px;
                    width      : 100vw;
                    height     : 100vh;
                    background : rgba(30, 30, 30, 0.58);
                }

                canvas {
                    position : absolute;
                    width    : 100%;
                    z-index  : 1;
                    display  : block;
                    height   : 100%;
                }
            `
        };

    function isRestrictedRoute(pathname: string): boolean {
        switch (pathname) {
            case "/":
                return false;
            case "/sign-up":
                return false;
            default: 
                return true;
        }
    }

    useEffect(() => {
        const canvas = document.getElementById("game-canvas") as HTMLCanvasElement,
            game = new Game(canvas, { 
                demo: !isRestrictedRoute(props.router.pathname),
                events: {
                    onThoughtClick: props.onThoughtClick
                }
            });

        game.init();
        props.onGameLaunch(game);
    }, []);

    return (
        <div
            className={styles.main} 
            id="game-container">
            {router.pathname !== "/thoughts" ? <div></div> : null}
            <canvas id="game-canvas"></canvas>
        </div>
    );
}

export default GameContainer;