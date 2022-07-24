import React from "react";
import { VirtualKeyboard } from "../../models/Keyboard";
import "./Keyboard.css";

interface KeyboardProps {
    keyboard: VirtualKeyboard;
}

const Keyboard: React.FC<KeyboardProps> = ({ keyboard }) => {
    return <div className={"keyboard"}>Keyboard</div>;
};

export default Keyboard;
