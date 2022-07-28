import React from "react";
import Keyboard from "../components/Keyboard/Keyboard";
import configKeyboard from "../utils/configKeyboard";

const TestKeyboardPage: React.FC = () => {
    const [currentInputEl, setCurrentInputEl] = React.useState<
        HTMLInputElement | HTMLTextAreaElement | null
    >(null);

    React.useEffect(() => {
        console.log(currentInputEl?.value);
    }, [currentInputEl]);

    return (
        <>
            <input
                onFocus={(e) => {
                    setCurrentInputEl(e.target);
                }}
            />
            <textarea
                onFocus={(e) => {
                    setCurrentInputEl(e.target);
                }}
            />
            <Keyboard options={configKeyboard} input={currentInputEl} />
        </>
    );
};

export default TestKeyboardPage;
