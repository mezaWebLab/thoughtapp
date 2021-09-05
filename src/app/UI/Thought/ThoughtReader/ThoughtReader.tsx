import { useEffect, useState } from "react";
import { useRouter } from "next/router";

interface Props {
    thoughtData?: any;
    onExit?: Function;
    hex?: string | string[] | undefined;
}

function pickTextColorBasedOnBgColorSimple(bgColor:  any, lightColor:  any, darkColor:  any) {
    var color = (bgColor.charAt(0) === '#') ? bgColor.substring(1, 7) : bgColor,
        r = parseInt(color.substring(0, 2), 16), // hexToR
        g = parseInt(color.substring(2, 4), 16), // hexToG
        b = parseInt(color.substring(4, 6), 16); // hexToB
    return (((r * 0.299) + (g * 0.587) + (b * 0.114)) > 186) ? darkColor : lightColor;
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
        <div 
            style={{ color: pickTextColorBasedOnBgColorSimple(props.thoughtData.hex, '#FFFFFF', '#000000') }}
            className="thought-reader">
            <div className="thought-content">
                <div className="header">
                    
                </div>
                <div className="body">
                    {props.thoughtData.body}
                </div>
                <div className="footer">

                </div>
            </div>
        </div>
    );
}