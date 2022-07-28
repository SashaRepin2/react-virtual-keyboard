export enum BUTTON_TYPES {
    DEFAULT,
    ENTER,
    SHIFT,
    CAPS,
    BACKSPACE,
    DEL,
    ALT,
    FN,
    TAB,
    ARROW_LEFT,
    ARROW_RIGHT,
    ARROW_DOWN,
    ARROW_UP,
    SPACE,
    ESC,
}

export type TKeyboardBtn = {
    value: { default: string; shift?: string };
    type: BUTTON_TYPES;
};

export type TRowBtns = TKeyboardBtn[];

export type TKeyBoardMod = {
    name: string;
    keys: TRowBtns[];
};

export type TKeyBoardMods = TKeyBoardMod[];

export interface IPanelOptions {
    isCanHide: boolean;
    isCanFix: boolean;
}

export type TInputKeyboard = HTMLInputElement | HTMLTextAreaElement;

export interface IKeyboard {
    defaultPosition: {
        x: number;
        y: number;
    };
    isCanMove: boolean;
    keys: TRowBtns[];
}
