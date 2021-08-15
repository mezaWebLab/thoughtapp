import GameContainer from "../Global/GameContainer/GameContainer";

/**
 * The default layout component
 * @param {any} props - The components props
 * @returns {JSX}
 */
export default function DefaultLayout(props: any) {
    return (
        <div className="default-layout">
            <GameContainer />
            {props.children}
        </div>
    );
}