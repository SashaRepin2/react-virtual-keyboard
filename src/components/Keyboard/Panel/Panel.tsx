import React from "react";
import "./Panel.scss";

interface IPanelProps {
    isHidden: boolean;
    onHideHandler: (isHidden: boolean) => void;
    panelOptions?: {};
}

const Panel: React.FC<IPanelProps> = ({ isHidden, onHideHandler, panelOptions }) => {
    return (
        <div className={"panel cursor"}>
            <button
                className={"panel__hide panel--btn"}
                onClick={() => {
                    onHideHandler(!isHidden);
                }}
            >
                HIDE
            </button>
            <button className={"panel__fix panel--btn"} onClick={() => {}}>
                FIX
            </button>
        </div>
    );
};

export default Panel;
