import { useEffect, useState } from "react";
import ColorUtils from "../../../Game/Utils/ColorUtils";

interface Props {
    thoughtData?: any;
    onExit?: Function;
}

export default function ThoughtReader(props: Props) {
    const [state, setState] = useState({
            height: "0px",
            width: "0px",
            contentContainerWidth: "0px"
        }),
        handlers = {
            configure() {
                let diameter = window.innerHeight + 15;
                
                setState({
                    height: diameter + "px",
                    width: diameter + "px",
                    contentContainerWidth: diameter > window.innerWidth ? "90vw" : "90%"
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
                    style={{ width: state.contentContainerWidth }}
                    className="thought-content">
                    <div className="top-menu">
                        <img src="/thought-reader/left-arrow.svg" />
                    </div>
                    <div className="header">

                    </div>
                    <div className="body">

                    </div>
                    <div className="footer">

                    </div>
                </div>
            </div>
        </div>
    );
}