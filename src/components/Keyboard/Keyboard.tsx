import React from "react";
import Draggable from "react-draggable";
import Button from "./Button/Button";
import Panel from "./Panel/Panel";
import RowButtons from "./RowButtons/RowButtons";

import "./Keyboard.scss";
import { BUTTON_TYPES, IKeyboard, TInputKeyboard, TKeyboardBtn } from "../../interfaces/interface";

interface IKeyboardProps {
    input: TInputKeyboard | null;
    inputUpdateHanlder?: (value: TInputKeyboard | null) => void;
    options: IKeyboard;
}

const Keyboard: React.FC<IKeyboardProps> = ({ input, options }) => {
    const [states, setStates] = React.useState<IKeyboard>(options);
    const { defaultPosition, keys } = options;
    const [caretPosition, setCaretPosition] = React.useState<number>(0);
    // TODO: need optimization
    const [isHidden, setIsHidden] = React.useState<boolean>(false);
    const [isShifted, setIsShifted] = React.useState<boolean>(false);
    const [isCapsed, setIsCapsed] = React.useState<boolean>(false);

    const pressDefaultKey = (value: { default: string; shift?: string }) => {
        if (!input) return;

        if (isShifted && value.shift) {
            input.value += value.shift;
            setIsShifted((prev) => !prev);
        } else if (isCapsed) {
            input.value += value.default.toUpperCase();
        } else {
            input.value += value.default;
        }

        input.focus();
    };

    function pressEnter() {
        if (input && input.nodeName === "TEXTAREA") {
            input.value += "\n";
        }
    }

    function onKeyDown(button: TKeyboardBtn) {
        switch (button.type) {
            case BUTTON_TYPES.DEFAULT:
                pressDefaultKey(button.value);
                break;
            case BUTTON_TYPES.SHIFT:
                setIsShifted((prev) => !prev);
                break;
            case BUTTON_TYPES.CAPS:
                setIsCapsed((prev) => !prev);
                break;
            case BUTTON_TYPES.ENTER:
                pressEnter();
                break;
            case BUTTON_TYPES.SPACE:
                if (input) input.value += " ";
                break;
            case BUTTON_TYPES.TAB:
                if (input) input.value += "\t";
                break;
            default:
                break;
        }

        if (input) {
            const start: number = input.value.length;
            input.setSelectionRange(start, start);
        }
    }

    function onHideHandler(isHidden: boolean) {
        setIsHidden(isHidden);
    }
    return (
        <Draggable handle=".panel" bounds={"body"} defaultPosition={defaultPosition}>
            <div className="keyboard no-cursor">
                <Panel isHidden={isHidden} onHideHandler={onHideHandler} />
                <div className={isHidden ? "board hide" : "board"}>
                    {keys.map((row, rowIndex) => (
                        <RowButtons key={rowIndex}>
                            {row.map((btn, btnIndex) => (
                                <Button
                                    button={btn}
                                    key={btnIndex}
                                    onKeyDown={onKeyDown}
                                    isShifted={isShifted}
                                    isCapsed={isCapsed}
                                />
                            ))}
                        </RowButtons>
                    ))}
                </div>
            </div>
        </Draggable>
    );
};

export default React.memo(Keyboard);
