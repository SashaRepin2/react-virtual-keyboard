import React, { MouseEventHandler } from "react";
import { BUTTON_TYPES, TKeyboardBtn } from "../../../interfaces/interface";
import "./Button.scss";

interface IButtonProps {
    button: TKeyboardBtn;
    onKeyDown: (button: TKeyboardBtn) => void;
    isShifted: boolean;
    isCapsed: boolean;
}

const Button: React.FC<IButtonProps> = ({ button, onKeyDown, isShifted, isCapsed }) => {
    const isActiveCaps: boolean = isCapsed && button.type === BUTTON_TYPES.CAPS;

    function getValueByCurrantState() {
        if (isShifted && button.value.shift) return button.value.shift;
        if (isCapsed) return button.value.default.toUpperCase();

        return button.value.default;
    }

    return (
        <button
            className={`button ${isActiveCaps ? "button--active" : ""}`}
            onClick={() => {
                onKeyDown(button);
            }}
            style={{ color: "#fff" }}
        >
            {button.value.shift && <div className="none-current">{getValueByCurrantState()}</div>}

            <div className="current">{getValueByCurrantState()}</div>
        </button>
    );
};

export default Button;
