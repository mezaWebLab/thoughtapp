import { ReactNode } from "react";

interface props {
    children?: ReactNode;
}

export default function GameLayout(props: props) {
    return (
        <div className="game-layout">
            {props.children}
        </div>
    )
}