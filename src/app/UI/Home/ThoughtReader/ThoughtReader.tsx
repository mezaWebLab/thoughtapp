import { useEffect, useState } from "react";
import ColorUtils from "../../../Game/Utils/ColorUtils";
import { useRouter } from "next/router";

interface Props {
    thoughtData?: any;
    onExit?: Function;
}

export default function ThoughtReader(props: Props) {
    const router = useRouter(),
        [state, setState] = useState({
            height: "0px",
            width: "0px",
            contentContainerWidth: "0px",
            contentContainerHeight: "0px"
        }),
        handlers = {
            configure() {
                let diameter = window.innerHeight + 15;
                
                setState({
                    height: diameter + "px",
                    width: diameter + "px",
                    contentContainerWidth: diameter > window.innerWidth ? "90vw" : "50%",
                    contentContainerHeight: diameter > window.innerWidth ? "70vh" : "80vh"
                });
            }
        }

    useEffect(() => {
        handlers.configure();
        window.addEventListener("resize", () => handlers.configure());
    }, []);

    return (
        <div className="thought-reader">
            <div 
                style={{ 
                    backgroundColor: ColorUtils.pSBC(.6, props.thoughtData.hex) as string, 
                    width: state.width, 
                    height: state.height,
                    boxShadow: `0px 0px 50px 34px ${ props.thoughtData.hex }` }}
                className="thought-wrapper">
                <div 
                    style={{ width: state.contentContainerWidth, height: state.contentContainerHeight }}
                    className="thought-content">
                    <div className="top-menu">
                        <button onClick={() => router.push("/")}>
                            <img src="/thought-reader/left-arrow.svg" />
                        </button>
                    </div>
                    <div className="header">

                    </div>
                    <div className="body">
                        {props.thoughtData.body}
                    </div>
                    <div className="footer">

                    </div>
                </div>
            </div>
        </div>
    );
}