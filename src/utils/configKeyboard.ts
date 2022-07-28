import { BUTTON_TYPES, IKeyboard } from "../interfaces/interface";

const keyboard: IKeyboard = {
    isCanMove: false,
    defaultPosition: {
        x: 550,
        y: 550,
    },
    keys: [
        [
            {
                value: { default: "ESC" },
                type: BUTTON_TYPES.ESC,
            },
            {
                value: { default: "ё" },
                type: BUTTON_TYPES.DEFAULT,
            },
            {
                value: { default: "`", shift: "~" },
                type: BUTTON_TYPES.DEFAULT,
            },
            {
                value: { default: "1", shift: "!" },
                type: BUTTON_TYPES.DEFAULT,
            },
            {
                value: { default: "2", shift: "@" },
                type: BUTTON_TYPES.DEFAULT,
            },
            {
                value: { default: "3", shift: "#" },
                type: BUTTON_TYPES.DEFAULT,
            },
            {
                value: { default: "4", shift: "$" },
                type: BUTTON_TYPES.DEFAULT,
            },
            {
                value: { default: "5", shift: "%" },
                type: BUTTON_TYPES.DEFAULT,
            },
            {
                value: { default: "6", shift: "^" },
                type: BUTTON_TYPES.DEFAULT,
            },
            {
                value: { default: "7", shift: "&" },
                type: BUTTON_TYPES.DEFAULT,
            },
            {
                value: { default: "8", shift: "*" },
                type: BUTTON_TYPES.DEFAULT,
            },
            {
                value: { default: "9", shift: "(" },
                type: BUTTON_TYPES.DEFAULT,
            },
            {
                value: { default: "0", shift: ")" },
                type: BUTTON_TYPES.DEFAULT,
            },
            {
                value: { default: "-", shift: "_" },
                type: BUTTON_TYPES.DEFAULT,
            },
            {
                value: { default: "=", shift: "+" },
                type: BUTTON_TYPES.DEFAULT,
            },
        ],
        [
            {
                value: { default: "TAB" },
                type: BUTTON_TYPES.TAB,
            },
            { value: { default: "q" }, type: BUTTON_TYPES.DEFAULT },
            { value: { default: "w" }, type: BUTTON_TYPES.DEFAULT },
            { value: { default: "e" }, type: BUTTON_TYPES.DEFAULT },
        ],
        [
            {
                value: { default: "CAPS" },
                type: BUTTON_TYPES.CAPS,
            },
            {
                value: { default: "SHIFT" },
                type: BUTTON_TYPES.SHIFT,
            },
            {
                value: { default: "ENTER" },
                type: BUTTON_TYPES.ENTER,
            },
        ],
    ],
};

export default keyboard;
// class Config implements IConfigKeyboard {
//     defaultPosition: {
//         x: number;
//         y: number;
//     };
//     isCanHide: boolean;
//     isCanMove: boolean;
//     keys: TypeRowButtons[];

//     constructor() {
//         this.defaultPosition = { x: 0, y: 0 };
//         this.isCanHide = true;
//         this.isCanMove = true;
//         this.keys = [];
//     }
// }
