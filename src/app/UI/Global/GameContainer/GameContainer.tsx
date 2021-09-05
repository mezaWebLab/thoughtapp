import Game from "../../../Game/Core";
import { useEffect } from "react";

interface Props {
    onThoughtClick: Function;
}

/**
 * Game container component. This component initializes the game
 * and stores relevent elements related to game
 * @returns {JSX}
 */
function GameContainer(props: Props) {
    useEffect(() => {
        const canvas = document.getElementById("game-canvas") as HTMLCanvasElement,
            game = new Game(canvas, { onThoughtClick: props.onThoughtClick });

        game.init();

        // Initialize hammer JS. 
        // This library handles touch events
        // @ts-ignore
        const hammer = new Hammer(document.getElementById("game-canvas"), {});
        // @ts-ignore
        hammer.get("pan").set({ direction: Hammer.DIRECTION_ALL });
        // @ts-ignore
        hammer.get("swipe").set({ direction: Hammer.DIRECTION_ALL, threshold: 0 });
        hammer.on("swipe", (ev: any) => game.eventManager.emit("swipe", { velocityX: ev.velocityX, velocityY: ev.velocityY }));
    }, []);

    return (
        <div id="game-container">
            <canvas id="game-canvas"></canvas>
        </div>
    );
}

export default GameContainer;