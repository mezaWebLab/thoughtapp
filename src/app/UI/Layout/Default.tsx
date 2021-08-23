import GameContainer from "../Global/GameContainer/GameContainer";
import ThoughtReader from "../Home/ThoughtReader/ThoughtReader";
import { useState } from "react";
import { useRouter } from 'next/router'

/**
 * The default layout component
 * @param {any} props - The components props
 * @returns {JSX}
 */
export default function DefaultLayout(props: any) {
    const router = useRouter();

    return (
        <div className="default-layout">
            {props.children}
        </div>
    );
}