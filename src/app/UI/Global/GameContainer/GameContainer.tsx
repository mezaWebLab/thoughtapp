import Game from "../../../Game/Core";
import { useEffect } from "react";
import { css } from "@emotion/css";

interface Props {
    onThoughtClick: Function;
}

/**
 * Game container component. This component initializes the game
 * and stores relevent elements related to game
 * @returns {JSX}
 */
function GameContainer(props: Props) {
    const styles = {
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

    useEffect(() => {
        const canvas = document.getElementById("game-canvas") as HTMLCanvasElement,
            game = new Game(canvas, { onThoughtClick: props.onThoughtClick });

        game.init();
    }, []);

    return (
        <div
            className={styles.main} 
            id="game-container">
            <div></div>
            <canvas id="game-canvas"></canvas>
        </div>
    );
}

export default GameContainer;