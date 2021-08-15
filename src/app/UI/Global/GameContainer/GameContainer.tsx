import Game from "../../../Game/Core";
import { useEffect } from "react";

/**
 * Game container component. This component initializes the game
 * and stores relevent elements related to game
 * @returns {JSX}
 */
function GameContainer() {
    useEffect(() => {
        const canvas = document.getElementById("game-canvas") as HTMLCanvasElement,
            game = new Game(canvas);

        game.init();
    }, []);

    return (
        <div id="game-container">
            <canvas id="game-canvas"></canvas>
        </div>
    );
}

export default GameContainer;