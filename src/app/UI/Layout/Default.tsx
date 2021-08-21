import GameContainer from "../Global/GameContainer/GameContainer";
import ThoughtReader from "../Home/ThoughtReader/ThoughtReader";
import { useState } from "react";

/**
 * The default layout component
 * @param {any} props - The components props
 * @returns {JSX}
 */
export default function DefaultLayout(props: any) {
    const [showThoughtReader, setShowThoughtReader] = useState(false),
        [thoughtData, setThoughtData] = useState({}),
        handlers = {
            onThoughtClick(thoughtData: any) {
                console.log(thoughtData);
                setThoughtData(thoughtData);
                setShowThoughtReader(true);
            }
        };

    return (
        <div className="default-layout">
            {showThoughtReader ? <ThoughtReader thoughtData={thoughtData} /> : null}
            <GameContainer onThoughtClick={(thoughtData: any) => handlers.onThoughtClick(thoughtData)} />
            {props.children}
        </div>
    );
}